import { HeadingProps } from "./Heading.interface";
import { Text } from "../atoms";
import { TypographyPrimitives } from "../../theme";

const levelToSize: (keyof TypographyPrimitives["size"])[] = [
  "5xl",
  "4xl",
  "2xl",
  "lg",
  "md",
  "sm",
];

const levelToWeightB: (keyof TypographyPrimitives["weight"])[] = [
  "600",
  "600",
  "600",
  "600",
  "600",
  "600",
];

const levelToWeight: (keyof TypographyPrimitives["weight"])[] = [
  "600",
  "500",
  "400",
  "400",
  "400",
  "400",
];

const levelToLineHeight: (keyof TypographyPrimitives["line-height"])[] = [
  "5xl",
  "4xl",
  "2xl",
  "lg",
  "md",
  "sm",
];

export function Heading({ level = 1, children, bold, ...aria }: HeadingProps) {
  return (
    <Text
      size={levelToSize[level - 1]}
      weight={bold ? levelToWeightB[level - 1] : levelToWeight[level - 1]}
      lineHeight={levelToLineHeight[level - 1]}
      {...aria}
    >
      {children}
    </Text>
  );
}
