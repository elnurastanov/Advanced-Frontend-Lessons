import { Stack } from "@mui/material";
import { Sidebar } from "@/components";
import { StyeledContent } from "./StyledContent.styles";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Stack
      sx={{
        height: "100vh",
        flexDirection: "row",
      }}
    >
      <Sidebar />
      <StyeledContent>
        <Outlet />
      </StyeledContent>
      <div>preview</div>
    </Stack>
  );
};
