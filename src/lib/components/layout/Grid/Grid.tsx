import { ReactNode } from "react";
import { Box } from "../../atoms";
import { SpacingPrimitives } from "../../../theme";

export interface GridProps {
  children?: ReactNode | ReactNode[];
  container?: boolean;
  gap?: keyof SpacingPrimitives;
  rowGap?: keyof SpacingPrimitives;
  columnGap?: keyof SpacingPrimitives;
  size?: number;
  sizeY?: number;
  noMarginBottom?: boolean;
}

export function Grid({
  size,
  sizeY,
  gap,
  container,
  children,
  rowGap,
  columnGap,
  noMarginBottom,
}: GridProps) {
  if (container) {
    return (
      <Box
        display={"grid"}
        width={"100%"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        columnGap={columnGap ?? gap}
        rowGap={rowGap ?? gap}
        marginBottom={noMarginBottom ? "space-0" : "space-70"}
      >
        {children}
      </Box>
    );
  }
  return (
    <Box gridColumn={`span ${size ?? 12}`} gridRow={`span ${sizeY ?? 1}`}>
      {children}
    </Box>
  );
}
