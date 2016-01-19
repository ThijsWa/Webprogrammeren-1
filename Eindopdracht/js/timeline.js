
$(document).ready(function(){

	$('.timeline, .left, .right').css('height', $( window ).height() -70);

	$("#addTimelinePostButton").click(function() {

		var addTimelinepost = $('#addTimelineArea').val();

		var textareaIsEmpty = $.trim($('#addTimelineArea').val());
		if(textareaIsEmpty.length !== 0) {
			$(".timeline-posts").prepend("<div class='timeline-post'><img src='images/user_male_2.png' alt=''><h3>Dhr. Mike van Elk</h3><p>"+addTimelinepost+"</p><button class='verwijder'>×</button></div>");

			$("#addTimelineArea").val('');
			$("#errorTimeline").text('');
		} else {
			$("#errorTimeline").text('Het veld is niet ingevuld.');
		}
	});


	$(document).on('click', '.verwijder', function() {

		$(this).parent().slideUp();
		$(this).remove(); 

	});

	$(document).on('click', '.likeButton', function() {

		$(this).parent().parent().find(".likeField").toggle();
		$(this).toggleClass("current");

	});

	$(document).on('click', '.reagerenButton', function() {

		$(this).parent().parent().find(".reagerenField").show();
		$(this).addClass("current");

	});

	$('.addCommentOnPost').keypress(function (e) {

		var addCommentOnPost = $('.addCommentOnPost').val();

		if (e.which == 13) {
			$(this).closest(".reagerenField").prepend(""+addCommentOnPost+"<br>");
			var addCommentOnPost = $('.addCommentOnPost').val('');
		}		
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