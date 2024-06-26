import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta = {
  title: "Components/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Hello from supreme-kit",
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Bold: Story = {
  args: {
    bold: true,
    level: 4,
  },
};

export const Small: Story = {
  args: {
    level: 4,
  },
};
