import { FC, memo } from "react";
import { List, ListItem, Stack, Typography, useTheme } from "@mui/material";

interface DisplayProps {
  history: string[];
  operation: string;
  result: string;
}

const Display: FC<DisplayProps> = ({ history, operation, result }) => {
  const theme = useTheme();

  function renderHistory() {
    return history.map((previousOperation, index) => {
      return (
        <ListItem key={index} disablePadding>
          <Typography variant="body1" sx={{ width: "100%" }}>
            {previousOperation}
          </Typography>
        </ListItem>
      );
    });
  }

  return (
    <Stack
      sx={{
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "column",
        marginBottom: theme.spacing(8.75),
      }}
    >
      <List
        sx={{
          height: theme.spacing(45),
          overflowX: "hidden",
          overflowY: "auto",
          paddingRight: theme.spacing(3),
          paddingBottom: theme.spacing(2),
        }}
      >
        {renderHistory()}
      </List>
      <Stack>
        <Typography
          variant="body1"
          sx={{
            height: theme.spacing(8.25),
          }}
        >
          {operation}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            minHeight: theme.spacing(16.75),
          }}
        >
          {result}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default memo(Display);
