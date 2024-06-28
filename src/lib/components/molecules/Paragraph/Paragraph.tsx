import { ParagraphProps } from "./Paragraph.interface.ts";
import { Text } from "../../atoms";

export function Paragraph({
  small,
  children,
  bold,
  inline,
  inverted,
  ...aria
}: ParagraphProps) {
  return (
    <Text
      as="span"
      size={small ? "sm" : "md"}
      weight={bold ? (small ? "500" : "600") : small ? "400" : "500"}
      lineHeight={small ? "md" : "lg"}
      margin="space-0"
      marginBottom={inline ? "space-0" : "space-70"}
      color={inverted ? "invert" : "primary"}
      {...aria}
    >
      {children}
    </Text>
  );
}
