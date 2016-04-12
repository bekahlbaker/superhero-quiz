$(document).ready(function(){

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

	// $(function() {
	//     $('.item').matchHeight();
	// });

	$('.form').hide()

	$('.herobox').click(function() {
	   $(this).children('.form').show();

	});

	var correctAnswers = 0;
	var levelOne = 'street master';
	var levelTwo = 'in-betweener';
	var levelThree = 'mid-tier';


	$('.submit').click(function() {
		var clickedOne = $(this);

		if ($(clickedOne).siblings('.guess').val() == clickedOne.siblings('.answer').val() ) {
			$(clickedOne).siblings('.guess').css('background-color', '#73AF59');
			correctAnswers++;
			$(clickedOne).hide();
	        $(clickedOne).siblings('.guess').prop('disabled', true);

		} else {
			$(clickedOne).siblings('.guess').css('background-color', '#D72729');
		}

	$('#score').html(correctAnswers+'/25');

	if (correctAnswers == 1) {
		$('#level').html(levelOne);
	} else if (correctAnswers == 2) {
		$('#level').html(levelTwo);
	} else if (correctAnswers == 3) {
		$('#level').html(levelThree);
	}

	});

	$('#reset').click(function(){
	location.reload(true)
});

});

