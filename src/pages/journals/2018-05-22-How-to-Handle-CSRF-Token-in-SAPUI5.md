---
title: "How to Handle CSRF Token in SAPUI5"
tags:
  - SAPUI5
  - CSRF Token
date: 2018-05-22
---

## What's CSRF Token

A string to identify that the request is legit.

## Server Side

### Changing the Default CSRF Protection Mechanism[^1][^2][^3]

To change the default CSRF protection mechanism, proceed as follows:

1. Go to transaction `SICF`.

2. Navigate to the ICF node for your service.

3. Double-click your service node.

4. On Service Data choose GUI Configuration.

   > Caution: The value of GUI link must remain Not specified.

5. Enter the following values:

   - Parameter Name: `~CHECK_CSRF_TOKEN`

   - Parameter Value: `0/1` (disable/enable)

     - Compatiblity Mode for SP02 – HTTP Handler in `SICF` (node `sdata`)

       (Default : `X-Requested-With`, to enable XSRF check use, `~CHECK_CSRF_TOKEN=1`)

       The request handler is `/IWFND/CL_SDATA_ODATA_APP`.

     - Standard Mode – HTTP Handler in `SICF` (node `odata`)

       (Default:`XSRF check`, to disable and switch to `X-Requested-With`, use `~CHECK_CSRF_TOKEN=0`)

       The request handler is `/IWFND/CL_SODATA_HTTP_HANDLER`.

6. Choose Continue and save your settings.

## Client Side[^2]

### Get CSRF Token From Server

When you instantiate the OData model, it will get the token if enabled.

```javascript
// OData model is default to handling the token automatically.
// let oModel = new sap.ui.model.odata.v2.ODataModel('service_url',{tokenHandling: true});
let CSRFToken = oModel.getSecurityToken()

//from view
let CSRFToken = this.getView().getModel().oHeaders[‘x-csrf-token’]

// get a new token
oModel.refreshSecurityToken(succss => {
    // success handler, you should be able to get the new token
}, err => {
    // error handler
}, false)
```

> Note: the token WON'T be ready at the `onInit`method, you have to wait till `onAfterRendering`

### Send CSRF Token to Server

Send the token in parameter `x-csrf-token` within the request header.

```javascript
let headerParma = new sap.ui.unified.FileUploaderParameter();
headerParma.setName(‘x-csrf-token’);
headerParma.setValue(CSRFToken);
oUpload.addHeaderParameter(headerParma);
```

### FileUploader

Unfortunately, FileUploader has nothing to do with OData model, so you have to handle it by yourself.

### 3rd Party Tool

You first need to send the request to get the token by using the request header parameter: `*X-CSRF-Token : Fetch*`.

Once you have the token, you can use it as the header parameter while sending your request.

[^1]:

  https://help.sap.com/saphelp_gateway20sp12/helpdata/en/e6/cae27d5e8d4996add4067280c8714e/content.htm

[^2]:

  https://help.sap.com/viewer/753088fc00704d0a80e7fbd6803c8adb/7.4.19/en-US/5574ed6c93654ee4999b4d07cdda532c.html

[^3]:

  https://help.sap.com/viewer/68bf513362174d54b58cddec28794093/7.4.19/en-US/b35c22518bc72214e10000000a44176d.html

[^4]:

  https://blogs.sap.com/2014/07/11/issues-with-csrf-token-and-how-to-solve-them/
