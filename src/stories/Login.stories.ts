import type { Meta, StoryObj } from "@storybook/react";

import { Login } from "./Login";

const meta = {
  title: "Example/Login",
  component: Login,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginStory: Story = {};
