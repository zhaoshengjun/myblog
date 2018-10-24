---
title: Difference/Connections between Component and Directives
tags:
  - Angular 2
  - Component
  - Directive
categories:
  - Dev
date: 2016-05-16
---


Angular 2 introduced `@Component` and also `@Directive` for meta data using TypeScript compatibility. Those who knows Angular 1 probably find these are familiar with `Directives` in Angular 1. But are they the same? Is there any difference? 

<!--more-->

I was confusing too, until I heard one simple yet elegant explanation:

> In Angular 1, `directives` has **E** type and **A** type. `@Component` in Angular 2 is like **E** type directive in Angular 1 while `@Directive` is like **A** type directive.

Hope this will clear your head:)