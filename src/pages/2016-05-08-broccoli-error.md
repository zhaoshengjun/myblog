---
title: Fix Broccoli Error in Angular 2
path: "2016-05-08-broccoli-error"
tags:
  - Angular 2
  - Broccoli
categories:
  - Dev
date: 2016-05-08
---

I used `angular-cli` create an Angular 2 app, use the default settings. Then I used `ng serve` command to start the server and made some changes. I must say the process is much better than before, which I has to change the `package.json` and set up a build tool, e.g. `gulp` or `webpack`, specially to enable live-reloading. Now `angular-cli` has all done that for me. Really sweet!

<!-- more-->

Then I left my desktop and stopped the build task. After I returned back and started to run `ng serve` again, I got an error.
![broccoli-error](../images/cli-error.png)

The fix for this error is quite simple: change the generated `spec.ts` file. The reason I think is Broccoli is run the test spec files before it compile the file and feed them to system.js so that Angular can load them onto the webpage. But I was not using a TDD approach so the test file were not match with the app file. So Broccoli was failling.

It looks like Angular is promoting TDD approach!
