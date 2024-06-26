import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta = {
  title: "Components/Atoms/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Hello from supreme-kit",
    bg: "background-invert",
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const BaseAs: Story = {
  args: {
    as: "button",
    cursor: "pointer",
    disabledStyles: {
      cursor: "unavailable",
    },
  },
};

export const Responsive: Story = {
  args: {
    as: "section",
    lg: {
      padding: "space-40",
    },
  },
};

export const CustomWidth: Story = {
  args: {
    width: "200px",
    height: "200px",
  },
};
