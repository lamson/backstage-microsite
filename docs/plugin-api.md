---
id: plugin-api
title: Plugin API
sidebar_label: Plugin API
---

## `plugin-info.yaml`

The `plugin-info.yaml` follows the same syntax as the `service-info.yaml`. 

Example:

```yaml
id: examplePlugin
title: Example Plugin
description: The example plugin for us by Backstage developers
owner: "tools"
visibility: public
facts:
  authors:
    - slack: someone
```

## `PluginBase`

### Properties

- `PluginBase::pluginManager`: A reference to the single root `PluginManager` instance used by Backstage.
- `PluginBase::manifest`: this must be populated from the `plugin-info.yaml`. See Instantiation below.

### Instantiation

```jsx
import { PluginBase } from "shared/pluginApi";
import pluginManifest from "plugins/_examples/basic/plugin-info.yaml";

export default class ExamplePlugin extends PluginBase {
  manifest = pluginManifest;

  initialize() {}
}
```

Initialize is called when your plugin has been instantiated by Backstage, before anything in React has finished rendering. 

As a result, this is a great place to:

- Setup routes
- Setup redirects
- Add custom search items to the Backstage search box

### Loading the component

Use React's [lazy](https://reactjs.org/docs/code-splitting.html#reactlazy) function to dynamically load components.

```jsx
const Component = React.lazy(() => import("./Component"));
```

### Routing

Requires a reference to your plugin instance, so we recommend doing the initialization inside of `initialize() {}`.

```javascript
import React from 'react';
import { PluginBase, PluginRoute } from 'shared/pluginApi';
import pluginManifest from 'plugins/_examples/basic/plugin-info.yaml';

const ExamplePage1 = React.lazy(/* istanbul ignore next */ () =>
  import(/* webpackChunkName: "example-plugin" */ 'plugins/_examples/basic/pages/ExamplePage1')
);

export default class ExamplePlugin extends PluginBase {
  ...

  initialize() {
    this.registerRoute(new PluginRoute(this, '/example', true, ExamplePage1));
  }
}
```

- `pluginOwner`: A reference to your plugin instance.
- `path`: The URL to register this route to.
- `exact`: When true, will only match if the path matches the location.pathname exactly.
- `component`: The component that should be rendered.
- `options`:

### URL Parameters

Use `:someValue` as part of the path when registering a sub-route. The value of the param can then be deconstructed from `this.props.match.params`:

```jsx
const { someValue } = this.props.match.params;
```

```jsx
initialize() {
  this.registerRoute(new PluginRoute(this, '/example/:someValue', false, ExamplePage2));
}
```

> Be sure to set the exact argument to `false` when registering the route.

### Redirects

For backwards compatibility your plugin may need to register a route redirect from an old route to a new one.

```jsx
import { PluginBase, PluginRedirect } from 'shared/pluginApi';
import pluginManifest from 'plugins/_examples/basic/plugin-info.yaml';

export default class ExamplePlugin extends PluginBase {
  ...

  initialize() {
    this.registerRedirect(new PluginRedirect(this, '/old-route', '/new-route', false));
  }
}
```

- `pluginOwner`: A reference to your plugin instance.
- `from`: Old route to redirect from.
- `to`: New route to redirect to.
- `exactMatch`: Should have an exact match.
