import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  args: {
    children: "Text",
  },
  // argTypes: {
  //   weight: { control: "color" },
  // },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    as: "span",
  },
};
