function calculator(x:number) {
	let resultt: any;
	let firstoperator: any;
	let secondoperator:any;
	let firstop: any;
	let secondop: any;
	firstop=(<HTMLInputElement>document.getElementById("1")).value;
	secondop=(<HTMLInputElement>document.getElementById("2")).value;
	resultt=document.getElementById("result");
	firstoperator=firstop*1;
	secondoperator=secondop*1;
	switch(x)
			{
				case 0:
				    resultt.value=firstoperator+secondoperator;
					break;		
				case 1:
					resultt.value=firstoperator-secondoperator;
					break;
				case 2:
					resultt.value=secondoperator*firstoperator;
					break;
				case 3:
					if(secondoperator== 0)
						{
					     	alert("That's not what you meant to type buddy , unless you don't do the math");
						}
					else
						{
							resultt.value=firstoperator/secondoperator;
							break;
						}

				}

			}	
