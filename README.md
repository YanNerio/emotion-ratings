## emotion-ratings
This plugin allows you to create ratings using emojis!

Preview:

![emotion ratings](https://raw.githubusercontent.com/YanNerio/emotion-ratings/master/preview/previewred.gif)

## Demo

[Emotion Ratings](http://www.yancinerio.com/#/emotion-ratings)

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

## License

[MIT License](http://yancinerio.mit-license.org/) © Yanci Nerio
