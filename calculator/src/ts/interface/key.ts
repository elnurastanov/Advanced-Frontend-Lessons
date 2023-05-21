import { KeyOperators, KeyTypes } from "../enum";
import { KeyColors } from "../type";

export interface Key {
  label: string;
  value: string | KeyOperators;
  type: KeyTypes;
  color: KeyColors;
  size: number;
}

export interface KeyboardProps {
  onClick: (value: Key["value"], type: Key["type"]) => void;
}
