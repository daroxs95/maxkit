import { InputProps } from "./Input.interface.ts";
import { Box, Text } from "../../atoms";
import { Stack } from "../../layout";
import { HelpLabel } from "../HelpLabel";
import { nanoid } from "nanoid";

export function Input({
  disabled,
  label,
  placeholder,
  value,
  required,
  onChange,
  error,
  helperText,
  type,
  ...aria
}: InputProps) {
  const id = nanoid();
  const helperId = `${id}-helper`;

  const { "aria-describedby": ariaDescribedBy, ...ariaRest } = aria;
  return (
    <Stack vertical>
      {label && (
        <Text
          as="label"
          htmlFor={id}
          padding="space-0"
          margin="space-0"
          weight="600"
          color="primary"
          size="sm"
          lineHeight="sm"
          marginBottom="space-30"
        >
          {label} {required && "*"}
        </Text>
      )}
      <Box
        id={id}
        as="input"
        bg="background-primary-stronger"
        borderRadius="radius-20"
        borderColor={error ? "destructive" : "secondary"}
        paddingLeft="space-60"
        paddingTop="space-50"
        paddingRight="space-60"
        paddingBottom="space-50"
        hoverStyles={{ borderColor: "invert" }}
        disabled={disabled}
        disabledStyles={{
          bg: "background-disabled weak",
        }}
        activeStyles={{
          borderColor: "primary-stronger",
          bg: "background-primary-stronger",
        }}
        focusStyles={{
          borderColor: "primary-stronger",
          bg: "background-primary-stronger",
        }}
        borderWidth="space-10"
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        color={disabled ? "disabled" : "primary"}
        size="md"
        weight="400"
        width="100%"
        aria-describedby={ariaDescribedBy || helperId}
        inputType={type}
        marginBottom="space-30"
        {...ariaRest}
      />
      {helperText !== undefined && (
        <HelpLabel text={helperText} error={error} id={helperId} />
      )}
    </Stack>
  );
}
