import { BadgeProps, BadgeVariants } from "./Badge.interface.ts";
import { Box, Text } from "../../atoms";
import { DesignTokens, SurfaceTokens } from "../../../theme";

const variantToTextColor: Record<BadgeVariants, keyof DesignTokens["text"]> = {
  neutral: "primary-on-fill",
  info: "informative-on-fill",
  error: "destructive-on-fill",
  warning: "warning-on-fill",
  success: "success-on-fill",
};

const variantToBg: Record<BadgeVariants, keyof SurfaceTokens | undefined> = {
  neutral: undefined,
  info: "background-informative",
  error: "background-destructive",
  warning: "background-warning",
  success: "background-success",
};

const variantToBorderColor: Record<
  BadgeVariants,
  keyof DesignTokens["border"]
> = {
  neutral: "primary",
  info: "informative",
  error: "destructive-secondary",
  warning: "warning",
  success: "success",
};

export function Badge({ text, variant = "neutral", ...aria }: BadgeProps) {
  return (
    <Box
      bg={variantToBg[variant]}
      borderRadius="radius-10"
      borderColor={variantToBorderColor[variant]}
      borderWidth="space-10"
      paddingLeft="space-30"
      paddingRight="space-30"
      paddingTop="space-10"
      paddingBottom="space-10"
      {...aria}
    >
      <Text
        size="md"
        weight="400"
        lineHeight="md"
        margin="space-0"
        color={variantToTextColor[variant]}
      >
        {text}
      </Text>
    </Box>
  );
}
