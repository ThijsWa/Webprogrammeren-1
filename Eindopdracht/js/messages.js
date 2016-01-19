var scrolled=0;

$(document).ready(function(){
	
	$('.timeline, .left, .right').css('height', $( window ).height() -70);

	$("#addMessageButton").click(function() {

		var addMessage = $('#message').val();

		var textareaIsEmpty = $.trim($('#message').val());
		if(textareaIsEmpty.length !== 0) {

			$(".messages").append("<article><p>"+addMessage+"</p><button class='verwijder'>×</button></article>");

			$("#message").val('');

			scrolled=scrolled+300;

			$(".messages").animate({
				scrollTop:  scrolled
			});
			$("#errorTimeline").text('');
		} else {
			$("#errorTimeline").text('Het veld is niet ingevuld.');
		}


	});


	$(document).on('click', '.verwijder', function() {

		$(this).parent().slideUp();
		$(this).remove();

	});


	$('#open-photo').magnificPopup({
		items: [
		{
			src: 'images/hartfilmpje.jpg',
	        type: 'image' // this overrides default type
	    }
	    ]
	});

	$('#open-video').magnificPopup({
		items: [
		{
			src: 'https://www.youtube.com/watch?v=CYoPOJCeJvU',
	        type: 'iframe' // this overrides default type
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






$(document).on('click', '.messagelist li', function() {
	$(".messagelist li").removeClass("current");
	$(this).addClass("current");
});






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