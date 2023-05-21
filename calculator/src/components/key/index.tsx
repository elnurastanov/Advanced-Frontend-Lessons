import { memo, FC, PropsWithChildren } from "react";
import { Button, ButtonProps, Stack } from "@mui/material";

const KeyButton: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  ...args
}) => {
  return (
    <Button {...args}>
      <Stack>{children}</Stack>
    </Button>
  );
};

export default memo(KeyButton);
