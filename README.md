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
	    color: '#FF0066' //the color must be expressed with a css code
		initialRating: 4 //initialize the rating number
		disabled: true //set if the rating can be changed or not, default is false
	  });
	```
## Contribution
You can contribute by forking and doing a PR, don't be a jerk, don't steal other's ideas without giving any credits! peace!!

## License

[MIT License](http://yancinerio.mit-license.org/) © Yanci Nerio
