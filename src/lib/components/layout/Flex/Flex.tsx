import { CSSProperties, ReactNode } from "react";
import { Box } from "../../atoms";
import { SpacingPrimitives } from "../../../theme";

interface FlexProps {
  children: ReactNode | ReactNode[];
  vertical?: boolean;
  gap?: keyof SpacingPrimitives;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
}

export function Flex({ justify, vertical, gap, children, align }: FlexProps) {
  return (
    <Box
      display="flex"
      flexDirection={vertical ? "column" : "row"}
      gap={gap}
      alignItems={align}
      justifyContent={justify}
    >
      {children}
    </Box>
  );
}
