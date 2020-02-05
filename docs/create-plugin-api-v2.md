---
id: create-plugin-api-v2
title: Create Plugin API v2
sidebar_label: Create Plugin API v2
---

To reduce complexity within Backstage core we're moving away from the current implementation of the Plugin API. And as we change a lot under the hood, we also want to enhance the usability of the API that contributors interact with. In general we want to reduce the touch area for developers and provide a clean way of getting the job done, no extra characters or functionality unless necessary. Here is our current solution. Try it out on your plugins and tell us what you like and what can be improved.

## `createPlugin` Function

> This replaces the Plugin class creation that previously extended `PluginBase`. Instead of exporting a class you now export the result of calling `createPlugin` with your plugin configuration.

Example of registering routes.

```javascript
import React from "react";
import { createPlugin } from "shared/pluginApi";

const OverviewPage = React.lazy(() => import("./OverviewPage"));
const AwesomePage = React.lazy(() => import("./AwesomePage"));

export default createPlugin({
  manifest: require("./plugin-info.yaml"),

  register({ router }) {
    router.registerRoute("/entity/:entityId", OverviewPage);
    router.registerRoute("/entity/:entityId/awesome", AwesomePage);
  }
});
```

## Plugin Configuration

As seen above, the object passed to `createPlugin` contains a `manifest` and a `register` property.

### `manifest`

The manifest is the same old yaml as before.

### `register`

The `register` function is similar to the current `initialize` method on PluginBase. Calling the new function "register" makes its intention clear, this is where you register your routes, feature flags, etc. It's not a place for any other type of business logic and you shouldn't trigger side effects here.

Notice the object parameter of the function. It is an object with predefined APIs that allow registrations. In the example we destructure the object to get `router`. But as of this writing it also contains `featureFlags` and `menu`.

These are the APIs and their registration signatures. See TS types in `/shared/pluginAPI/createPlugin.ts`.

```javascript
{
  router: {
    registerRoute: (path, Component, options = {}),
    registerRedirect: (path, target, options = {})
  },
  menu: {
    add: (options),
  },
  featureFlags: {
    register: (id),
    get: (id),
  }
}
```
