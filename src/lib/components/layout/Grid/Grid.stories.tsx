import type { Meta, StoryObj } from "@storybook/react";

import { Grid, GridProps } from "./Grid";
import { Box, Text } from "../../atoms";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Layout/Grid",
  component: Grid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const getGridExample = (container: boolean) => {
  const GridExample = (props: GridProps) => {
    const containerProps = container ? props : {};
    const itemProps = container ? {} : props;
    return (
      <Grid container gap={"space-10"} {...containerProps}>
        <Grid size={4} {...itemProps}>
          <Box height={"100%"} bg={container ? "background-brand-secondary" : "background-brand"}>
            <Text>Item 4</Text>
          </Box>
        </Grid>
        <Grid size={4}>
          <Box height={"100%"}  bg={"background-brand-secondary"}>
            <Text>Item 4</Text>
          </Box>
        </Grid>
        <Grid size={4}>
          <Box height={"100%"}  bg={"background-brand-secondary"}>
            <Text>Item 4</Text>
          </Box>
        </Grid>
        <Grid size={4}>
          <Box height={"100%"}  bg={"background-brand-secondary"}>
            <Text>Item 4</Text>
          </Box>
        </Grid>
        <Grid size={8}>
          <Box height={"100%"} bg={"background-brand-secondary"}>
            <Text>Item 4</Text>
          </Box>
        </Grid>
      </Grid>
    );
  };
  return GridExample;
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const GridItem: Story = {
  render: getGridExample(false),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cKHlZMzAWJwWwTTFQIbkYw/Wonz-Main-Flow?node-id=704-5827&t=BYnqLOI1KlWiIOO9-4",
    },
  },
};

export const GridContainer: Story = {
  render: getGridExample(true),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cKHlZMzAWJwWwTTFQIbkYw/Wonz-Main-Flow?node-id=704-5827&t=BYnqLOI1KlWiIOO9-4",
    },
  },
};

export const GridGap: Story = {
  render: getGridExample(true),
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/cKHlZMzAWJwWwTTFQIbkYw/Wonz-Main-Flow?node-id=704-5827&t=BYnqLOI1KlWiIOO9-4",
    },
  },
  args: {
    rowGap: "space-60",
    columnGap: "space-40",
  }
};