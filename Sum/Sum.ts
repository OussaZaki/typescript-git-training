class sum {
    constructor (public i: number, public j: number) {
     }
    greet() {
        return (this.i + this.j)
    }
}


var button = document.createElement('button')
button.innerText = "SUM"

button.onclick = function() {
    var v=parseFloat((<HTMLInputElement>document.getElementById("number1")).value);

    var v1=parseFloat((<HTMLInputElement>document.getElementById("number2")).value);

    var v2 = new sum(v, v1);

      (<HTMLInputElement> document.getElementById("result")).value=v2.greet().toString();
}
document.body.appendChild(button)
