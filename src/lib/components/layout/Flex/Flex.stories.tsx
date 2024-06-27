import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex.tsx";
import { Box, Text } from "../../atoms";

const meta = {
  title: "Components/Layout/Flex",
  component: Flex,
  parameters: {
    // layout: "centered",
  },
  args: {
    gap: "space-60",
    children: [
      <Box bg="background-brand-tertiary">
        <Text>Item 1</Text>
      </Box>,
      <Box bg="background-brand-tertiary">
        <Text>Item 2 bigger</Text>
      </Box>,
      <Box bg="background-brand-tertiary">
        <Text>Item 3</Text>
      </Box>,
      <Box bg="background-brand-tertiary">
        <Text>Item 4</Text>
      </Box>,
      <Box bg="background-brand-tertiary">
        <Text>Item 5</Text>
      </Box>,
    ],
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};

export const Gap: Story = {
  args: {
    gap: "space-100",
  },
};

export const Align: Story = {
  args: {
    vertical: true,
    align: "center",
  },
};

export const Justify: Story = {
  args: {
    justify: "space-between",
  },
};
