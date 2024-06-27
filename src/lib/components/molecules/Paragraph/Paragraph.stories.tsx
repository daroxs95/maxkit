import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph.tsx";

const meta = {
  title: "Components/Typography/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  args: {
    children:
      "Hello from supreme-kit: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Bold: Story = {
  args: {
    bold: true,
  },
};

export const Small: Story = {
  args: {
    small: true,
  },
};

export const SmallBold: Story = {
  args: {
    small: true,
    bold: true,
  },
};
