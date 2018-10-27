---
title: Diagnostics Tool in SAPUI5 Apps
tags:
  - SAPUI5
date: 2018-02-05
---

## What's Diagnostic Tool

Diagnostic tool is provided by SAPUI5 to improve the productivity for developers, available both for desktop and mobile.

![SAPUI5-diagnostics-too](../images/SAPUI5-diagnostics-tool.png)

With this tool, you can check:

- Technical information
- Control tree
- Debugging
- JavaScript Trace
- XML View and Templating Support Tools
- Interaction
- Performance

### Technical Information

![SAPUI5-diagnostics-tool-tech-inf](../images/SAPUI5-diagnostics-tool-tech-info.png)

As you can see from the above screenshot, in 'Technical Information' part, you can see the overview of the technical parts of the running SAPUI5 app. Mostly the JS version, but also you can enable the 'Debug Mode'.

With this, you can quickly check if the file version is wrong.

### Control Tree

This might be the highlight of this tool.

In this part, you can see how the components are integrated with each other. And you can find the control by placing this page and the application side by side and clicking the control while pressing `Ctrl+Alt+Shift`.

If there's something wrong with the control structure, you can easily find it with this tool.

![APUI5-diagnostics-tool-control-tre](../images/SAPUI5-diagnostics-tool-control-tree.png)

### Debugging

Honestly, I think this is less useful, at least for me, I am a big fan of **Chrome Developer Tool**.

You can use a different version of UI5 to reload the app, and also set breakpoint for a class method. But you can easily do it using Chrome Developer Tool.

![APUI5-diagnostics-tool-debu](../images/SAPUI5-diagnostics-tool-debug.png)

### Others

Other parts of the diagnostic tool are also less useful.

![APUI5-diagnostics-tool-other](../images/SAPUI5-diagnostics-tool-others.png)

## Enable Diagnostic Tool

### On Desktop

To show the diagnostic tool, you need to press `Ctrl + Shift + Alt + S`.

### On Mobile

In mobile version, you have to press 2 fingers on screen area for at least 3 seconds and then tap the 3rd finger. Wired, right?
