import { Dispatch, SetStateAction } from "react";
import { KeyOperators, KeyTypes } from "../ts/enum";

export class CalculatorService {
  current: string;
  previous: string;
  operator: KeyOperators | undefined;
  operation: string;
  computedResult: string;
  isComputed: boolean;
  resultUpdater: Dispatch<SetStateAction<string>>;
  operationUpdater: Dispatch<SetStateAction<string>>;
  historyUpdater: Dispatch<SetStateAction<string[]>>;

  constructor(
    resultUpdater: Dispatch<SetStateAction<string>>,
    operationUpdater: Dispatch<SetStateAction<string>>,
    historyUpdater: Dispatch<SetStateAction<string[]>>
  ) {
    this.current = "";
    this.previous = "";
    this.operator = undefined;
    this.operation = "";
    this.computedResult = "";
    this.isComputed = false;
    this.resultUpdater = resultUpdater;
    this.operationUpdater = operationUpdater;
    this.historyUpdater = historyUpdater;
  }

  add(value: string | KeyOperators, type: KeyTypes) {
    debugger;
    if (this.isComputed) {
      this.addToHistory();
      this.clearInitials();
      this.clearResult();
      this.clearOperation();
    }

    if (value === KeyOperators.CLEAR) {
      this.clear();
      return;
    }

    if (!this.current && type === KeyTypes.OPERATOR) {
      return;
    }

    if (value === KeyOperators.CALCULATE && !this.isComputed) {
      this.compute();
      return;
    }

    this.addToResult(value);

    if (type === KeyTypes.OPERATOR && value !== KeyOperators.DOT) {
      this.operator = value as KeyOperators;
      this.previous = this.current;
      this.current = "";
      return;
    }

    this.current = this.current + value;
  }

  addToResult(value: string | KeyOperators) {
    this.resultUpdater((state: string) => {
      return (state += value);
    });
  }

  updateResult(value: string) {
    this.resultUpdater(value);
  }

  clearResult() {
    this.resultUpdater("");
  }

  updateOperation() {
    const operation = `${this.previous} ${this.operator} ${this.current}`;

    this.operationUpdater(operation);
    this.operation = operation;
  }

  clearOperation() {
    this.operationUpdater("");
  }

  addToHistory() {
    this.historyUpdater((state) => {
      state.push(`${this.operation} = ${this.computedResult}`);
      return state;
    });
  }

  clearInitials() {
    this.current = "";
    this.previous = "";
    this.operator = undefined;
    this.isComputed = false;
  }

  clear() {
    this.operation = "";
    this.computedResult = "";
    this.clearResult();
    this.clearOperation();
  }

  compute() {
    const currentInt = +this.current;
    const previousInt = +this.previous;
    let result = 0;

    this.updateOperation();

    switch (this.operator) {
      case KeyOperators.ADDITION: {
        result = previousInt + currentInt;
        break;
      }
      case KeyOperators.SUBTRACTION: {
        result = previousInt - currentInt;
        break;
      }
      case KeyOperators.MULTIPLICATION: {
        result = previousInt * currentInt;
        break;
      }
      case KeyOperators.DIVISION: {
        result = previousInt / currentInt;
        break;
      }
      case KeyOperators.PERCENT: {
        result = (previousInt * currentInt) / 100;
      }
    }

    this.updateResult(result.toString());
    this.current = result.toString();
    this.computedResult = result.toString();
    this.isComputed = true;
  }
}
