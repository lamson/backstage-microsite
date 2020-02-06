---
id: layout-components
title: Layout components
sidebar_label: Layout components
---

Backstage has pre-made React components to make it quick and easy to create a new page using our standard layout. For understandability, we prefer to have flat routing whenever possible - with a direct mapping between a `PluginRoute` and a single `Page` object.

## Integrating into an existing layout

Developing a plugin that integrates into an existing layout, such as the layout for `Service`, only takes a few lines of code:

```jsx
class MyPluginPage extends Component {
  render() {
    const { serviceId } = this.props;
    return (
      <ServiceLayout id={serviceId}>
        <ContentHeader title="My Plugin" />
        <MyPluginComponent serviceId={serviceId} />
      </ServiceLayout>
    );
  }
}

export default connect((state, props) => ({
  serviceId: props.match.params.serviceId
}))(MyPluginPage);
```

There is a `connect` call that interacts with `react-router` to get the `serviceId` into a normal prop, then the page can simply render a `ServiceLayout` to get the standard header and menu for services. There are similar `Layout` classes pre-defined for all [top-level entity types](https://ghe.spotify.net/backstage/backstage-frontend/tree/master/src/shared/components/layout) in Backstage.

#### ContentHeader

The `ContentHeader` component shown above renders a title for your plugin page, and can optionally contain normal React children:

```jsx
<ContentHeader title="My Plugin">
  <Button variant="raised" color="primary" onClick={this.handleCreate}>
    Create endpoint
  </Button>
</ContentHeader>
```

See the [custom layout](#creating-a-custom-layout) section for an illustration of where the `ContentHeader` component appears in our standard layout.

##### SupportButton

We encourage plugin developers to include a `SupportButton` component in the `ContentHeader` section. This renders our standard Support button and dropdown seen on many plugin pages, and directs people to the right place to give feedback for the page. This can include any standard React children that you'd like to appear in the dropdown. The most common elements are component-ized to make the code minimal:

```jsx
<ContentHeader title="My Plugin">
  <SupportButton slackChannel="#tools" email="tools-squad@spotify.com">
    <Documentation>
      <Link to="https://spotify.net/my-plugin">API Documentation</Link>
      <Link to="https://confluence.spotify.net/my-plugin">User Guide</Link>
    </Documentation>
    <StackOverflow>
      <StackOverflowTag tag="my-plugin" />
    </StackOverflow>
  </SupportButton>
</ContentHeader>
```

This should be defined as a component itself (`MyPluginContentHeader`) if it will be re-used across several pages.

**Note!** Stack Overflow tags and Slack support channel can also be specified in your `plugin-info.yaml` under the `facts:`:

```yaml
facts:
  support_channel: melmac
  stackoverflow_tags:
    - infrastructure
    - capacity
    - phoenix
```

### Using the GraphQL backend

For plugins integrating into existing `Layout` classes, using the Backstage [GraphQL backend](https://ghe.spotify.net/backstage/backstage-backend) is as simple as defining a GraphQL `fragment` (not to be confused with a React `Fragment`, also shown in this example) and passing it to the layout component:

```jsx
import gql from 'graphql-tag';

class MyPluginPage extends Component {
  static fragment = gql`
    fragment MyPluginPage on Component {
      id
      roles {
        id
      }
      lifecycle
      system
    }
  `;

  render() {
    const { serviceId } = this.props;
    return (
      <ServiceLayout id={serviceId} fragment={MyPluginPage.fragment}>
        { service => (
          <Fragment>
            <ContentHeader title="My Plugin" />
            <MyPluginComponent service={service} />
          </Fragment>
        })
      </ServiceLayout>
    );
  }
}
```

For this usage, note that the child of `ServiceLayout` is a function that accepts the `service` object returned from GraphQL and returns React children. The `ServiceLayout` class handles fetching the data, and displaying a progress bar and any returned GraphQL errors.

## Creating a custom layout

If you're creating a standalone tool that doesn't integrate into an existing Backstage page, you can create a custom layout with your own header, theme and navigation. You can use the same component building blocks as we do when creating pages:

    Page
    +------------------------------------------+
    | Header                                   |
    +------------+-----------------------------+
    | Navigation | ContentHeader               |
    |            |     SupportButton           |
    |            +-----------------------------+
    |            | Content                     |
    |            |     MyPluginComponent       |
    |            |                             |
    |            |                             |
    |            |                             |
    +------------------------------------------+

### Page

The `Page` component wraps a displayed page and serves two purposes:

1. It creates a `Theme.Provider` that descendants can use to get style-related properties from the page theme.
2. It structures the CSS grid to create the standard layout.

The CSS grid layout uses named template areas for the `Header` and `Navigation`, and renders gracefully if these are not supplied. Thus, to make a full-width page you only need to omit a `<Navigation>` component.

The `Page` component accepts a `theme` prop, which should be one of the pre-defined themes in [PageThemeProvider](https://ghe.spotify.net/backstage/backstage-frontend/blob/master/src/core/app/PageThemeProvider.js).

### Header

The `Header` component displays the colorful header than spans all pages for a certain type of entity. The colors in the header are calculated from the [page theme](#page). This appears **above** the page navigation, so it should not change when navigating between the different pages in the `Navigation` below it.

Headers can include `HeaderLabel`, a simple label/value component that can optionally link somewhere:

```jsx
<Header title={service.id}>
  <HeaderLabel label="Lifecycle" value={service.lifecycle} />
  <HeaderLabel
    label="TC4B"
    value={service.tc4bLevel}
    url="https://developer.spotify.net/TC4B"
  />
</Header>
```

### Navigation

The `Navigation` component contains `NavItem`s that structure a menu for your page:

```jsx
class MyPluginNavigation extends Component {
  render() {
    const baseUrl = "/my-plugin";

    return (
      <Navigation>
        <NavItem title="Overview" href={baseUrl} />
        <NavItem title="Capacity" href={`${baseUrl}/capacity`} />
      </Navigation>
    );
  }
}
```

This can be somewhat duplicated from `PluginRoute` declarations, which feels a bit like repeating yourself. In practice, we've found that menu items rarely change and the solutions to abstract this out make the component structure harder to understand.

#### Condensed navigation mode

The Navigation component can be set to render in _condensed_ mode: `<Navigation condensable>`, allowing the user to choose whether
the navigation element should be take up less screen width realestate. The users preference is automatically persisted in localStorage.

!!! Warning

    This should only be applied to navigation elements where **all** `<NavItem>`'s have icons set.

![nav](assets/navigation.gif)

### Content

The `Content` component simply occupies the named CSS grid area for it, and serves as a blank canvas for your plugin. This may contain a [ContentHeader](#ContentHeader) and whatever your imagination can dream up.

### Putting it all together

For a full example of using these page components, see the [ExampleLayout](https://ghe.spotify.net/backstage/backstage-frontend/blob/master/src/plugins/_examples/basic/layout/ExampleLayout.js) from our example plugin in the Backstage source code.

### Custom GraphQL queries

For custom pages that also want to interact with the Backstage [GraphQL backend](https://ghe.spotify.net/backstage/backstage-backend), we have a slightly more generic `QueryLayout` that accepts arbitrary `query` and `variables` props:

```jsx
class MyCustomPage extends Component {
  static query = gql`
    query($username: String!, $id: String!) {
      system(id: $id) {
        id
      }
      user(username: $username) {
        services {
          id
        }
      }
    }
  `;

  render() {
    const { id, username } = this.props;

    return (
      <QueryLayout query={MyCustomPage.query} variables={{ id, username }}>
        {data => {
          const { system, user } = data;
          return (
            <Page theme={theme.system}>
              <Content>
                <ContentHeader title="My Custom Page" />
                <MyPluginComponent system={system} user={user} />
              </Content>
            </Page>
          );
        }}
      </QueryLayout>
    );
  }
}
```

Similar to integrating with existing layouts using GraphQL, the child of `QueryLayout` should be a function accepting the GraphQL data that was returned. The loading state and error handling is provided by `QueryLayout`.

For easy handling of empty state, you can also provide a few _optional_ additional props to `QueryLayout`:

1. `handleEmptyCheck`: A function that accepts the returned GraphQL data and returns a boolean `true` if the empty state should be displayed.
2. `emptyTitleText`: The title to display, such as "No service found".
3. `emptyHelperText`: The text to display below the title, such as "We couldn't find a service by the name \${this.props.id}" (for such variable interpolation, this would need to be defined somewhere with access to `props`).
4. `emptyLink`: A link for the button shown in the empty state, such as "/services-owned".
5. `emptyLinkText`: The text for the button, such as "Back to my services".

If you define your own `Layout` class to render a custom layout across multiple pages, these can often be `defaultProps` in the layout itself.
