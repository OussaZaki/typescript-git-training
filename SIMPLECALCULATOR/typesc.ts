function f(x) {
let A: any;
let B: any;
let C: any;

A=document.getElementById("1");
B=document.getElementById("2");
C=document.getElementById("resultat");
			switch(x)
			{
				case 0:
				C.value=1*A.value+1*B.value;
				break;
				case 1:
				C.value=A.value-B.value;
					break;
				case 2:
				C.value=B.value*A.value;
					break;
				case 3:
				if(B.value== 0){alert("That's not what you meant to type buddy , unless you don't do the math");}
				else{
				C.value=A.value/B.value;
					break;}

			}

		}	
