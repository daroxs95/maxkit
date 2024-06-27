import type { Meta, StoryObj } from "@storybook/react";
import { HelpLabel } from "./HelpLabel.tsx";

const meta = {
  title: "Components/Form/HelpLabel",
  component: HelpLabel,
  parameters: {
    layout: "centered",
  },
  args: {
    text: "Hello from supreme-kit",
  },
} satisfies Meta<typeof HelpLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Error: Story = {
  args: {
    error: true,
  },
};
