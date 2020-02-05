---
id: components
title: Building components
sidebar_label: Building components
---

## Material-UI

Backstage uses the [Material-UI component library](https://material-ui.com/) as its foundation. Feel free to use any of the Material-UI [components](https://material-ui.com/demos/app-bar/), unless otherwise directed.

If something you want to build isn’t covered in these guidelines, refer to Google’s Material Design Guidelines. In case of conflict between these guidelines and Google’s guidelines, these supercede.

## Use of CSS

All styling is done according to Material-UI’s JSS styling and theming. It is extra important not to use CSS or inline JS styles if font, color or sizing is changed from the global style. The reason is that the UI will support themes, with ‘light’ and ‘dark’ being built-in to Material-UI.

### Functional components and hooks

We prefer this method as it doesn't add HOCs in the react tree like the `withStyles` does. The `makeStyles` function takes styles grouped by a key in an object and returns a hook that in turn returns class names.

How to setup the styles so that the CSS classes are created for us and how to make use of the hook to get the class names returned.

```jsx
import { makeStyles } from "@material-ui/core/styles";
import Button from "shared/components/Button";

// simple custom styles
const useStyles = makeStyles({
  button: {
    marginRight: 4
  }
});

function MyButton(props) {
  const classes = useStyles();
  return <Button className={classes.button}>{props.children}</Button>;
}
```

Here is an example with theme values.

```jsx
// custom styles using theme variables
const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1)
  }
}));

// Button component would look the same
```

And an example using dynamic values from props.

```jsx
// custom styles with dynamic values
const useStyles = makeStyles({
  button: {
    marginRight: props => (typeof props.margin === "number" ? props.margin : 4)
  }
});

function MyButton(props) {
  // props = { margin:4 }
  const classes = useStyles(props);
  return <Button className={classes.button}>{props.children}</Button>;
}
```

Pass `classes` from parent, because sometimes parents want some control. Our hook can extend the classes if passed an object with `classes` as props.

```jsx
function MyButton(props) {
  // props = { classes: { button: 'class-name-from-parent' } }
  const classes = useStyles(props);

  // classes.button = 'class-name-our-styles class-name-from-parent'
  return <Button className={classes.button}>{props.children}</Button>;
}
```

### Class components and HOC

As hooks can only be used by function components we still use HOCs for class components.
The following example adds a color to `src/core/app/Themes.js` and uses this in the Material-UI style classes.

```jsx
import React from 'react';
import { withStyles } from '@material-ui/core';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  globalInfoBar: {
    backgroundColor: theme.palette.background.informational,
    fontSize: '90%',
    fontWeight: 'bolder',
    lineHeight: '1',
    color: theme.palette.type === 'light' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
    padding: '10px 20px 10px 10px',
    textAlign: 'center',
    position: 'relative',
  },
});

class MyComponent extends React.Component {
  const { classes } = this.props;
  render() {
    return (
      <div className={classes.globalInfoBar}>
        <CloseIcon />
      </div>
    );
  }
}

export default withStyles(styles)(MyComponent);
```

For more information about JSS and Material-UI theming and styling see MUI overrides, MUI Themes and the MUI default theme paramaters (before overrides in `src/core/app/Themes.js`).
