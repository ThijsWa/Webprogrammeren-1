var logins =0;

function inloggen(){

	var gebruikersnaam = $('#gebruikersnaam').val();
	var wachtwoord = $('#wachtwoord').val();

	var validPassword = "qwerty";

	var usernames = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen", "mike"];

	var isusernamevalid = false;

  // gebruikersnaam komt niet voor = -1
  // gebruikersnaam komt voor 0
  if (jQuery.inArray (gebruikersnaam, usernames) != -1) {
  	isusernamevalid = true;
  }

  if (isusernamevalid && wachtwoord == validPassword) {
  	window.location.href="./timeline.html";
  }  else {
  	if (wachtwoord != validPassword){
  		$( "#wachtwoord" ).addClass( "invalid" );
  	}
  	if (!isusernamevalid) {
  		$( "#gebruikersnaam" ).addClass( "invalid" );
  	}

  	$('#formError').text('Gebruikersnaam of wachtwoord onjuist.');
  }


  logins++;

  if (logins > 2){
  	$('#formError').text('U heeft 3x een verkeerd gebruikersnaam en/of wachtwoord ingevuld, u moet 3 minuten wachten.');

  	$("#myFormInloggen input, #myFormInloggen button").prop('disabled', true);
  }

}


function validateForm() {

	$.each($("#myFormInloggen input"), function( key, field ) {
		validateFormField(field);
	});

}

function validateFormField (field) {

	var value = $(field).val();
	var fieldName = $(field).attr('name');

	if (value == "") {
		$("#"+fieldName+"-field").text('Voer een '+fieldName+' in.');
		$( field ).addClass( "invalid" );
	}

	else {
		$( field ).removeClass( "invalid" );
		$( "#"+fieldName+"-field" ).text('');
	}
}


$(document).ready(function() {

	$( "#myFormInloggen input" ).keyup(function(e) {
		if(e.keyCode != 9) {
			validateFormField(this);
		}
	});


	$("#aanmelden").click(function(){
		$(".wrapper").effect( "shake", {times:3}, 250 );
	});

	$("#aanmelden").click(function( event ){
		validateForm();
		event.preventDefault();
		inloggen();
	});

});