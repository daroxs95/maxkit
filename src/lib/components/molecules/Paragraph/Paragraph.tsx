import { ParagraphProps } from "./Paragraph.interface.ts";
import { Text } from "../../atoms";

export function Paragraph({ small, children, bold, ...aria }: ParagraphProps) {
  return (
    <Text
      size={small ? "sm" : "md"}
      weight={bold ? (small ? "400" : "500") : small ? "500" : "600"}
      lineHeight={small ? "sm" : "md"}
      {...aria}
    >
      {children}
    </Text>
  );
}
