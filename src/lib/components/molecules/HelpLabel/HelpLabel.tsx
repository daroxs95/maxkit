import { HelpLabelProps } from "./HelpLabel.interface";
import { Text } from "../../atoms";

export function HelpLabel({ error, text, ...aria }: HelpLabelProps) {
  return (
    <Text
      size="sm"
      weight="400"
      lineHeight="sm"
      marginBottom="space-0"
      color={error ? "destructive" : "primary-weaker"}
      {...aria}
    >
      {text}
    </Text>
  );
}
