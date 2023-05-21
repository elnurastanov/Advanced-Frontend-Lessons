function isEven(value) {
  if (typeof value !== "number") {
    throw new Error("Typeof passed value is not number!");
  }

  return value % 2 === 0;
}

function isPrime(value) {
  if (typeof value !== "number") {
    throw new Error("Typeof passed value is not number!");
  }

  if (value <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
}

function reverseArray(array) {
  array.reverse();
  return array;
}

function merge(element1, element2) {
  if (element1 === null || element2 === null) {
    throw new Error("Cant merge nullable value!");
  }

  const element1Type = typeof element1;
  const element2Type = typeof element2;

  if (element1Type !== "object" || element2Type !== "object") {
    throw new Error("Arguments must be object or array!");
  }

  if (element1Type !== element2Type) {
    throw new Error("Arguments must be same type!");
  }

  if (Array.isArray(element1)) {
    return [...element1, element2];
  }

  return {
    ...element1,
    ...element2,
  };
}

function removeLastChar(value) {
  if (typeof value !== "string") {
    throw new Error("Typeof argument must be string!");
  }

  return value.slice(0, -1);
}

function testStatement(statement, truthyValue, falsyValue) {
  if (typeof statement !== "boolean") {
    throw new Error("Type of first argument must be boolean!");
  }

  return statement ? truthyValue : falsyValue;
}

function getLocalCurrency(countryCode) {
  return {
    AZ: "AZN",
    TR: "TL",
    US: "US",
    PL: "ZL",
    GE: "EU",
  }[countryCode];
}
