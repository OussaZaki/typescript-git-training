
function SUM(){
var number1:number=parseFloat((<HTMLInputElement>document.getElementById("number1")).value);
var number2:number=parseFloat((<HTMLInputElement>document.getElementById("number2")).value);
var s :number=number1+number2;
  (<HTMLInputElement> document.getElementById("result")).value=s.toFixed();
}
function SUBSTRACTION(){
var number1:number=parseFloat((<HTMLInputElement>document.getElementById("number1")).value);
var number2:number=parseFloat((<HTMLInputElement>document.getElementById("number2")).value);
var s :number=number1-number2;
  (<HTMLInputElement> document.getElementById("result")).value=s.toFixed();
}
function MULTIPLICATION(){
var number1:number=parseFloat((<HTMLInputElement>document.getElementById("number1")).value);
var number2:number=parseFloat((<HTMLInputElement>document.getElementById("number2")).value);
var s :number=number1*number2;
  (<HTMLInputElement> document.getElementById("result")).value=s.toFixed();
}
function DIVISION(){
var number1:number=parseFloat((<HTMLInputElement>document.getElementById("number1")).value);
var number2:number=parseFloat((<HTMLInputElement>document.getElementById("number2")).value);
if (number2!=0)
{var s :number=number1/number2;
  (<HTMLInputElement> document.getElementById("result")).value=s.toFixed();
}
else (<HTMLInputElement> document.getElementById("result")).value="error";
}
