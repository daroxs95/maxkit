import { SpacingPrimitives } from "../../../theme";
import { Flex } from "../Flex";
import { ReactNode } from "react";

interface StackProps {
  children: ReactNode | ReactNode[];
  vertical?: boolean;
  gap?: keyof SpacingPrimitives;
}

export function Stack({ vertical, gap, children }: StackProps) {
  return (
    <Flex vertical={vertical} gap={gap} align={vertical ? "start" : undefined}>
      {children}
    </Flex>
  );
}
