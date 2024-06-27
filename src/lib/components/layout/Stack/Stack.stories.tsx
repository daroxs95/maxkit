import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";
import { Box } from "../../atoms";

const meta = {
  title: "Components/Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  args: {
    gap: "space-60",
    children: (
      <>
        <Box bg="background-brand">Item 1</Box>
        <Box bg="background-brand">Item 2</Box>
        <Box bg="background-brand">Item 3</Box>
        <Box bg="background-brand">Item 4</Box>
        <Box bg="background-brand">Item 5</Box>
      </>
    ),
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};
