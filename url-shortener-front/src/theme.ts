"use client";

import { Button, createTheme, TextInput } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "yellow",
  primaryShade: { light: 6, dark: 5 },
  autoContrast: true,
  defaultRadius: "md",
  fontFamily: "var(--font-dm-sans), DM Sans, system-ui, sans-serif",
  headings: {
    fontFamily:
      "var(--font-space-grotesk), Space Grotesk, system-ui, sans-serif",
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        fw: 600,
      },
      styles: {
        root: {
          fontFamily:
            "var(--font-space-grotesk), Space Grotesk, system-ui, sans-serif",
          transition: "transform 100ms ease, background-color 150ms ease",
        },
      },
      vars: () => ({
        root: {
          // brighten the amber on hover instead of the default darken
          "--button-hover": "var(--mantine-color-yellow-4)",
        },
      }),
    }),
    TextInput: TextInput.extend({
      styles: {
        input: {
          backgroundColor: "var(--mantine-color-dark-6)",
          borderColor: "var(--mantine-color-dark-5)",
          transition: "border-color 150ms ease",
          "&:focus": {
            borderColor: "var(--mantine-color-yellow-5)",
          },
        },
      },
    }),
  },
  colors: {
    // Amber accent built around #fcb103, used for primary CTAs
    yellow: [
      "#fff8e1",
      "#ffecb3",
      "#ffe082",
      "#ffd54f",
      "#fdc52e",
      "#fcb103",
      "#e09e00",
      "#c28800",
      "#a37100",
      "#7a5400",
    ],
    // Near-black OLED-style scale for dark-mode surfaces and borders
    dark: [
      "#f5f5f5",
      "#e0e0e0",
      "#c2c2c2",
      "#9e9e9e",
      "#757575",
      "#424242",
      "#1e1e1e",
      "#121212",
      "#0a0a0a",
      "#000000",
    ],
  },
});
