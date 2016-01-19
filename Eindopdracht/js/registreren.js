var requiredFields = ["patientnummer", "voornaam", "achternaam", "email", "username", "password", "password-second"];
var usedUsernames = ["Hekman", "Koning", "ErikHekman", "ThijsWaardenburg", "Ronald", "RonaldVanEssen", "mike"];


function validateFormRegistreren() {

  var isValid = true;
  $.each($("#myFormRegistreren input"), function( key, field ) {


    var fieldName = $(field).attr('name');

    if (jQuery.inArray (fieldName, requiredFields)!= -1) {
      var validCheck = validateFormFieldRegistreren(field);

      if (!validCheck && isValid) {
        isValid = false;
      }
    }

  });

  if (isValid) {
    window.location.href="./timeline.html";
  }
}

function validateFormFieldRegistreren (field) {

  var isValid = true;

  var value = $(field).val();
  var fieldName = $(field).attr('name');

  if (value == "") {
    $("#"+fieldName+"-field").text('Voer een '+fieldName+' in.');
    $( field ).addClass( "invalid" );
    isValid = false;
  } else {
    $( field ).removeClass( "invalid" );
    $( "#"+fieldName+"-field" ).text('');
  }
  // check specifieke validatie rules
  var isUsernameValid = true;
  if (fieldName == 'username') {
    var isUsernameValid = checkUsername();
  }
      
  var isPasswordValid = true;
  if (fieldName == 'password-second') {
    var isPasswordValid = passwordCheck();
  }

  if (isValid && isUsernameValid && isPasswordValid) {
    return true;
  }
  return false;
}

function checkUsername () {
  var username = $('#username').val();
  if (jQuery.inArray (username, usedUsernames) != -1) {
    $('#username-field').text('Gebruikersnaam is al in gebruik.');
    return false;
  }
  return true;
}

function passwordCheck () {
  var password = $('#password').val();
  var passwordRepeat = $('#password-second').val();
  if (password != passwordRepeat) {
    $('#password-second-field').text('De wachtwoorden komen niet overeen.');
    return false;
  }
  if (!password.match(/\d/)) {
    $('#password-second-field').text('Voeg minimaal een cijfer toe.');
    return false;
  }

  return true;
}





$(document).ready(function() {


  $( "#myFormRegistreren input" ).keyup(function(e) {
    if(e.keyCode != 9) {
      validateFormFieldRegistreren(this);
    }
  });


  $("#registreren").click(function(){
    $(".wrapper").effect( "shake", {times:3}, 250 );
  });

  $("#registreren").click(function( event ){
    validateFormRegistreren();
    event.preventDefault();
  });

});




function previewFile(){
var preview = document.querySelector('img'); //selects the query named img
var file    = document.querySelector('input[type=file]').files[0]; //sames as here
var reader  = new FileReader();

reader.onloadend = function () {
  preview.src = reader.result;
}

if (file) {
reader.readAsDataURL(file); //reads the data as a URL
} else {
  preview.src = "";
}
}

previewFile();  //calls the function named previewFile()