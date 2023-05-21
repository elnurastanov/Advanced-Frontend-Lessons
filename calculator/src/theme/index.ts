import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { button } from "./button";
import { typographyOptions } from "./typography";

export const theme = createTheme({
  spacing: 4,
  palette: { ...palette },
  typography: { ...typographyOptions },
  components: { ...button },
});
