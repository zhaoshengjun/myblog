---
title: "Fix issue with Angular Material 2"
tags:
  - Angular 2
  - Angular Material 2
categories:
  - Dev
date: 2016-05-12
---

If you have watched the demo of puppy love on ngconf 2016 and pumped to get hands on angualr material 2, trust me, you are **not** alone.

If you try to use angualr cli to create an app and follow along the demo and find out it doesn't work, trust me, you are **not** alone(at least I think so).

If you have the same issue, here's the how to solve it:

<!--more-->

- Change `angular-cli-build.js` in the root folder by adding a line of `'@angular2-material/**/*.js'`

![angular-cli-build.js](../images/cli-build.png)

- Change `sytem-config.ts` in the `src` folder by adding material 2 specific settings (on the top).

![system-config.ts](../images/system-config.png)
