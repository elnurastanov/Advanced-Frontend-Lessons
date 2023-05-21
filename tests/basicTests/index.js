function sum(a, b) {
  const aType = typeof a;
  const bType = typeof b;

  if (aType !== "number" || bType !== "number") {
    throw new Error(
      `Type of ${aType !== "number" ? "a" : "b"} is not a number!`
    );
  }

  return a + b;
}

function isNull(value) {
  return value === null;
}

function addProperty(valueObject, newProperty) {
  if (valueObject[newProperty]) {
    throw new Error("Couldn't add dublicated property!");
  }

  valueObject[newProperty] = null;

  return valueObject;
}

module.exports = { sum, isNull, addProperty };
