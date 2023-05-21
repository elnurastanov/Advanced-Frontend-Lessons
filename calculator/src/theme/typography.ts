import { TypographyOptions } from "@mui/material/styles/createTypography";
import { palette } from "./palette";

export const typographyOptions: TypographyOptions = {
  subtitle1: {
    fontSize: 56,
    color: palette.text.primary,
    textAlign: "right",
    lineHeight: 1,
  },
  body1: {
    fontSize: 28,
    color: palette.text.secondary,
    textAlign: "right",
  },
};
