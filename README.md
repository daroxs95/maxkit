# Supreme-kit

HBO Max inspired react components library.

![npm (tag)](https://img.shields.io/npm/v/supreme-kit/latest)

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
import { Button } from "supreme-kit";

function App() {
  return <Button>Click me</Button>;
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
      "primary-default": "#002be7ff",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
```

## Styles reset

For resetting browser styles and achieving correctness, put anywhere in the application:

```tsx
import { Reset } from "supreme-kit";

function App() {
  return <Reset />;
}
```

## Links

[Contribution guidelines](./doc/Contributing.md)

[Releasing guidelines](./doc/Releasing.md)

[See showcase](https://supreme-kit-showcase.pages.dev/)

[See documentation](https://supreme-kit.pages.dev/?path=/docs/introduction--docs)
