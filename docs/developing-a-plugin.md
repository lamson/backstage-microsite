---
id: developing-a-plugin
title: Developing a plugin
sidebar_label: Developing a plugin
---

Welcome to the guide for Backstage Plugin Developers! In here you will find the guidelines for creating a coherent and Backstage-compatible Plugin.

## Local development

Follow the instructions here to get started with a local development environment:

> TODO!

## Plugins

Backstage is a **single-page application** composed of a set of plugins. Our goal with the plugin ecosystem is to make Backstage flexible enough to allow you to
expose anything you like inside your organization. At the same time, plugins allow you to automate as much of the grunt work as possible.

![plugin](assets/plugin.png)

For each plugin, Backstage provides an API to do the following:

- **Routing**: register to and respond to URL routes
- **Redirects**: register to and respond to URL routes and then redirect to another route (e.g. for backwards compatibility)
- **Analytics Events**: both automated (e.g. routing and Link clicking) plus custom events are tracked and stored in BigQuery

## Plugin Definition

Every plugin should minimally consist of:

- **plugin-info.yaml**
- **index.js**
- **[Name]Plugin.js**

A list of all the current plugins in Backstage can be found in the `src/plugins` folder.

## Creating a Plugin

To create a plugin, run the scaffold script:

```
yarn scaffold-plugin
```

![plugin](assets/plugin-scaffold.png)

Plugin name and owner (a squad) are mandatory fields.

Of course, plugins can be created manually as well:

1. Create a new folder (e.g. `src/plugins/[pluginName]`)
2. Create a root plugin class extending `PluginBase`
3. Create a plugin manifest `plugin-info.yaml`
4. Import the plugin manifest to your plugin class
5. Override the `initialize()` lifecycle method and setup your plugin's functionality
6. Expose your plugin to the Backstage ecosystem by importing it into `src/plugins/pluginManagerBootstrap.js`

Backstage will automatically validate your plugin manifest, inject the routes and redirects into `react-router`, hook your plugin functionality
into the appropriate backend services (e.g. analytics events), and manage any errors your plugin may have.

> Support for TypeScript plugins is now in **Alpha**, see `src/plugins/_examples/typescript` for an example. Contributions to improve the TypeScript experience are very welcome.

**Note**

Your plugin can be incredibly simple! It does not even need to have any routes or pages. It could be a set of components used by other plugins.

## Example Plugin

Our primary example plugin can be found in `src/plugins/_examples`. Our goal is to keep this regularly updated with any changes or updates we make to the
plugin API.

Please use this example plugin as a template or starting point for your own plugin development and consider its code style, formatting, etc. as a demonstration
of our expectations of code quality for your plugin.

## Links

Please use the `shared/components/Link.js` class for all of your links.

Examples:

```jsx
<Link to="http://www.spotify.com" />
<Link to="/services/my-service" />
<Link email="me@example.com" />
<Link slackChannel="tools" />
<Link slackUser="username" />
```

## New features

You can configure plugins to conditionally behave in different ways with **Features**.

### Feature flags

If your feature is not intended for everyone you can conditionally show it under a so called Feature flag.
Some feature flags can be used globally such as `debugmode.enabled`.

Feature flags can be toggled by going to the avatar menu in the Backstage toolbar (the one that has your profile picture in it), and choosing `Settings`.

The following example registers a feature flag:

```javascript
import { registerFeatureFlag } from "shared/apis/featureFlags/featureFlagsActions";

// ...

export default class MyPlugin extends PluginBase {
  manifest = pluginManifest;

  initialize() {
    // Call registerFeatureFlag in the initialize() method of your Plugin.
    registerFeatureFlag("my-feature");
  }
}
```

Then you can use this to conditionally add your item to either the Tools menu or on the sidebar menu. The following example shows conditionally adding a sidebar menu-item.

```javascript
import FeatureFlags from "shared/apis/featureFlags/featureFlags";

if (FeatureFlags.getItem("my-feature")) {
  sidebar.menu.push({
    title: "My Feature",
    target: `${url}/my-feature`,
    component: () => <MyFeature />
  });
}
```

### Lifecycle (Alpha, Beta, …)

If your feature is not yet fully baked you can use Alpha or Beta labels to inform your customers.

![lifecycle](assets/lifecycle.png)

Use the ready-made component in `src/shared/components/Lifecycle/Lifecycle.js`:

```javascript
import { AlphaLabel } from 'shared/components/Lifecycle';
…
<span>Monitoring <AlphaLabel isShorthand={true} /></span>
```
