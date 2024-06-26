import { primitives, tokens, flatColors } from "../codegen/tokens.ts";

type Primitives = typeof primitives;
type DesignTokens = typeof tokens;
type TypographyPrimitives = typeof primitives.typography;
type SpacingPrimitives = typeof primitives.spacing;
type ColorsPrimitives = keyof typeof flatColors;

const theme = {
  components: tokens.components,
  typography: primitives.typography,
  spacing: primitives.spacing,
};

type WithTheme<T> = {
  theme?: typeof theme;
} & T;

export type {
  Primitives,
  DesignTokens,
  TypographyPrimitives,
  WithTheme,
  SpacingPrimitives,
  ColorsPrimitives,
};
export { theme };
