import { Stack } from "@mui/material";
import Calculator from "./components/calculator";

function App() {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Calculator />
    </Stack>
  );
}

export default App;
