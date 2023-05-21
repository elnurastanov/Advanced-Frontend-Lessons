import { FC, memo, useMemo } from "react";
import { Grid } from "@mui/material";
import KeyButton from "../key";
import { KeyOperators, KeyTypes } from "../../ts/enum";
import { Key, KeyboardProps } from "../../ts/interface";



const Keyboard: FC<KeyboardProps> = ({ onClick }) => {
  const keys = useMemo<Key[]>(() => {
    return [
      {
        label: "C",
        value: KeyOperators.CLEAR,
        type: KeyTypes.OPERATOR,
        color: "secondary",
        size: 6,
      },
      {
        label: "%",
        value: KeyOperators.PERCENT,
        type: KeyTypes.OPERATOR,
        color: "secondary",
        size: 3,
      },
      {
        label: "÷",
        value: KeyOperators.DIVISION,
        type: KeyTypes.OPERATOR,
        color: "warning",
        size: 3,
      },
      {
        label: "7",
        value: "7",
        type: KeyTypes.NUMBER,
        color: "primary",
        size: 3,
      },
      {
        label: "8",
        value: "8",
        type: KeyTypes.NUMBER,
        color: "primary",
        size: 3,
      },
      {
        label: "9",
        value: "9",
        type: KeyTypes.NUMBER,
        color: "primary",
        size: 3,
      },
      {
        label: "×",
        value: KeyOperators.MULTIPLICATION,
        type: KeyTypes.OPERATOR,
        color: "warning",
        size: 3,
      },
      {
        label: "4",
        value: "4",
        type: KeyTypes.NUMBER,
        color: "primary",
        size: 3,
      },
      {
        label: "5",
        value: "5",
        type: KeyTypes.NUMBER,
        color: "primary",
        size: 3,
      },
      {
        label: "6",
        value: "6",
        type: KeyTypes.NUMBER,
        color: "primary",
        size: 3,
      },
      {
        label: "—",
        value: KeyOperators.SUBTRACTION,
        type: KeyTypes.OPERATOR,
        color: "warning",
        size: 3,
      },
      {
        label: "1",
        value: "1",
        type: KeyTypes.NUMBER,
        color: "primary",
        size: 3,
      },
      {
        label: "2",
        value: "2",
        type: KeyTypes.NUMBER,
        color: "primary",
        size: 3,
      },
      {
        label: "3",
        value: "3",
        type: KeyTypes.NUMBER,
        color: "primary",
        size: 3,
      },
      {
        label: "+",
        value: KeyOperators.ADDITION,
        type: KeyTypes.OPERATOR,
        color: "warning",
        size: 3,
      },
      {
        label: "0",
        value: "0",
        type: KeyTypes.NUMBER,
        color: "primary",
        size: 6,
      },
      {
        label: ".",
        value: KeyOperators.DOT,
        type: KeyTypes.OPERATOR,
        color: "primary",
        size: 3,
      },
      {
        label: "=",
        value: KeyOperators.CALCULATE,
        type: KeyTypes.OPERATOR,
        color: "warning",
        size: 3,
      },
    ];
  }, []);

  function renderKeys() {
    return keys.map(({ label, value, type, color, size }, index) => {
      return (
        <Grid key={index} item xs={size}>
          <KeyButton
            color={color}
            fullWidth
            onClick={() => onClick(value, type)}
          >
            {label}
          </KeyButton>
        </Grid>
      );
    });
  }

  return (
    <Grid container spacing={2.5}>
      {renderKeys()}
    </Grid>
  );
};

export default memo(Keyboard);
