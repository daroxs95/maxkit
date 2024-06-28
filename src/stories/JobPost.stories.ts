import type { Meta, StoryObj } from "@storybook/react";

import { JobPost } from "../JobPost";

const meta = {
  title: "Example/JobPost",
  component: JobPost,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof JobPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {};
