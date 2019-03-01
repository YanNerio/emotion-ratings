[![npm version](https://badge.fury.io/js/emotion-ratings.svg)](https://badge.fury.io/js/emotion-ratings)
## emotion-ratings
This plugin allows you to create ratings using emojis!

Preview:

![emotion ratings](https://raw.githubusercontent.com/YanNerio/emotion-ratings/master/preview/previewred.gif)

![emotion ratings](https://raw.githubusercontent.com/YanNerio/emotion-ratings/master/preview/emotion-ratings-preview.gif)

## Demo

[Emotion Ratings](http://www.yancinerio.com/#/emotion-ratings)

## Installation

You can install `emotion-ratings` component using the *npm* package manager:

```bash
npm install --save emotion-ratings
```

## Usage
1. Include jQuery >=1.9:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="emotion-ratings.min.js"></script>
	```

3. Call the plugin:

	```javascript
	  // the emotions can be an array 
	  var emotionsArray = ['angry','disappointed','meh', 'happy', 'inLove'];
	  // or a single one
	  var emotionsArray = ['happy'];
	  jQ("#element").emotionsRating({
	    emotionSize: 30,
	    bgEmotion: 'happy',
	    emotions: emotionsArray,
	    color: '#FF0066', //the color must be expressed with a css code
            initialRating: 4, //initialize the rating number
	    disabled: true, //set if the rating can be changed or not, default is false
	    onUpdate: function(value) {} //set value changed event handler
	  });
	```
## Use image as emoji
- `useCustomEmotions`: Boolean. This option verifies if you want to use images as emoji.
- `transformImages`: Boolean. This option verifies if you want to process the images. For example; an _svg_ type image when it is added in an _img_ tag, you can not access certain functionalities such as changing the color and border, because it is not in the correct _svg_ tag, and for that reason you have to convert the _img_ tag into a _svg_ type. This process can take processing time and unnecessary in some cases, for this reason it is asked if you want to transform the images and get more features.

### Short explanation about config an image as emoji
Following the original logic, you need by default an emoji to display with less opacity, and one array with the emoji to show in each position, in the original idea you pass the name of the emoji to be displayed, but in the new functionality you have to specific the path of the image you want to show. For example in _bgEmotion_ option; `bgEmotion: 'icons/icon.svg'` and in _emotions_ array `emotions: ['icons/icon1.svg', 'icons/icon2.svg']`

In the case that `useCustomEmotions: true` and `transformImages: true`, the _hover_ event is _disabled_, because it makes the images transform many times, which causes it to fall into a cycle.

_Code example:_

```javascript
// the emotions can be an array with path of the images
var emotionsArray = ['icons/icon1.svg', 'icons/icon2.svg', 'icons/icon3.svg'];
// or a single one
var emotionsArray = ['icons/icon1.svg'];
jQ("#element").emotionsRating({
  bgEmotion: 'icons/icon-default.svg', // String with path of the image
  emotions: emotionsArray,
  useCustomEmotions: true, // Enable use of images as emoji
  transformImages: false,
  initialRating: 4, //initialize the rating number
});
```
If you want to change the size of the image, you can directly modify the _css_, using the element specified in your _js_ file with this: `custom-emotion-style-` class and the selector of the `element`

```css
.custom-emotion-style-element {
  width: 30px;
  height: auto;
}
```


## Contribution
You can contribute by forking and doing a PR.

Active contributors: @moudev 

## License

[MIT License](http://yancinerio.mit-license.org/) © Yanci Nerio
