function squareStar(size) {
  let result = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      result += "*";
    }

    result += "\n";
  }

  return result;
}

function hallowSquareStar(size) {
  let result = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1) {
        result += "*";
      } else if (j === 0 || j === size - 1) {
        result += "*";
      } else {
        result += " ";
      }
    }

    result += "\n";
  }

  return result;
}

function leftTriangleStar(size) {
  let result = "";

  for (let i = 1; i <= size; i++) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }

    result += "\n";
  }

  return result;
}

function rightTriangleStar(size) {
  let result = "";

  for (let i = 1; i <= size; i++) {
    for (let j = 0; j < size; j++) {
      if (j >= size - i) {
        result += "*";
      } else {
        result += " ";
      }
    }

    result += "\n";
  }

  return result;
}

function downwardTriangleStar(size) {
  let result = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      result += "*";
    }

    result += "\n";
  }

  return result;
}

function pyramidStar(size) {
  let result = "";

  for (let i = 1; i <= size; i++) {
    for (let j = 0; j < size - i; j++) {
      result += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      result += "*";
    }

    result += "\n";
  }

  return result;
}

function reversedPyramidStar(size) {
  let result = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < i; j++) {
      result += " ";
    }

    for (let k = 0; k < 2 * (size - i) - 1; k++) {
      result += "*";
    }

    result += "\n";
  }

  return result;
}

function diamondStar(size) {
  let result = "";
  for (let i = 1; i <= size; i++) {
    for (let j = size; j > i; j--) {
      result += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      result += "*";
    }
    result += "\n";
  }

  for (let i = 1; i <= size - 1; i++) {
    for (let j = 0; j < i; j++) {
      result += " ";
    }
    for (let k = (size - i) * 2 - 1; k > 0; k--) {
      result += "*";
    }
    result += "\n";
  }

  return result;
}

console.log("---- Square star ----");
console.log(squareStar(5));

console.log("---- Hallow square star ----");
console.log(hallowSquareStar(5));

console.log("---- Left triangle star ----");
console.log(leftTriangleStar(5));

console.log("---- Right triangle star ----");
console.log(rightTriangleStar(5));

console.log("---- Downward triangle star ----");
console.log(downwardTriangleStar(5));

console.log("---- Pyramid triangle star ----");
console.log(pyramidStar(5));

console.log("---- Reversed pyramid triangle star ----");
console.log(reversedPyramidStar(5));

console.log("---- Diamond triangle star ----");
console.log(diamondStar(5));
