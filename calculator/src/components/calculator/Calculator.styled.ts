import { Stack, styled } from "@mui/material";

export const StyledCalculator = styled(Stack)(({ theme }) => ({
  width: theme.spacing(93.75),
  height: theme.spacing(203),
  flexDirection: "column",
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.spacing(2),
  padding: `${theme.spacing(9)} ${theme.spacing(5)}`,
}));
