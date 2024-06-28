import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card.tsx";
import { Flex, Stack } from "../../layout";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";
import { Box } from "../../atoms";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  args: {
    children: (
      <Stack vertical noMarginBottom>
        <Heading level={2}>Card Title</Heading>
        <Paragraph small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula, odio nec lacinia fermentum, nisl libero tincidunt metus, nec
          aliquam nunc risus in metus.
        </Paragraph>
        <Box width="100%">
          <Flex justify="end" noMarginBottom>
            <Button variant="secondary">Action</Button>
          </Flex>
        </Box>
      </Stack>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const WithPadding: Story = {
  args: {
    withPadding: true,
  },
};

export const CanHover: Story = {
  args: {
    withPadding: true,
    canHover: true,
  },
};

export const Inverted: Story = {
  args: {
    withPadding: true,
    canHover: true,
    inverted: true,
    children: (
      <Stack vertical noMarginBottom>
        <Heading inverted level={2}>
          Card Title
        </Heading>
        <Paragraph small inverted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula, odio nec lacinia fermentum, nisl libero tincidunt metus, nec
          aliquam nunc risus in metus.
        </Paragraph>
        <Box width="100%">
          <Flex justify="end" noMarginBottom>
            <Button>Action</Button>
          </Flex>
        </Box>
      </Stack>
    ),
  },
};
