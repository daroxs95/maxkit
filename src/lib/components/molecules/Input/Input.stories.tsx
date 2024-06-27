import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input.tsx";

const meta = {
  title: "Components/Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "Type in me",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    placeholder: undefined,
  },
};

export const Labeled: Story = {
  args: {
    label: "Email",
  },
};

export const Helper: Story = {
  args: {
    helperText: "We will never share your email",
  },
};

export const Required: Story = {
  args: {
    label: "Email",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    disabled: true,
  },
};

export const Value: Story = {
  args: {
    label: "Email",
    onChange: (e) => {
      console.log(e.target.value);
    },
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    error: "Invalid email",
    helperText: "We will never share your email",
  },
};
