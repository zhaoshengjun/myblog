---
title: Code Splitting in Webpack 1 - Basics
tags:
  - code splitting
  - Webpack
  - optimization
categories:
  - Dev
date: 2016-12-06
---

##The Problem

We all know that deploy a gigantic `bundle.js` with our app is not a good option.  Because the first page should be loaded as fast as possible. Otherwise the user will leave the app.  We, developer, should consider to use any possible options to reduce the initial loading time.

Luckily, `webpack` got you covered!

<!-- more-->

## The Solution

The solution `webpack` used is called `code splitting`. It's splitting the code into different parts (`webpack` 's term is called `chunk`). So the individual page will only need to load the parts it needs. If some parts are already loaded, it will only load the missing part, which is much quicker.

The technique `webpack` uses is to splitting the code when it meets the splitting point. What's a splitting point? It varies based on the module system you are using:

- for `commonjs`, it's `require.ensure(dependencies, callback)`
- for `AMD`, it's `require(dependencies, callback)`
- for `SystemJS`, it's `System.import(dependencies)` 

## The Example

Let's take a look at the`code-splitting`  example from `webpack` [repo](https://github.com/webpack/webpack/tree/master/examples/code-splitting).

Inside `node_modules` folder, we have 4 files, each one represents a module like we used in everyday development. Outside the `node_modules` folder, we have a `example.js`:

```js
//example.js
var a = require("a");                                   //1
var b = require("b");                                   //2
require.ensure(["c"], function(require) {               //3
    require("b").xyz();                                 //4
    var d = require("d");                               //5
});
```

1. Load module `a`
2. Load module `b`
3. Here comes the `require.ensure()`, it tells `webpack` that from this point, we need another chunk to separate the code. This code should include module `c`
4. In the new chunk, load module `b`;
5. in the new chunk load module `d`

So if we use the following configuration:

```js
//webpack.config.js
module.exports = {
  entry:'./example.js',
  output: {
    filename:'output.js'
  }
}
```

and we run command `webpack` (if you already installed `webpack` globally), we should get result similiar to the following:

```bash
Hash: 450a9b9be7c7ef4d290f
Version: webpack 2.1.0-beta.27
Time: 125ms
      Asset       Size  Chunks             Chunk Names
0.output.js  169 bytes       0  [emitted]
  output.js    5.75 kB       1  [emitted]  main
   [4] ./example.js 144 bytes {1} [built]
    + 4 hidden modules
```

As we expected, the output are 2 files:

- `output.js` is the initial chunk, which needs to be loaded first. It contains module `a` and `b` . The rest is the `webpack` polyfill.

  > This will normally be the `js` file in your app's index page.

- `0.output.js` contains module `c` and `d`. In our analysis, it should contain `b` as well, but `b` has already been loaded so `webpack` is smart enough to remove it.

  > This will normally be the `js` file in your app's other page, loaded by routing system. 

There are other tricks to do the code-splitting as well. We'll look at them in following posts.

Stay tuned!

