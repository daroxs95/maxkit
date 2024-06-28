import { CalloutProps, BadgeVariants } from "./Callout.interface.ts";
import { Box, Text } from "../../atoms";
import { DesignTokens, SurfaceTokens } from "../../../theme";
import { Stack } from "../../layout";

const variantToTextColor: Record<BadgeVariants, keyof DesignTokens["text"]> = {
  info: "informative-on-fill",
  error: "destructive-on-fill",
  warning: "warning-on-fill",
  success: "success-on-fill",
};

const variantToBg: Record<BadgeVariants, keyof SurfaceTokens | undefined> = {
  info: "background-informative",
  error: "background-destructive",
  warning: "background-warning",
  success: "background-success",
};

export function Callout({
  title,
  text,
  variant = "info",
  ...aria
}: CalloutProps) {
  return (
    <Box
      bg={variantToBg[variant]}
      borderRadius="radius-20"
      padding="space-60"
      width="100%"
      marginBottom="space-70"
      {...aria}
    >
      <Stack vertical gap="space-30" noMarginBottom>
        <Text
          as="h3"
          size="lg"
          color={variantToTextColor[variant]}
          margin="space-0"
        >
          {title}
        </Text>
        <Text
          size="md"
          weight="400"
          lineHeight="md"
          margin="space-0"
          color={variantToTextColor[variant]}
        >
          {text}
        </Text>
      </Stack>
    </Box>
  );
}
