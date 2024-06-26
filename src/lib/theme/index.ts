import { primitives, tokens } from "../codegen/tokens.ts";

type Primitives = typeof primitives;
type DesignTokens = typeof tokens;
type TypographyPrimitives = typeof primitives.typography;

const theme = {
  components: tokens.components,
  typography: primitives.typography,
};

type WithTheme<T> = {
  theme?: typeof theme;
} & T;

export type { Primitives, DesignTokens, TypographyPrimitives, WithTheme };
export { theme };
