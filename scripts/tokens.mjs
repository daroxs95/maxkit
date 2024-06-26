import tokens from "../src/lib/assets/design-tokens.json" assert { type: "json" };
import fs from "fs";

const cleanTokensOutput = "./src/lib/assets/clean-design-tokens.json";
const codegenOutput = "./src/lib/codegen/tokens.ts";

function cleanTokens(tokens) {
  const cleanedTokens = {};
  Object.entries(tokens).forEach(([tokenName, value]) => {
    const cleanName = tokenName.replace("\b", "");

    if (value && typeof value === "object" && !Array.isArray(value)) {
      if (
        typeof value["value"] === "string" ||
        typeof value["value"] === "number"
      ) {
        cleanedTokens[cleanName] = value["value"];
      } else {
        const nestedTokens = cleanTokens(value);
        if (nestedTokens !== null) cleanedTokens[cleanName] = nestedTokens;
      }
    }
  });

  return cleanedTokens;
}

function recursiveEval(obj, value) {
  const segments = value.split(".");
  let currentSegment = obj;
  for (let i = 0; i < segments.length; i++) {
    if (currentSegment[segments[i]]) {
      currentSegment = currentSegment[segments[i]];
    } else {
      return null;
    }
  }
  return currentSegment;
}

function interpolatePrimitives(
  tokens,
  primitives,
  primitivesName,
  resolveToKey,
) {
  Object.entries(tokens).forEach(([tokenName, value]) => {
    if (typeof value === "string") {
      const primitivePath = value.replace(/[{}]/g, "").split(".");
      const isPrimitiveReference = primitivePath[0] === primitivesName;
      if (isPrimitiveReference) {
        const primitiveAliasName = primitivePath.slice(1).join(".");
        const primitive = recursiveEval(primitives, primitiveAliasName);
        if (primitive !== null) {
          tokens[tokenName] = resolveToKey
            ? primitivePath[primitivePath.length - 1]
            : primitive;
        }
      }
    } else if (typeof value === "object") {
      interpolatePrimitives(value, primitives, primitivesName, resolveToKey);
    }
  });
}

const cleanedTokens = cleanTokens(tokens);

const primitives = cleanedTokens["primitives"];
const designTokens = cleanedTokens["tokens"];

interpolatePrimitives(designTokens, primitives, "primitives", true);
interpolatePrimitives(designTokens, designTokens, "tokens");

fs.writeFileSync(cleanTokensOutput, JSON.stringify(cleanedTokens, null, 2), {
  flag: "w",
  encoding: "utf-8",
});

const flatColors = Object.values(primitives.color).reduce((acc, color) => {
  return { ...acc, ...color };
}, {});

fs.writeFileSync(
  codegenOutput,
  `// This file is auto-generated. Do not edit.
export const tokens = ${JSON.stringify(designTokens, null, 2)};
export const primitives = ${JSON.stringify(primitives, null, 2)};
export const flatColors = ${JSON.stringify(flatColors, null, 2)};
`,
  { flag: "w", encoding: "utf-8" },
);
