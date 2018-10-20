---
title: "Start to Blog"
path: "2016-05-04-start-blog2"
tags:
  - TypeScript
  - Webpack
  - React
  - VsCode
categories:
  - Dev
date: 2016-05-04
---

I haven't writing blogs for years. Last time it landed me a [book contract](http://item.jd.com/11355145.html). But as you know, there's not too much things to share when you in an SAP world.

Things changed, **quickly**.

<!--more-->

Yesterday, I was playing with TypeScript + Webpack + React.js, you know, they are **THE** hottest in JavaScript world. I was frastrated, because the tech stack is so complicated since the JavaScript world are changing so rapidly. Even following along the training tutorials cannot ganrentee that you won't hit the wall.

Long story short, I hit the wall because the TS-Loader in Webpack keeps complianing I cannot use JSX (the file format is actually TSX, but it doesn't matter). I did the thing I did many times - I googled. And googled. It didn't end well. There are not so many blogs talking about this, especially for TS-Loader.

Suddenly, I realized that what TS-loader does is just **transformation** - from TSX to JS. Nothing more. Nothing fancy. Why I have to use this? I can use other tools as long as it does the job. In fact, the editor I use - VsCode - has built-support for TypeScript, because you know, they are all from Micrsoft.

So I changed my `webpack.config.js`, removing the TS-Loader. Also I created a task to let VsCode transform TSX to JS. I have some perfectionlism issue, so I also use VsCode settigns to hide the generated `.js` and `.js.map` files. Here's something tricky, in the settings, VsCode reminds me that I can only use a string to config but it's totally OK to provide an array.

I happily accept the solution. After that, suddenly I feel the strong urge to share this with the world. Because I know that out there so many people are struggling with starting with the current JS world but it's to hard. The JS world is not user-friendly in some perspective.

I simplely just want to make it **less difficult** for people who had the same suffer in today's tech stack while what they want is just **simply start**.
