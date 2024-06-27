import { Box } from "../../atoms";
import { SpacingPrimitives } from "../../../theme";
import { Children } from "react";

interface StackProps {
  children: React.ReactNode | React.ReactNode[];
  vertical?: boolean;
  gap?: keyof SpacingPrimitives;
}

export function Stack({ vertical, gap, children }: StackProps) {
  const items = Children.toArray(children);
  console.log(items);
  return (
    <Box display={vertical ? "block" : "inline"} marginBottom="space-30">
      {items.map((i) => (
        <Box
          marginRight={vertical ? "space-0" : gap}
          marginBottom={!vertical ? "space-0" : gap}
        >
          {i}
        </Box>
      ))}
    </Box>
  );
}
