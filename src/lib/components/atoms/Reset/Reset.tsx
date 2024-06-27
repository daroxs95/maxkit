import { Global } from "@emotion/react";

export function Reset() {
  return (
    <Global
      styles={{
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
      }}
    />
  );
}
