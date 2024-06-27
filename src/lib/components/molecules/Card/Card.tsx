import { CardProps } from "./Card.interface.ts";
import { Box } from "../../atoms";

export function Card({
  children,
  withPadding,
  canHover,
  onClick,
  ...aria
}: CardProps) {
  return (
    <Box
      bg="background-overlay"
      borderRadius="radius-10"
      paddingLeft={withPadding ? "space-70" : "space-0"}
      paddingRight={withPadding ? "space-70" : "space-0"}
      paddingTop={withPadding ? "space-80" : "space-0"}
      paddingBottom={withPadding ? "space-80" : "space-0"}
      borderWidth="space-10"
      onClick={onClick}
      hoverStyles={canHover ? { bg: "background-overlay-hover" } : undefined}
      focusStyles={
        canHover
          ? { bg: "background-overlay-hover", borderColor: "invert" }
          : undefined
      }
      activeStyles={
        canHover
          ? { bg: "background-overlay", borderColor: "invert" }
          : undefined
      }
      tabIndex={canHover ? 0 : undefined}
      {...aria}
    >
      {children}
    </Box>
  );
}
