## emotion-ratings
This plugin allows you to create ratings using emoji

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
	  var emotionsArray = ['angry','disappointed','meh', 'happy', 'inLove'];
	  jQ("#element").emotionsRating({
	    emotionSize: 30,
	    bgEmotion: 'happy',
	    emotions: emotionsArray,
	    color: 'pink'
	  });
	```
	
## License

[MIT License](http://yancinerio.mit-license.org/) © Yanci Nerio