import { HelpLabelProps } from "./HelpLabel.interface";
import { Text } from "../../atoms";

export function HelpLabel({ error, text, id, ...aria }: HelpLabelProps) {
  return (
    <Text
      id={id}
      size="sm"
      weight="400"
      lineHeight="sm"
      margin="space-0"
      color={error ? "destructive" : "primary-weaker"}
      {...aria}
    >
      {text || <wbr />}
    </Text>
  );
}
