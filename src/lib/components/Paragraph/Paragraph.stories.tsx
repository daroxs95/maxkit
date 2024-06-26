import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "./Paragraph.tsx";

const meta = {
  title: "Components/Typography/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Hello from supreme-kit",
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
