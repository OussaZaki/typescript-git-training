interface Fraction {
	numerator : number;
	denominator : number;
}

function simplification(fraction : Fraction): Fraction {
	let gcd = GCD(fraction.numerator,fraction.denominator);
	let simpl = {numerator: 0 , denominator: 1};
	simpl. numerator = fraction.numerator / gcd;
	simpl.denominator = fraction.denominator / gcd;
	return simpl;
}

function addition(a: Fraction , b: Fraction): Fraction {
	let sum = {numerator: 0 , denominator: 1};
	a.numerator *= b.denominator;
	b.numerator *= a.denominator;
	let commonDenominator = a.denominator * b.denominator;
	sum.numerator = a.numerator + b.numerator;
	sum.denominator = commonDenominator;
	return simplification(sum);
}

function substraction(a: Fraction , b: Fraction): Fraction {
	let difference = {numerator: 0 , denominator: 1};
	a.numerator *= b.denominator;
	b.numerator *= a.denominator;
	difference.numerator = a.numerator - b.numerator;
	difference.denominator = a.denominator * b.denominator;
	return simplification(difference);
}

function multiplication(a: Fraction , b: Fraction): Fraction {
	let product = {numerator: 0 , denominator: 1};
	product.numerator = a.numerator * b.numerator;
	product.denominator = a.denominator * b.denominator;
	return simplification(product);
}

function division(a: Fraction , b: Fraction): Fraction {
	if (b.numerator == 0)
		throw new TypeError("MATH ERROR!! impossible to divide by 0.");
	else{
		let memory = b.numerator;
		b.numerator = b.denominator;
		b.denominator = memory;
		return multiplication(a,b);
	}
}
// the following function returns the greatest common divisor of two integers given as parameters
function GCD(a : number , b : number): number {
	let rest : number;
	let gcd : number;
	if (a > b)
		rest = b;
	else
		rest = a;
	while (rest != 0){
		gcd = rest;
		if (a > b){
			rest = a % b;
			a = b;
			b = rest;
		}
		else{
			rest = b % a;
			b = a;
			a = rest;
		}
	}
	return gcd;
}

function calcul(){
	let a = {numerator: 0 , denominator: 1};
	let b = {numerator: 0 , denominator: 1};
	a.numerator = parseInt((<HTMLInputElement>document.getElementById("numerator1")).value);
	a.denominator = parseInt((<HTMLInputElement>document.getElementById("denominator1")).value);
	b.numerator = parseInt((<HTMLInputElement>document.getElementById("numerator2")).value);
	b.denominator = parseInt((<HTMLInputElement>document.getElementById("denominator2")).value);
	let result = {numerator: 0 , denominator: 1};
	if (a.denominator == 0 || b.denominator == 0)
		alert("MATH ERROR!! denominator can't receive the value \"0\".")
	else{
		let operator = (<HTMLInputElement>document.getElementById("operation")).value;
		switch(operator){
			case "+":{
				result = addition(a,b);
				(<HTMLInputElement>document.getElementById("resultNumerator")).value = result.numerator.toString();
				(<HTMLInputElement>document.getElementById("resultDenominator")).value = result.denominator.toString();
				break;
			}
			case "-":{
				result = substraction(a,b);
				(<HTMLInputElement>document.getElementById("resultNumerator")).value = result.numerator.toString();
				(<HTMLInputElement>document.getElementById("resultDenominator")).value = result.denominator.toString();
				break;
			}
			case "*":{
				result = multiplication(a,b);
				(<HTMLInputElement>document.getElementById("resultNumerator")).value = result.numerator.toString();
				(<HTMLInputElement>document.getElementById("resultDenominator")).value = result.denominator.toString();
				break;
			}
			case "/":{
				result = division(a,b);
				(<HTMLInputElement>document.getElementById("resultNumerator")).value = result.numerator.toString();
				(<HTMLInputElement>document.getElementById("resultDenominator")).value = result.denominator.toString();
				break;
			}
		}
	}
}
