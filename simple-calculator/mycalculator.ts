function calculator(x:number) {
let firstoperator: any;
let secondoperator: any;
let resultt: any;

firstoperator=document.getElementById("1");
secondoperator=document.getElementById("2");
resultt=document.getElementById("result");
			switch(x)
			{
				case 0:
				resultt.value=1*firstoperator.value+1*secondoperator.value;
				break;
				case 1:
				resultt.value=firstoperator.value-secondoperator.value;
					break;
				case 2:
				resultt.value=secondoperator.value*firstoperator.value;
					break;
				case 3:
				if(secondoperator.value== 0)
					{
				     	alert("That's not what you meant to type buddy , unless you don't do the math");
					}
				else
					{
						resultt.value=firstoperator.value/secondoperator.value;
						break;
					}

			}

		}	
