
//The function that generates random number between start & and

function randomInt(start : number , end : number){

	return start + Math.floor( Math.random() * ( end - start ) );

}


//Main Function that generates the password randomly using numbers , alphabet and special characters 

function generate_password() {

	let pass : string = "" ;
	const numbers = '0123456789';
	const alphabet = 'abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ';
	const specials = '#.!?;,&[]';

	const selection = numbers + alphabet + specials;

	for ( var i = 0 ; i < 16 ; i++ ) {


		const random_selection_int = randomInt( 0 , selection.length ) ;
		const random_selection = selection[random_selection_int] ;
		pass += random_selection  ;
        
      
        
	}

       
return pass ;  

}

//This is the function that will change the id(pass) in html with the password generated

function change_innerhtml () {

	var pw = generate_password() ;
	document.getElementById( "pass" ).innerHTML = pw ;

}
