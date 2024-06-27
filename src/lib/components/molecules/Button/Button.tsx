import { ButtonProps, ButtonVariants } from "./Button.interface.ts";
import { Box, Text } from "../../atoms";
import { DesignTokens } from "../../../theme";

const variantToBg: Record<
  ButtonVariants,
  keyof DesignTokens["components"]["button"] | undefined
> = {
  primary: "primary-default",
  secondary: "secondary-default",
  tertiary: undefined,
  danger: "destructive-default",
};

const variantToHoverBg: Record<
  ButtonVariants,
  keyof DesignTokens["components"]["button"] | undefined
> = {
  primary: "primary-hover",
  secondary: "secondary-hover",
  tertiary: "tertiary-all",
  danger: "destructive-hover",
};

const variantToDisabledBg: Record<
  ButtonVariants,
  keyof DesignTokens["components"]["button"] | undefined
> = {
  primary: "disabled-all",
  secondary: "disabled-all",
  tertiary: "disabled-all",
  danger: "disabled-all",
};

const variantToActiveBg: Record<
  ButtonVariants,
  keyof DesignTokens["components"]["button"] | undefined
> = {
  primary: "primary-press",
  secondary: "secondary-press",
  tertiary: "tertiary-all",
  danger: "destructive-press",
};

const variantToFocusBorder: Record<
  ButtonVariants,
  keyof DesignTokens["border"] | undefined
> = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "secondary",
  danger: "destructive",
};

const variantToFocusBg: Record<
  ButtonVariants,
  keyof DesignTokens["components"]["button"] | undefined
> = {
  primary: "primary-focus",
  secondary: "secondary-press",
  tertiary: "tertiary-all",
  danger: "destructive-focus",
};

export function Button({
  variant = "primary",
  children,
  onClick,
  small,
  disabled,
  type = "button",
  ...aria
}: ButtonProps) {
  return (
    <Box
      as="button"
      bg={variantToBg[variant]}
      borderRadius="radius-20"
      paddingLeft={small ? "space-60" : "space-70"}
      paddingTop={"space-30"}
      paddingRight={small ? "space-60" : "space-70"}
      paddingBottom={"space-30"}
      hoverStyles={{ bg: variantToHoverBg[variant] }}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      disabledStyles={{
        bg: variantToDisabledBg[variant],
      }}
      activeStyles={{
        bg: variantToActiveBg[variant],
      }}
      type={type}
      focusStyles={{
        borderColor: variantToFocusBorder[variant],
        bg: variantToFocusBg[variant],
      }}
      borderWidth="space-10"
      {...aria}
    >
      <Text
        padding="space-0"
        margin="space-0"
        weight="600"
        transform="uppercase"
        color={variant === "secondary" ? "invert" : "primary"}
        size={small ? "sm" : "lg"}
        lineHeight={small ? "sm" : "lg"}
      >
        {children}
      </Text>
    </Box>
  );
}
