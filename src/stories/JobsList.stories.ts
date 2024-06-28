import type { Meta, StoryObj } from "@storybook/react";

import { Jobs } from "../JobsList";

const meta = {
  title: "Example/JobsList",
  component: Jobs,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Jobs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {};
