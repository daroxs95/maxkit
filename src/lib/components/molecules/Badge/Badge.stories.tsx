import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  args: {
    text: "I am a badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Error: Story = {
  args: {
    variant: "error",
    text: "Error",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    text: "Info",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    text: "Success",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    text: "Warning",
  },
};
