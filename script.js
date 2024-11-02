addEventListener("DOMContentLoaded", (event) => {
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  function operate(a, operator, b) {
    if (operator === "+") {
      return add(a, b);
    } else if (operator === "-") {
      return subtract(a, b);
    } else if (operator == "*") {
      return multiply(a, b);
    } else if (operator === "/") {
      return divide(a, b);
    }
  }

  let equals = document.getElementById("equals");

  function validExpression(ex) {
    ex = ex.split(" ").join("");
    console.log(ex);
    let a = "";
    let b = "";
    let operator = "";
    let flag = false;
    for (let i = 0; i < ex.length; i++) {
      if (
        !flag &&
        ex[i] !== "*" &&
        ex[i] !== "/" &&
        ex[i] !== "-" &&
        ex[i] !== "+"
      ) {
        a += ex[i];
      } else if (
        ex[i] === "*" ||
        ex[i] === "/" ||
        ex[i] === "-" ||
        ex[i] === "+"
      ) {
        operator = ex[i];
        flag = true;
        continue;
      }
      if (flag) {
        b += ex[i];
      }
    }

    console.log(a);
    console.log(operator);
    console.log(b);

    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
      alert("Ivalid input");
      return false;
    }

    if (
      operator !== "*" &&
      operator !== "/" &&
      operator !== "-" &&
      operator !== "+"
    ) {
      alert("Invalid operator");
      return false;
    }

    console.log(a);
    console.log(operator);
    console.log(b);

    return [a, operator, b];

    // if (arr.length > 3) {
    //   alert("Invalid expression");
    //   ex.value = "";
    //   return false;
    // } else if (arr.length < 3) {
    //   alert("Invalid expression");
    //   ex.value = "";
    //   return false;
    // }
  }

  document.getElementById("divide").addEventListener("click", () => {
    document.querySelector("input").value += "/";
  });

  document.getElementById("multiply").addEventListener("click", () => {
    document.querySelector("input").value += "*";
  });

  document.getElementById("add").addEventListener("click", () => {
    document.querySelector("input").value += "+";
  });

  document.getElementById("subtract").addEventListener("click", () => {
    document.querySelector("input").value += "-";
  });

  document.getElementById("one").addEventListener("click", () => {
    document.querySelector("input").value += "1";
  });

  document.getElementById("two").addEventListener("click", () => {
    document.querySelector("input").value += "2";
  });

  document.getElementById("three").addEventListener("click", () => {
    document.querySelector("input").value += "3";
  });

  document.getElementById("four").addEventListener("click", () => {
    document.querySelector("input").value += "4";
  });

  document.getElementById("five").addEventListener("click", () => {
    document.querySelector("input").value += "5";
  });

  document.getElementById("six").addEventListener("click", () => {
    document.querySelector("input").value += "6";
  });

  document.getElementById("seven").addEventListener("click", () => {
    document.querySelector("input").value += "7";
  });

  document.getElementById("eight").addEventListener("click", () => {
    document.querySelector("input").value += "8";
  });

  document.getElementById("nine").addEventListener("click", () => {
    document.querySelector("input").value += "9";
  });

  document.getElementById("zero").addEventListener("click", () => {
    document.querySelector("input").value += "0";
  });

  document.getElementById("del").addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.querySelector("input");
    input.value = input.value.substring(0, input.value.length - 1);
  });

  const result = document.querySelector(".result");

  document.getElementById("clear").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("input").value = "";
  });

  equals.addEventListener("click", (e) => {
    e.preventDefault();
    let expression = document.querySelector("input");

    console.log(expression.value);

    if (validExpression(expression.value)) {
      let ex = validExpression(expression.value);
      document.querySelector("input").value = operate(ex[0], ex[1], ex[2]);
    } else {
      expression.value = "";
    }
  });
});
