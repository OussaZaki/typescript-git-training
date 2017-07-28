
function randomInt(start:number,end:number){

    return start + Math.floor(Math.random()*(end-start));
}

function generate_alphabet(){

    let tmp:string[]=[];

    for (var i=65;i<123;i++)
    {   

        if (i>=91 && i<=96) {}
        else{

        tmp.push(String.fromCharCode(i));
        }
    }

return tmp;
}

function generate_password() {
       let pass: string="";
       const numbers: number[] = [1,2,3,4,5,6,7,8,9,0];
       const special_chars: string[]=['#','.','!','?',';',',','&','[',']'];
       const alphabet: string[]= generate_alphabet();
       const selection: string[]=['numbers','special_chars','alphabet']; 

       for (var i=0;i<16;i++){
        const random_selection_int=randomInt(0,3);
        const random_selection=selection[random_selection_int];
        const random_numbers=randomInt(0,numbers.length);
        const random_alphabet=randomInt(0,alphabet.length);
        const random_special_chars=randomInt(0,special_chars.length);
        
        if (random_selection=="numbers") {
            pass=pass+String(numbers[random_numbers]);
      }
        else if (random_selection=="alphabet"){
            pass=pass+alphabet[random_alphabet];}
        else {
            pass=pass+special_chars[random_special_chars];
        }
        
        
       }

       
  return pass;  
  }
function gen() {
  var p=generate_password();
  document.getElementById("pass").innerHTML=p;
}
