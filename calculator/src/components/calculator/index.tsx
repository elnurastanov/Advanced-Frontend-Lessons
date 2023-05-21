import { useMemo, useState } from "react";
import Display from "../display";
import Keyboard from "../keyboard";

import { StyledCalculator } from "./Calculator.styled";
import { KeyOperators, KeyTypes } from "../../ts/enum";
import { CalculatorService } from "../../service/calculator";

const Calculator = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [operation, setOperation] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const calculator = useMemo(() => {
    return new CalculatorService(setResult, setOperation, setHistory);
  }, []);

  function onKeyClick(value: string | KeyOperators, type: KeyTypes) {
    calculator.add(value, type);
  }
  return (
    <StyledCalculator>
      <Display history={history} operation={operation} result={result} />
      <Keyboard onClick={onKeyClick} />
    </StyledCalculator>
  );
};

export default Calculator;
