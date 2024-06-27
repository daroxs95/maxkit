import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button.tsx";

const meta = {
  title: "Components/Form/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Click me",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Tertiary: Story = { args: { variant: "tertiary" } };
export const Danger: Story = { args: { variant: "danger" } };
export const ClickEvent: Story = {
  args: {
    onClick: () => {
      alert("Hello from the other side");
    },
  },
};
export const Small: Story = { args: { small: true } };
export const Disabled: Story = { args: { disabled: true } };
export const TypeSubmit: Story = { args: { type: "submit" } };
