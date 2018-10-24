---
title: "Code Splitting in Webpack 3 - CSS Bundle"
tags:
- code splitting
- Webpack
- optimization
- css bundle
categories:
- Dev
date: 2016-12-08
---



As I promised in part 2, this time we will take a look at how to separate `css` into a single file.

<!-- more-->

If you use `webpack` before, you know that `webpack` treating **everything** as an dependency, not just `js`, but **everything**. This is the mighty power of  `webpack`.

So if you want to use `css` or `sass` in your code, you need to specify like this:

```js
require('bootstrap.css');              //css
require('bootstrap.sass');             //sass
```

Then you need to use loader to convert these files because `webpack` default will treat everything as `js` . 

```js
//webpack.config.js
module.exports = {
  //...
  module: {
    loaders: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loaders:['style-loader', 'css-loader']
    }]
  }
  //...
}
```

<div class="tips">
Under the hood, `webpack` will use `acron` to generate AST (abstract syntax tree) so it can analyze the code. That's how `webpack` generate dependency trees, optimize the code etc.

If we don't use loader to convert the non -`js` files, the AST will fail. Hence bundle errors.

</div>

Also by default, `webpack` will load the `css` as  an `js` function and they will scatter in different places just as other functions. As tradition, we tend to put them into a single file. `webpack` also allow us to do that by using `extract-text-webpack-plugin`.

> See the pattern? To `webpack`, everything is a plugin :rocket:

Let's take a look at the example `webpack` provided in its [repo](https://github.com/webpack/webpack/tree/master/examples/code-splitted-css-bundle).

## The example

In this example, we have a `example.js`, which will use `style.css`  (which will style the whole html page's `background`) and also `chunk.js`. In `chunk.js`, it will use `style2.css` to change the `background` of class `xyz`.

```js
// example.js
require("./style.css");
require(["./chunk"]);

// chunk.js
require("./style2.css");
```

```css
/* style.css */
* {
	background: url(image.png);
}

/* style2.css */
.xyz {
	background: url(image2.png);
}
```

Normally we will use the configuration similar to this:

```js
module.exports = {
	entry: './example.js',
	output: {
		path: './js',
		filename: 'output.js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			exclude: /node_modules/,
			loaders: ['style-loader','css-loader']
		}, {
			test: /\.png$/,
			loader: "file-loader"
		}]
	}
};

```

The result will be like the following:

```bash
Hash: 1d9e7e0e92f9bcc3c3e9
Version: webpack 2.1.0-beta.27
Time: 705ms
                               Asset       Size  Chunks             Chunk Names
ce21cbdd9b894e6af794813eb3fdaf60.png  119 bytes          [emitted]
                         0.output.js    1.54 kB       0  [emitted]
                           output.js    15.6 kB       1  [emitted]  main
   [3] ./chunk.js 26 bytes {0} [built]
   [6] ./example.js 70 bytes {1} [built]
    + 8 hidden modules
```

`webpack` will generate `js` file, but not `css` file by default.

If we want to generate a separate `css` file, we need to modify our configuration file to this:

```js
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './example.js',
	output: {
		path: './js',
		filename: 'output.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					notExtractLoader: "style-loader",
					loader: "css-loader"
				})
			},
			{ test: /\.png$/, loader: "file-loader" }
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "style.css"
		})
	]
};
```

Now if we run command `webpack`, we will get the following result

```bash
Hash: 73d0a46a3b928c448a64
Version: webpack 2.1.0-beta.27
Time: 4691ms
                               Asset       Size  Chunks             Chunk Names
ce21cbdd9b894e6af794813eb3fdaf60.png  119 bytes          [emitted]
                         0.output.js  601 bytes       0  [emitted]
                           output.js    7.17 kB       1  [emitted]  main
                           style.css   65 bytes       1  [emitted]  main
   [1] ./chunk.js 26 bytes {0} [built]
   [2] ./example.js 70 bytes {1} [built]
    + 5 hidden modules
Child extract-text-webpack-plugin:
        + 3 hidden modules
```

There's our `style.css` which includes all the styles we defined (to be more precise, it contains all the styles we **used**).

That's how you do css bundle in `webpack` !

Happy hacking!