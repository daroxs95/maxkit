import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Components/Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  args: {
    children: "Hello from supreme-kit",
  },
  // argTypes: {
  //   weight: { control: "color" },
  // },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const BaseAs: Story = {
  args: {
    as: "h1",
  },
};

export const Responsive: Story = {
  args: {
    as: "span",
    lg: {
      size: "4xl",
    },
  },
};

export const Colored: Story = {
  args: {
    color: "blue-05",
  },
};
