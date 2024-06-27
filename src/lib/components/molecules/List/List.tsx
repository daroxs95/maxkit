import { ListProps } from "./List.interface";
import { Box, Text } from "../../atoms";

export function ListItem({ children, ...aria }: ListProps) {
  return (
    <Text as="li" {...aria}>
      {children}
    </Text>
  );
}

export function List({ children, ordered, ...aria }: ListProps) {
  return (
    <Box as={ordered ? "ol" : "ul"} paddingLeft="space-70" {...aria}>
      {children}
    </Box>
  );
}
