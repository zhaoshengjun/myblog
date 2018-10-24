---
title: "Code Splitting in Webpack 4 - Bundle Loader"
tags:
- code splitting
- Webpack
- optimization
- bundle loader
categories:
- Dev
date: 2016-12-09
---



Today I will show you how to do code splitting use `bundle-loader`.

<!-- more-->

What `bundle-loader` does is to make each `require('bundle-loader!xxx.js')` to a Promise. Then it will load the module asynchronously from another chunk.

Let's look at an example.

## The example

We have a entry point `example.js` which will use `bundle-loader` to load `file.js`.

```js
//example.js
require("bundle-loader!./file.js")(function(fileJsExports) {
	console.log(fileJsExports);
});


//file.js
module.exports = "It works";
```

The configuration we use is:

```js
//webpack.config.js
module.exports = {
  entry:'./example.js',
  output:{
    path:"./js",
    filename:'output.js'
  }
}
```

After we run the command `webpack`, we will get the following result:

```bash
Hash: e6bccc1fa42cc8c2b757
Version: webpack 2.1.0-beta.27
Time: 135ms
      Asset       Size  Chunks             Chunk Names
0.output.js  106 bytes       0  [emitted]
  output.js    5.87 kB       1  [emitted]  main
   [1] ./example.js 97 bytes {1} [built]
   [2] ./file.js 28 bytes {0} [built]
    + 1 hidden modules
```

Because we use `bundle-loader` to load `file.js`, `webpack` has generated a separate chunk to contains `file.js`. We can verify it by check inside those 2 chunk files:

- `output.js` is the entry chunk. It contains the `example.js` 
- `0.output.js` contains `file.js`

That's all for today! Thanks!