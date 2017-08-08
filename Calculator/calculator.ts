class Create
{
        valueOf : string;
        id : string;
        constructor (valueOf:string ,id: string ){
          this.valueOf = valueOf;
          this.id=  id;
          }
          createButton()
          {
                var element = document.createElement("input");
                element.setAttribute("value",this.valueOf);
                element.setAttribute("id",this.id);
                element.setAttribute("type","button");
                if ((parseFloat(this.id)%3 == 0)||(this.valueOf == "*")) {
                    document.getElementById("operation-buttons").appendChild(element);
                    document.getElementById("operation-buttons").appendChild(document.createElement("br"));
                }
                else{
                    document.getElementById("operation-buttons").appendChild(element);
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
              var button = new Create(i.toString(),i.toString());
              button.createButton();
          }
          var symbole: string[] = ["+", "-", "*","/","c","="];

          for (var j=0;j<symbole.length;j++){
            new Create(symbole[j],symbole[j]).createButton();
          }
      };
