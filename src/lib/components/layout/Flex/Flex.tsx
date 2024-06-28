import { CSSProperties, ReactNode } from "react";
import { Box } from "../../atoms";
import { SpacingPrimitives } from "../../../theme";

interface FlexProps {
  children: ReactNode | ReactNode[];
  vertical?: boolean;
  gap?: keyof SpacingPrimitives;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  noMarginBottom?: boolean;
  wrap?: boolean;
}

export function Flex({
  justify,
  vertical,
  gap,
  children,
  align,
  noMarginBottom,
  wrap,
}: FlexProps) {
  return (
    <Box
      display="flex"
      flexDirection={vertical ? "column" : "row"}
      gap={gap}
      alignItems={align}
      justifyContent={justify}
      marginBottom={noMarginBottom ? "space-0" : "space-70"}
      flexWrap={wrap ? "wrap" : "nowrap"}
    >
      {children}
    </Box>
  );
}
