/*!
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import type { ThemeOptions } from "@mui/material";

export const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      boxSizing: "border-box",
    },
  },
  MuiCircularProgress: {
    defaultProps: {
      size: "1.14285714rem",
      thickness: 8,
      color: "primary",
      disableShrink: false,
      variant: "indeterminate",
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...(ownerState.color !== "inherit" && {
          color: "#00297a",
        }),
      }),
      circle: ({ ownerState }) => ({
        ...(ownerState.variant === "indeterminate" && {
          strokeDasharray: "160%, 360%",
        }),
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: "#1d1d21",
        lineHeight: "1.42857143",
        fontSize: "1rem",
        fontWeight: 600,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        lineHeight: "1.14285714",
      },
      input: {
        boxSizing: "border-box",
        height: "auto",
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      fontFamily:
        "'Public Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'Noto Sans Arabic', sans-serif",
    },
    styleOverrides: {
      paragraph: {
        marginBottom: "1.14285714rem",
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        color: "#1662dd",
        textDecoration: "none",

        "&:hover": {
          color: "#1662dd",
          textDecoration: "underline",
        },

        "&:focus-visible": {
          outlineColor: "#1662dd",
          outlineOffset: "2px",
          outlineStyle: "solid",
          outlineWidth: "1px",
        },

        "&:visited": {
          color: "#1662dd",
        },

        ".Link-indicator, .Link-icon": {
          display: "inline-block",
          height: "1em",
          lineHeight: 1,
        },

        ".Link-indicator": {
          marginInlineStart: "0.57142857rem",
        },

        ".Link-icon": {
          marginInlineEnd: "0.57142857rem",
        },
        svg: {
          fontSize: "1rem",
          height: "1em",
          position: "relative",
          top: "-0.0625em",
          verticalAlign: "middle",
          width: "1em",
        },
      },
    },
    variants: [
      {
        props: { variant: "monochrome" },
        style: {
          color: "#1d1d21",
          textDecoration: "underline",

          "&:hover": {
            color: "#6e6e78",
          },

          "&:focus-visible": {
            outlineColor: "#1662dd",
            outlineOffset: "2px",
            outlineStyle: "solid",
            outlineWidth: "1px",
          },

          "&:visited": {
            color: "#1d1d21",
          },
        },
      },
    ],
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    variants: [
      {
        props: { variant: "primary" },
        style: {
          fontWeight: 600,
          color: "#ffffff",
          borderColor: "transparent",
          backgroundColor: "#1662dd",

          "&:hover, &:focus-visible": {
            backgroundColor: "#00297a",
          },

          "&:active": {
            backgroundColor: "#1662dd",
          },

          "&:disabled": {
            color: "#ffffff",
            backgroundColor: "#a7b5ec",
          },
        },
      },
      {
        props: { variant: "secondary" },
        style: {
          backgroundColor: "#f5f5f6",
          borderColor: "#d7d7dc",
          color: "#1d1d21",
          "&:hover": {
            background: "#f2f5ff",
            borderColor: "#a7b5ec",
            color: "#1662dd",
          },

          "&:focus-visible": {
            backgroundColor: "#1662dd",
            color: "#1662dd",
          },

          "&:active": {
            borderColor: "#1662dd",
          },

          "&:disabled": {
            borderColor: "#ebebed",
            backgroundColor: "#ebebed",
            color: "#8c8c96",
          },
        },
      },
      {
        props: { variant: "danger" },
        style: {
          backgroundColor: "#da372c",
          color: "#ffffff",
          "&:hover": {
            borderColor: "transparent",
            backgroundColor: "#640019",
          },

          "&:focus-visible": {
            outlineColor: "#f88c90",
            backgroundColor: "#640019",
          },

          "&:active": {
            borderColor: "transparent",
            backgroundColor: "#da372c",
          },

          "&:disabled": {
            color: "#ffffff",
            borderColor: "#f88c90",
            backgroundColor: "#f88c90",
          },
        },
      },
      {
        props: { variant: "floating" },
        style: {
          backgroundColor: "#ffffff",
          color: "#1d1d21",
          borderColor: "transparent",

          "&:hover, &:focus-visible": {
            backgroundColor: "rgba(29, 29, 33, 0.1)",
            borderColor: "transparent",
          },
          "&:active": {
            backgroundColor: "rgba(29, 29, 33, 0.2)",
            borderColor: "transparent",
          },
          "&:disabled": {
            backgroundColor: "rgba(235, 235, 237, 0.6)",
            color: "#6e6e78",
            borderColor: "transparent",
          },
        },
      },
      {
        props: { size: "s" },
        style: {
          paddingBlock: "calc(0.57142857rem - 1px)",
          paddingInline: "calc(0.85714286rem - - 1px)",
          fontSize: "1rem",
        },
      },
      {
        props: { size: "l" },
        style: {
          paddingBlock: "calc(1.14285714rem - 1px)",
          paddingInline: "calc(1.14285714rem - 1px)",
        },
      },
      {
        props: { fullWidth: true },
        style: {
          display: "block",
          width: "100%",
          marginBlock: "0",
          marginInline: "0",

          "&:not(:last-child)": {
            marginBlockEnd: "1.14285714rem",
          },
        },
      },
    ],
    styleOverrides: {
      root: ({ ownerState }) => ({
        ...ownerState,
        fontWeight: 600,
        paddingBlock: "0.85714286rem",
        paddingInline: "0.85714286rem",
        display: "inline-block",
        position: "relative",
        marginBlock: "0",
        marginInline: "0",
        transitionProperty:
          "color, background-color, border-color, outline-offset, outline-color",
        transitionDuration: "100ms",
        transitionTimingFunction: "linear",
        borderWidth: "1px",
        borderStyle: "solid",
        outlineColor: "transparent",
        outlineOffset: "0",
        fontSize: "1rem",
        lineHeight: "1.14285714",
        whiteSpace: "nowrap",

        "& + &": {
          marginInlineStart: "0.57142857rem",
        },

        "&:focus-visible": {
          outlineOffset: "2px",
          outlineStyle: "solid",
          outlineWidth: "2px",
        },

        "&:disabled": {
          cursor: "not-allowed",
          pointerEvents: "inherit", // in order to have cursor: not-allowed, must change pointer-events from 'none'
        },
      }),
    },
  },
};
