import { SpacingPrimitives } from "../../../theme";
import { Flex } from "../Flex";
import { ReactNode } from "react";

interface StackProps {
  children: ReactNode | ReactNode[];
  vertical?: boolean;
  gap?: keyof SpacingPrimitives;
  noMarginBottom?: boolean;
}

export function Stack({ vertical, gap, children, noMarginBottom }: StackProps) {
  return (
    <Flex
      noMarginBottom={noMarginBottom}
      vertical={vertical}
      gap={gap}
      align={vertical ? "start" : undefined}
    >
      {children}
    </Flex>
  );
}
