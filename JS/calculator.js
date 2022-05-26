var display = document.getElementById("display");
var clear = document.getElementById("clear");
clear.addEventListener("click", function () {
    display.innerHTML = "";
});
var divide = document.getElementById("divide");
divide.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "/";
});
var multiply = document.getElementById("multiply");
multiply.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "*";
});
var subtract = document.getElementById("subtract");
subtract.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "-";
});
var add = document.getElementById("add");
add.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "+";
});
var equals = document.getElementById("equals");
equals.addEventListener("click", function () {
    display.innerHTML = eval(display.innerHTML);
});
var one = document.getElementById("one");
one.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "1";
});
var two = document.getElementById("two");
two.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "2";
});
var three = document.getElementById("three");
three.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "3";
});
var four = document.getElementById("four");
four.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "4";
});
var five = document.getElementById("five");
five.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "5";
});
var six = document.getElementById("six");
six.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "6";
});
var seven = document.getElementById("seven");
seven.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "7";
});
var eight = document.getElementById("eight");
eight.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "8";
});
var nine = document.getElementById("nine");
nine.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "9";
});
var zero = document.getElementById("zero");
zero.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + "0";
});
var decimal = document.getElementById("decimal");
decimal.addEventListener("click", function () {
    display.innerHTML = display.innerHTML + ".";
}
);

function add(x,y){
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    if (operator == "+") {
        return add(x, y);
    }
    else if (operator == "-") {
        return subtract(x, y);
    }
    else if (operator == "*") {
        return multiply(x, y);
    }
    else if (operator == "/") {
        return divide(x, y);
    }
} 
function calculate(x, y, operator) {
    return operate(operator, x, y);
}
function clear() {
    display.innerHTML = "";
}
function backspace() {
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
}