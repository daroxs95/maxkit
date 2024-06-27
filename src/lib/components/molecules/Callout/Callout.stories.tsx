import type { Meta, StoryObj } from "@storybook/react";
import { Callout } from "./Callout.tsx";

const meta = {
  title: "Components/Callout",
  component: Callout,
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Info",
    text: "I am a the content text",
  },
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
  },
};
