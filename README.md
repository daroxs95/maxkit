# Supreme-kit

HBO Max inspired react components library.

![npm (tag)](https://img.shields.io/npm/v/supreme-kit/latest)

## Requirements
- React 19.0.0

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

## Font loading

For loading fonts, use the following snippet in the `head` tag of the `index.html` file:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

## Links

[Contribution guidelines](./doc/Contributing.md)

[Releasing guidelines](./doc/Releasing.md)

[See showcase](https://supreme-kit-showcase.pages.dev/)

[See documentation](https://supreme-kit.pages.dev/?path=/docs/introduction--docs)
