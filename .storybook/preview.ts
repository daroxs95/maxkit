import type { Preview } from "@storybook/react";
import theme from "./theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // options: {
    //   storySort: (a, b) =>
    //     a.id === b.id
    //       ? 0
    //       : a.id.localeCompare(b.id, undefined, { numeric: true }),
    // },
    docs: {
      theme: theme,
    },
  },
};

export default preview;
