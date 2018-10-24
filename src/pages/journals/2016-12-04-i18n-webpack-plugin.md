---
title: "Use I18n Plugin in Webpack"
tags:
  - webpack
  - plugin
  - i18n
categories:
  - Dev
date: 2016-12-04
---

`Webpack` has a plugin called `i18n-webpack-plugin`, which can be used to do `simple` translation.

<!-- more-->
<div class="tip">
When I say **simple**, it is really **simple**.
</div>

## Example

This example is taken from the standard i18n example from [webpack repo](https://github.com/webapck/webpack). You can check the whole source code from [here](https://github.com/webpack/webpack/examples/i18n).

In the entry file `example.js`, we use `console.log` function to output some strings:

```js
console.log(__("Hello World")); //this one has the translation
console.log(__("Missing Text")); //this one is missint the translation.
```

We define the translations in a `json` file based on the language. Here we have a `de.json`.

```json
{
  "Hello World": "Hallo Welt"
}
```

What we want is two separated bundle files, each has its own correct strings.

The configuation file we need to use is like this:

```js
var path = require("path");
var I18nPlugin = require("i18n-webpack-plugin");
var languages = {
  en: null,
  de: require("./de.json") // 1
};
module.exports = Object.keys(languages).map(function(language) {
  //2
  return {
    name: language, //3
    entry: "./example", //4
    output: {
      path: path.join(__dirname, "js"),
      filename: language + ".output.js"
    },
    plugins: [
      new I18nPlugin(
        languages[language] //5
      )
    ]
  };
});
```

So let me explain it one by one.

1. We need a mapping table( `languages` object) to tell `webpack` how to find the translation. For each language's translation file, we use `require()` to load them;
2. We use `map` function to generate multiple configuration files for each language in our mapping table. In this case, we have `en` and `de`. So we will generate 2 configuration files at the same time for `webpack` to process. This is called `multi-compiler` feature.
3. We give each configuration file a name and it will be the same as the language name.
4. The `entry` should be the same as we need to use in the normal configuration file. In our case, it should be the `example.js`
5. We need to specify the `I18nPlugin` we use, along with the options.

## Plugin Options

```js
plugins: [
  ...
  new I18nPlugin(languageConfig, optionsObj)
],
```

This plugin takes 2 arguments.

1. `languageConfig`: this is the translation file
2. `optionsObj`: which has 3 options:
   - `optionsObj.functionName`: the default value is `__`, you can change it to other function name.
   - `optionsObj.failOnMissing`: the default value is `false`, which will show a warning message, if the mapping text cannot be found. If set to `true`, the message will be an error message.
   - `optionsObj.hideMessage`: the default value is `false`, which will show the warning/error message. If set to `true`, the message will be hide.

## Limitations

There are lots of complex situations regarding translation, which can not be handled by this plugin.

For example, the [pluralization issue](https://github.com/webpack/i18n-webpack-plugin/issues/1).

Those can certainly be improved in the future.
