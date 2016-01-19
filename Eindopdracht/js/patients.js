$(document).ready(function(){
	
	$('.timeline, .left, .right').css('height', $( window ).height() -70);

	$(".addPatient1").click(function() {

		$(".timeline-posts").prepend(" <div class='timeline-post'><img src='images/user_male_1.png' alt=''><h3>Madison Daniels <span class='new'>Nieuw!</span></h3><p>Patient heeft hartfalen en een kunstknie.</p><button class='removePatient removePatient1'>-</button></div>");
		$(this).parent().slideUp();
		$(this).remove();
	});

	$(".addPatient2").click(function() {

		$(".timeline-posts").prepend(" <div class='timeline-post'><img src='images/user_male_3.png' alt=''><h3>Madison Daniels <span class='new'>Nieuw!</span></h3><p>Patient heeft hartfalen en een kunstknie.</p><button class='removePatient removePatient2'>-</button></div>");
		$(this).parent().slideUp();
		$(this).remove();
	});

	$(document).on('click', '.removePatient1', function() {

		$(this).parent().slideUp();
		$(this).remove();
		$(".new-patients").prepend("<div class='new-patient patient1'><img src='images/user_male_1.png' alt=''><h3>Madison Daniels</h3><p>Patient heeft hartfalen en een kunstknie.</p><button class='addPatient addPatient1'>+</button></div>");
	});

	$(document).on('click', '.removePatient2', function() {

		$(this).parent().slideUp();
		$(this).remove();
		$(".new-patients").prepend("<div class='new-patient patient2'><img src='images/user_male_3.png' alt=''><h3>Madison Daniels</h3><p>Patient heeft hartfalen en een kunstknie.</p><button class='addPatient addPatient1'>+</button></div>");
	});


$('.patient1 h3').magnificPopup({
    items: [
      {
        src: '#patient1-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ]
});
$('.patient2 h3').magnificPopup({
    items: [
      {
        src: '#patient2-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ]
});



});




function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('.current-patient').css('background', '#f9873d url('+e.target.result +') center center no-repeat');
		}

		reader.readAsDataURL(input.files[0]);
	}
}













// function autosize(textarea) {
//     $(textarea).height(1); // temporarily shrink textarea so that scrollHeight returns content height when content does not fill textarea
//     $(textarea).height($(textarea).prop("scrollHeight"));
// }


// $(document).ready(function () {
// 	$(document).on("input", "textarea", function() {
// 		autosize(this);
// 	});
// 	$("textarea").each(function () {
// 		autosize(this);
// 	});
// });



