import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "./List";

const meta = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  args: {
    children: [
      <ListItem>Item 1</ListItem>,
      <ListItem>Item 2</ListItem>,
      <ListItem>Item 3</ListItem>,
    ],
  },
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Ordered: Story = {
  args: {
    ordered: true,
  },
};

export const Nested: Story = {
  args: {
    children: [
      <ListItem>
        Item 1
        <List>
          <ListItem>Item 1.1</ListItem>
          <ListItem>Item 1.2</ListItem>
        </List>
      </ListItem>,
      <ListItem>
        Item 2
        <List>
          <ListItem>Item 2.1</ListItem>
          <ListItem>Item 2.2</ListItem>
        </List>
      </ListItem>,
    ],
  },
};
