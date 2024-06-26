# Supreme-kit

HBO Max inspired react components library.

## Installation

Install ui toolkit library.
This is built on top of emotion.js but uses a default theme behind the scene.
Which is based on Supreme Design System tokens and primitives.

  ```bash
  npm install supreme-kit
  ```

## Usage

Import and use components in a straightforward way

```jsx
import { Button } from 'supreme-kit';

function App() {
  return (
    <Button>Click me</Button>
  );
}
```

## Overriding theme

You can override the default theme by providing a custom theme object to the `ThemeProvider` from emotion.

  ```jsx
import { ThemeProvider } from "@emotion/react";
import { Button } from "supreme-kit";

const customTheme = {
      components: {
        button: {
          "primary-default": "#002be7ff"
        }
      }
};

  function App() {
      return (
        <ThemeProvider theme={customTheme}>
          <Button>Click me</Button>
        </ThemeProvider>
      );
}
```

## Links

[See showcase](https://supreme-kit-showcase.pages.dev/)

[See documentation](https://supreme-kit.pages.dev/?path=/docs/introduction--docs)
