$(document).ready(function(){

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

	// $(function() {
	//     $('.character-logo').matchHeight();
	// });

	$('.form').hide()

	$('.herobox').click(function() {
	   $(this).children('.form').show();

	});


	var correctAnswers = 0;
	var levelZero = 'ignorant';
	var levelOne = 'novice';
	var levelTwo = 'apprentice';
	var levelThree = 'intermediate';
	var levelFour = 'advanced';
	var levelFive = 'master';


	$('.submit').click(function() {


		var clickedOne = $(this);

		if ($(clickedOne).siblings('.guess').val().toLowerCase() == clickedOne.siblings('.answer').val() ) {
			$(clickedOne).siblings('.guess').css('background-color', '#73AF59');
			correctAnswers++;
			$(clickedOne).hide();
	        $(clickedOne).siblings('.guess').prop('disabled', true);

		} else {
			$(clickedOne).siblings('.guess').css('background-color', '#D72729');
		}

	$('#score').html(correctAnswers+'/30');

	if (correctAnswers == 0) {
		$('#level').html(levelZero);
	} else if (correctAnswers <=6) {
		$('#level').html(levelOne);
	} else if (correctAnswers >=7) {
		$('#level').html(levelTwo);
	} else if (correctAnswers >= 18) {
		$('#level').html(levelThree);
	} else if (correctAnswers >= 24) {
		$('#level').html(levelFour);
	} else if (correctAnswers >= 30) {
		$('#level').html(levelFive);
	}

	});

	$('#reset').click(function(){
	location.reload(true)
});

});

