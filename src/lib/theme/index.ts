import { primitives, tokens, flatColors } from "../codegen/tokens.ts";

type Primitives = typeof primitives;
type DesignTokens = typeof tokens;
type ComponentsTokens = DesignTokens["components"];
type TypographyPrimitives = typeof primitives.typography;
type SpacingPrimitives = Primitives["spacing"];
type ColorsPrimitives = typeof flatColors;
type CornerPrimitives = Primitives["corner"];

const theme = {
  components: tokens.components,
  text: tokens.text,
  typography: primitives.typography,
  spacing: primitives.spacing,
  colors: flatColors,
  corners: primitives.corner,
  surfaceColors: tokens.surface,
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
  CornerPrimitives,
  ComponentsTokens,
};
export { theme };
