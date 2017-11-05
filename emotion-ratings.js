/**
 *********************************
 * Emotions Rating - Yanci Nerio *
 *********************************
 * Emotions Rating
 * Version: 1.0.0
 * URL: https://github.com/YanNerio/emotion-ratings
 * Description: This plugin allows you to create ratings using emojis
 * Requires: >= 1.9
 * Author: Yanci Nerio (www.yancinerio.com)
 * License: MIT
 */

;(function($, document, window, undefined) {

    "use strict";

    var pluginName = 'emotionsRating';
    var $element;
    // Default options for the plugin
    var defaults = {
        bgEmotion: "happy",
        emotionsCollection: ['angry','disappointed','meh', 'happy', 'inLove'],
        count: 5,
        emotionSize: 30,
        inputName: "rating",
        emotionOnUpdate: null
    };
    //the collection of emotions to show on the ratings
    var emotionsArray = {
          angry: "&#x1F620;",
          disappointed: "&#x1F61E;",
          meh: "&#x1F610;", 
          happy: "&#x1F60A;",
          smile: "&#x1F603;",
          wink: "&#x1F609;",
          laughing: "&#x1F606;",
          inLove: "&#x1F60D;",
          heart: "&#x2764;",
          crying: "&#x1F622;",
          star: "&#x2B50;",
        };
    
    var clicked = false;

    // Plugin constructor
    function Plugin(element, options) {
        this.element = element;
        // Merge the options given by the user with the defaults
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    
    //Avoiding conflicts with prototype
    $.extend(Plugin.prototype = {
        // Public functions accessible to users
        // Prototype methods are shared across all elements
        // You have access to this.settings and this.element
        init: function() {
            $element = $(this.element);
            this.count = 0;
            this.emotionStyle();
            this.renderEmotion();            
            this.manageHover();
            this.manageClick();
        },
        emotionStyle: function() {
            var styles = ".emotion-style{margin-right:3px;border-radius: 50%;cursor:pointer;opacity:0.3;display: inline-block;font-size:"
                 + this.settings.emotionSize +"px; text-decoration:none;line-height:0.9;text-align: center;color:#d0a658}";
            $element.append("<style>" + styles + "</style>");
        },
        renderEmotion: function () {
            var count = this.settings.count;
            var bgEmotion = emotionsArray[this.settings.bgEmotion];
            var container = "<div class='emotion-container'>";
            var emotionDiv;

            for (var i = 0; i < count; i++) {
                emotionDiv = "<div class='emotion-style' data-index='" + i + "'>"+bgEmotion+"</div>";
                container += emotionDiv;
            }
            container += "</div>";

            $element.append(container);
        },
        clearEmotion: function(content) {
            $element.find(".emotion-style").each( function() {
                $(this).css("opacity", 0.3);
                var bgEmotion = emotionsArray[content];
                $(this).html(bgEmotion);
            });
        },
        showEmotion: function(count) {
            this.clearEmotion(this.settings.bgEmotion);
            var emotion = getEmotion(this.settings.emotions,count);
            for (var i = 0; i < count; i++) {                
                $element.find(".emotion-style").eq(i).css("opacity", 1);
                $element.find(".emotion-style").eq(i).html(emotion);
            }
        },
        manageHover: function() {
            var self = this;

            $element.on({
                mouseenter: function() {
                    var count = parseInt($(this).data("index"), 10) + 1;

                    if (clicked) {
                        return;
                    }
                    self.showEmotion(count);
                },
                mouseleave: function() {
                    if (!clicked) {
                        self.clearEmotion();
                    }
                }
            }, ".emotion-style" );
        },
        manageClick: function() {
            var self = this;
            $element.on("click", ".emotion-style", function() {
            var index = $(this).data("index"),
                count = parseInt(index, 10) + 1;

                self.showEmotion(count);
                self.count = count;

                if (!clicked) {
                    self.appendInput(count);
                    clicked = true;
                } else {
                    self.updateInput(count);
                }
                if ($.isFunction(self.settings.onUpdate)) {
                    self.settings.onUpdate.call(self, count);
                }
            });
        },        
        appendInput: function(count) {
            var _input = "<input type='hidden' class='emoji-rating'" + 
                    " name='" + this.settings.inputName + 
                    "' value='" + count + "' />";

            $element.append(_input);
        },
        updateInput: function(count) {
            var _input = $element.find("input.emoji-rating");

            _input.val(count);
        }
    });

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

    var getEmotion = function(_emotions,count) {
        var emotion;
        emotion = emotionsArray[_emotions[count-1]];
        return emotion;
    }

})(jQuery, document, window);