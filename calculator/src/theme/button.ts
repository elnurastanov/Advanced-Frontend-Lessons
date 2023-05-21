import { Components } from "@mui/material";
import { palette } from "./palette";

export const button: Components = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      disableElevation: true,
      disableRipple: true,
      disableTouchRipple: true,
    },
    styleOverrides: {
      root: {
        height: 77,
        minWidth: 77,
        fontSize: 21,
        borderRadius: 23,
        filter: "drop-shadow(3px 3px 7px rgba(0,0,0, 0.15))",
        padding: 0,

        "& .MuiStack-root": {
          height: "calc(100% - 10px)",
          width: "calc(100% - 10px)",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 18,
        },
      },
      containedPrimary: {
        boxShadow: "inset 4px 4px 4px #383E4E",

        "& .MuiStack-root": {
          background: "linear-gradient(145deg, #2A303E,#393E51)",
        },

        "&:hover": {
          boxShadow: "inset 4px 4px 4px #383E4E",
          backgroundColor: palette.primary.main,
        },

        "&:hover .MuiStack-root": {
          background: "linear-gradient(145deg, #393E51, #2A303E)",
        },
      },
      containedSecondary: {
        boxShadow: "inset 4px 4px 4px #636C7D",

        "& .MuiStack-root": {
          background: "linear-gradient(145deg, #465262,#626B7C)",
        },

        "&:hover": {
          boxShadow: "inset 4px 4px 4px #636C7D",
          backgroundColor: palette.secondary.main,
        },

        "&:hover .MuiStack-root": {
          background: "linear-gradient(145deg, #626B7C, #465262)",
        },
      },
      containedWarning: {
        boxShadow: "inset 4px 4px 4px #DC862D",

        "& .MuiStack-root": {
          background: "linear-gradient(145deg, #DD732F,#E28D21)",
        },

        "&:hover": {
          boxShadow: "inset 4px 4px 4px #DC862D",
          backgroundColor: palette.warning.main,
        },

        "&:hover .MuiStack-root": {
          background: "linear-gradient(145deg, #E28D21, #DD732F)",
        },
      },
    },
  },
};
