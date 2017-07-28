var sum = (function () {
    function sum(i, j) {
        this.i = i;
        this.j = j;
    }
    sum.prototype.greet = function () {
        return (this.i + this.j);
    };
    return sum;
}());
var button = document.createElement('button');
button.innerText = "SUM";
button.onclick = function () {
    var v = parseFloat(document.getElementById("number1").value);
    var v1 = parseFloat(document.getElementById("number2").value);
    var v2 = new sum(v, v1);
    document.getElementById("result").value = v2.greet().toString();
};
document.body.appendChild(button);
