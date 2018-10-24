---
title: "Dynamic Require in Webpack"
tags:
- Webpack
- Dynamic require
categories:
- Dev
date: 2016-09-09
---



Webpack is undoubtly powerful.

<!-- more-->

Here’s a trick I learned tody. When you have many pictures/icons which will be using by your app, you probably will name them according to a rule so that it’s easy to be picked up by the program.

E.g. You have several teams, and each team has lots of pictures. You put them under separated folders. When you use them, you prefer to use them like this:

`./teams/${team}/${image}.svg`

This is much simpler than manually coding each pictures.

When you use webpack, it seems a little difficult to do such thing. Because for webpack, each file is an asset. You refer them by using `require` statement. There seems to have to load them one by one. Oh my!

Good news is webpack does support this! Here’s a screenshot of use the `require`with an expression. This is called **dynamamic require**.

![webpack-dynamic-require.png](/images/webpack-dynamic-require.png)

The screenshot is using React, but you can apply this to other framework as well.

p.s: this is [the source](https://github.com/facebookincubator/create-react-app/issues/585) where I learned this trick.