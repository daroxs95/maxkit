import { AriaAttributes, ChangeEvent } from "react";

export interface InputProps extends AriaAttributes {
  disabled?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}
