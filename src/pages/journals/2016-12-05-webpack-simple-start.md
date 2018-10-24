---
title: "Webpack 101 - Start"
tags:
- Webpack
categories:
- Dev
date: 2016-12-05
---



Let's start with the simplest example.

<!-- more-->

# The plan

We'll create 2 `js` files: `a.js` and `b.js`.  `b.js` is dependent on `a.js`. We'll also use a html file to load `js` file.

We certainly won't include all the `js` files in the html. What we want is only the bundled file (in this case, one single file) will be included when we run the program. And this exactly what `webpack` does.

# The steps

For this demo, we want to install `webpack` globally, so we can simplify the command we need to use.

To install `webpack`, we run `yarn`  in terminal:

`yarn global add webpack@2.1.0-beta.27`

Then we create our files under a folder:

```js
//a.js
module.exports = "a";
```

```js
//b.js
var a = require('./a');
console.log(a);
```

```html
<html>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script src="./bundle.js"></script>
</body>
</html>
```

We don't have `bundle.js` yet. That's what we need to use `webpack` to generate for us.

`webpack` can take complex configurations in order to do complex things. But it can also be simple. All you need is to point the **input** and **output**. In `webpack` world, they are called `entry` and `output.filename`. 

Here's the configuration file we need:

```js
module.exports = {
	entry: './b',
	output: {
		filename:'bundle.js'
	}
}
```

We now can run the command to generate the `bundle.js`.  Run the following command in terminal:

```
webpack
```

The output is something like this:

```
Hash: 46e06ba6184056d8ea0b
Version: webpack 2.1.0-beta.27
Time: 93ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.82 kB       0  [emitted]  main
   [0] ./a.js 49 bytes {0} [built]
   [1] ./b.js 69 bytes {0} [built]
```

If we open the `index.html` in chrome and see the console, we can find the output is correct.

That's probably the simplest example for `webpack` ​:)​



