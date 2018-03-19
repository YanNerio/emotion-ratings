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
    // Optional, but considered best practice by some
    "use strict";

    // Name the plugin so it's only in one place
    var pluginName = 'emotionsRating';
    var $element;
    // Default options for the plugin as a simple object
    var defaults = {
        bgEmotion: "happy",
        emotionsCollection: ['angry','disappointed','meh', 'happy', 'inLove'],
        count: 5,
        color: "#d0a658;",
        emotionSize: 30,
        inputName: "rating",
        emotionOnUpdate: null,
        initialRating: null
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
    //the collection of emotions to show on the ratings
    // var colorsArray = {
    //     gold: "#d0a658;",
    //     red: "#cb2a2a;",
    //     blue: "#337ab7;", 
    //     green: "#26bf78;",
    //     black: "#00000;",
    //     brown: "#916a3a;",
    //     pink:   "#f21f6d;",
    //     purple: "#ba27bd",
    //     orange: "#f89e5e;",
    //     yellow: "#f6ef33;"
    // };
    var clicked = false;
    // Plugin constructor
    // This is the boilerplate to set up the plugin to keep our actual logic in one place
    function Plugin(element, options) {
        this.element = element;
        // Merge the options given by the user with the defaults
        this.settings = $.extend( {}, defaults, options );

        // Attach data to the element
        this.$el      = $(element);
        this.$el.data(name, this);

        this._defaults = defaults;
        this._name = pluginName;

        var meta      = this.$el.data(name + '-opts');
        this.opts     = $.extend(this._defaults, options, meta);
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
                 + this.settings.emotionSize +"px; text-decoration:none;line-height:0.9;text-align: center;color:"+this.settings.color+"}";
            $element.append("<style>" + styles + "</style>");
        },
        renderEmotion: function () {
            var self = this;
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
            self.initalRate(this.settings.initialRating);
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
                    self.updateInput(count);
                    clicked = true;
                } else {
                    self.updateInput(count);
                }
                if ($.isFunction(self.settings.onUpdate)) {
                    self.settings.onUpdate.call(self, count);
                }
            });
        },
        initalRate: function(count) {
            var self = this;
           
            self.showEmotion(count);
            if (!clicked) {
                self.appendInput(count);
                clicked = true;
            }
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
        // Iterate through each DOM element and return it
        return this.each(function() {
            // prevent multiple instantiations
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

    var getEmotion = function(_emotions,count) {
        var emotion;
        if (_emotions.length == 1) {
            emotion = emotionsArray[_emotions[0]];
        }else{
            emotion = emotionsArray[_emotions[count-1]];
        }
        return emotion;
    }

})(jQuery, document, window);