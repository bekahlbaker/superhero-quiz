$(document).ready(function(){

// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

	// $(function() {
	//     $('.character-logo').matchHeight();
	// });

	// $('.form').hide()

	var clickedOne = $(this);

	$('.herobox').click(function() {
	   $(clickedOne).find('.form').focus();

	});


	var correctAnswers = 0;
	var levelZero = 'ignorant';
	var levelOne = 'novice';
	var levelTwo = 'apprentice';
	var levelThree = 'intermediate';
	var levelFour = 'advanced';
	var levelFive = 'master';

$('input[name="guess"]').keyup(function(){
    this.value = this.value.toLowerCase();
});


	$('.submit').click(function() {


		var clickedOne = $(this);


		if ($(clickedOne).siblings('.guess1').val() === 'the flash' ||
				$(clickedOne).siblings('.guess1').val() === 'flash') {

			$(clickedOne).siblings('.guess1').css('background-color', '#73AF59');
			correctAnswers++;
			$(clickedOne).hide();
	        $(clickedOne).siblings('.guess1').prop('disabled', true);

	        // $(this).next().find('input[name="guess"]').focus();

		} else {
			$(clickedOne).siblings('.guess1').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess2').val() === 'antman' ||
				$(clickedOne).siblings('.guess2').val() === 'ant man') {

			$(clickedOne).siblings('.guess2').css('background-color', '#73AF59');
			correctAnswers++;
			$(clickedOne).hide();
	        $(clickedOne).siblings('.guess2').prop('disabled', true);

		} else {
			$(clickedOne).siblings('.guess2').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess3').val() === 'deadpool' ||
				$(clickedOne).siblings('.guess3').val() === 'dead pool') {

			$(clickedOne).siblings('.guess3').css('background-color', '#73AF59');
			correctAnswers++;
			$(clickedOne).hide();
	        $(clickedOne).siblings('.guess3').prop('disabled', true);

		} else {
			$(clickedOne).siblings('.guess3').css('background-color', '#D72729');
		}


	$('#score').html(correctAnswers+'/33');

	if (correctAnswers == 0) {
		$('#level').html(levelZero);
	} else if ((correctAnswers >=1) && (correctAnswers <=6)) {
		$('#level').html(levelOne);
	} else if ((correctAnswers >=7) && (correctAnswers <=13)) {
		$('#level').html(levelTwo);
	} else if ((correctAnswers >=14) && (correctAnswers <=20)) {
		$('#level').html(levelThree);
	} else if ((correctAnswers >=21) && (correctAnswers <=27)) {
		$('#level').html(levelFour);
	} else if ((correctAnswers >=28) && (correctAnswers <=33)){
		$('#level').html(levelFive);
	} else if (correctAnswers == 33) {
		$('#surprise').html("<img class= 'surprise' src='http://38.media.tumblr.com/a2cc17ac37aa28733928286fe62e0df6/tumblr_mla8voaODR1ra9eteo1_1280.gif'/>");
	}

	});



	$('#reset').click(function(){
	location.reload(true)
});


$('input[name="guess"]').keyup(function (e) {
	var submit = $(this).siblings('.submit');

    if (e.keyCode == 13) {
   		$(submit).click();
    }
});


});

