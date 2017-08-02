function SUM() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var s = number1 + number2;
    document.getElementById("result").value = s.toFixed();
}
function SUBSTRACTION() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var s = number1 - number2;
    document.getElementById("result").value = s.toFixed();
}
function MULTIPLICATION() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var s = number1 * number2;
    document.getElementById("result").value = s.toFixed();
}
function DIVISION() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    if (number2 != 0) {
        var s = number1 / number2;
        document.getElementById("result").value = s.toFixed();
    }
    else
        document.getElementById("result").value = "error";
}
