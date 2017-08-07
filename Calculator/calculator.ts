class Create
{
        htmlelent:HTMLElement;
        vOf:string;
        id:string;
        constructor (vOf:string ,id: string ){
          this.vOf = vOf;
          this.id=  id;
          }
          createB()
          {
                var element = document.createElement("input");
                element.setAttribute("value",this.vOf);
                element.setAttribute("id",this.id);
                element.setAttribute("type","button");
                if ((parseFloat(this.id)%3 == 0)||(this.vOf == "*")) {

                    document.getElementById("nbrButton").appendChild(element);
                    document.getElementById("nbrButton").appendChild(document.createElement("br"));
                }
                else{
                document.getElementById("nbrButton").appendChild(element);
                }
                element.addEventListener("click", function(){
                  var type:string=element.getAttribute("id");
                  switch(type){
                    case "=": {
                            try{(<HTMLInputElement>document.getElementById("screen")).value = eval((<HTMLInputElement>document.getElementById("screen")).value).toFixed();
                            }catch(e){
                            alert("operation error");
                            }
                            break;
                    }
                    case "c":{
                            (<HTMLInputElement>document.getElementById("screen")).value ='';
                            break;
                            }
                    default : {
                            (<HTMLInputElement>document.getElementById("screen")).value += type;
                            break;
                            }}});
          }
  }
      window.onload = () =>
      {
          for (var i=1;i<10;i++){
              var but = new Create(i.toString(),i.toString());
              but.createB();
          }
          var symbole: string[] = ["+", "-", "*","/","c","="];

          for (var j=0;j<symbole.length;j++){
            new Create(symbole[j],symbole[j]).createB();
          }
      };
