$(document).ready(function(){


// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

	$(function() {
	    $('.character').matchHeight();
	});

$('.score').hide();


$('.herobox').click(function() {	

	var clickedOne = $(this);

    $(clickedOne).find('#textArea').focus();

  		  
});		  

	var correctAnswers = 0;
	var levelZero = '"ignorant"';
	var levelOne = '"novice"';
	var levelTwo = '"apprentice"';
	var levelThree = '"intermediate"';
	var levelFour = '"advanced"';
	var levelFive = '"master"';
	var levelSix = 'expert"';


$('input[name="guess"]').keyup(function(){
    this.value = this.value.toLowerCase();
});

$('.submit').click(function() {


		var clickedOne = $(this);


		if ($(clickedOne).siblings('.guess1').val() === 'the flash' ||
				$(clickedOne).siblings('.guess1').val() === 'flash' ||
				$(clickedOne).siblings('.guess1').val() === 'theflash') {

			$(clickedOne).siblings('.guess1').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('the flash');

		} else {
			$(clickedOne).siblings('.guess1').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess2').val() === 'antman' ||
				$(clickedOne).siblings('.guess2').val() === 'ant man') {

			$(clickedOne).siblings('.guess2').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('antman');

		} else {
			$(clickedOne).siblings('.guess2').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess3').val() === 'deadpool' ||
				$(clickedOne).siblings('.guess3').val() === 'dead pool') {

			$(clickedOne).siblings('.guess3').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('deadpool');

		} else {
			$(clickedOne).siblings('.guess3').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess4').val() === 'spiderman' ||
				$(clickedOne).siblings('.guess4').val() === 'spider man') {

			$(clickedOne).siblings('.guess4').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('spiderman');

		} else {
			$(clickedOne).siblings('.guess4').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess5').val() === 'clayface' ||
				$(clickedOne).siblings('.guess5').val() === 'clay face') {

						$(clickedOne).siblings('.guess5').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('clayface');

		} else {
			$(clickedOne).siblings('.guess5').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess6').val() === 'the penguin' ||
				$(clickedOne).siblings('.guess6').val() === 'penguin' ||
				$(clickedOne).siblings('.guess6').val() === 'thepenguin' ) {

			$(clickedOne).siblings('.guess6').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('the penguin');

		} else {
			$(clickedOne).siblings('.guess6').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess7').val() === 'electro') {

			$(clickedOne).siblings('.guess7').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('electro');

		} else {
			$(clickedOne).siblings('.guess7').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess8').val() === 'two face' ||
				$(clickedOne).siblings('.guess8').val() === 'twoface') {

			$(clickedOne).siblings('.guess8').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('two face');

		} else {
			$(clickedOne).siblings('.guess8').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess9').val() === 'wolverine') {

			$(clickedOne).siblings('.guess9').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('wolverine');

		} else {
			$(clickedOne).siblings('.guess9').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess10').val() === 'hawk eye' ||
				$(clickedOne).siblings('.guess10').val() === 'hawkeye') {

			$(clickedOne).siblings('.guess10').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('hawkeye');

		} else {
			$(clickedOne).siblings('.guess10').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess11').val() === 'scare crow' ||
				$(clickedOne).siblings('.guess11').val() === 'scarecrow' ||
				$(clickedOne).siblings('.guess11').val() === 'the scarecrow' ||
				$(clickedOne).siblings('.guess11').val() === 'the scare crow' ||
				$(clickedOne).siblings('.guess11').val() === 'scarecrow' ||
				$(clickedOne).siblings('.guess11').val() === 'thescarecrow') {

			$(clickedOne).siblings('.guess11').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('scarecrow');

		} else {
			$(clickedOne).siblings('.guess11').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess12').val() === 'poison ivy' ||
				$(clickedOne).siblings('.guess12').val() === 'poisonivy') {

			$(clickedOne).siblings('.guess12').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('poison ivy');

		} else {
			$(clickedOne).siblings('.guess12').css('background-color', '#D72729');
		}


		if ($(clickedOne).siblings('.guess13').val() === 'venom') {

			$(clickedOne).siblings('.guess13').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('venom');

		} else {
			$(clickedOne).siblings('.guess13').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess14').val() === 'cyborg') {

			$(clickedOne).siblings('.guess14').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('cyborg');

		} else {
			$(clickedOne).siblings('.guess14').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess15').val() === 'batman' ||
				$(clickedOne).siblings('.guess15').val() === 'bat man') {

			$(clickedOne).siblings('.guess15').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('batman');

		} else {
			$(clickedOne).siblings('.guess15').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess16').val() === 'wonder woman') {

			$(clickedOne).siblings('.guess16').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('wonder woman');

		} else {
			$(clickedOne).siblings('.guess16').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess17').val() === 'superman' ||
				$(clickedOne).siblings('.guess17').val() === 'super man') {

			$(clickedOne).siblings('.guess17').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('superman');

		} else {
			$(clickedOne).siblings('.guess17').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess18').val() === 'hulk' ||
				$(clickedOne).siblings('.guess18').val() === 'the hulk' ||
				$(clickedOne).siblings('.guess18').val() === 'thehulk') {

			$(clickedOne).siblings('.guess18').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('the hulk');

		} else {
			$(clickedOne).siblings('.guess18').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess19').val() === 'joker' ||
				$(clickedOne).siblings('.guess19').val() === 'the joker' ||
				$(clickedOne).siblings('.guess19').val() === 'thejoker') {

			$(clickedOne).siblings('.guess19').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('the joker');

		} else {
			$(clickedOne).siblings('.guess19').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess20').val() === 'bizarro' ||
				$(clickedOne).siblings('.guess20').val() === 'bizarro superman' ||
				$(clickedOne).siblings('.guess20').val() === 'bizarrosuperman') {

			$(clickedOne).siblings('.guess20').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('bizarro');

		} else {
			$(clickedOne).siblings('.guess20').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess21').val() === 'aquaman' ||
				$(clickedOne).siblings('.guess21').val() === 'aqua man') {

			$(clickedOne).siblings('.guess21').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('aquaman');

		} else {
			$(clickedOne).siblings('.guess21').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess22').val() === 'catwoman' ||
				$(clickedOne).siblings('.guess22').val() === 'cat woman') {

			$(clickedOne).siblings('.guess22').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('catwoman');

		} else {
			$(clickedOne).siblings('.guess22').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess23').val() === 'green goblin' ||
				$(clickedOne).siblings('.guess23').val() === 'the green goblin' ||
				$(clickedOne).siblings('.guess23').val() === 'the greengoblin'||
				$(clickedOne).siblings('.guess23').val() === 'greengoblin' ||
				$(clickedOne).siblings('.guess23').val() === 'thegreengoblin') {

			$(clickedOne).siblings('.guess23').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('green goblin');

		} else {
			$(clickedOne).siblings('.guess23').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess24').val() === 'batgirl' ||
				$(clickedOne).siblings('.guess24').val() === 'bat girl') {

			$(clickedOne).siblings('.guess24').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('batgirl');

		} else {
			$(clickedOne).siblings('.guess24').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess25').val() === 'mr freeze' ||
			$(clickedOne).siblings('.guess25').val() === 'mrfreeze' ||
			$(clickedOne).siblings('.guess25').val() === 'mister freeze' ||
			$(clickedOne).siblings('.guess25').val() === 'misterfreeze') {

			$(clickedOne).siblings('.guess25').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('mr freeze');

		} else {
			$(clickedOne).siblings('.guess25').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess26').val() === 'lex luthor' || 
			$(clickedOne).siblings('.guess26').val() === 'lexluthor') {

			$(clickedOne).siblings('.guess26').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('lex luthor');

		} else {
			$(clickedOne).siblings('.guess26').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess27').val() === 'thor') {

			$(clickedOne).siblings('.guess27').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('thor');

		} else {
			$(clickedOne).siblings('.guess27').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess28').val() === 'robin' ||
				$(clickedOne).siblings('.guess28').val() === 'nightwing') {

			$(clickedOne).siblings('.guess28').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('robin');

		} else {
			$(clickedOne).siblings('.guess28').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess29').val() === 'ironman' ||
				$(clickedOne).siblings('.guess29').val() === 'iron man') {

			$(clickedOne).siblings('.guess29').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('ironman');

		} else {
			$(clickedOne).siblings('.guess29').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess30').val() === 'killer croc' ||
				$(clickedOne).siblings('.guess30').val() === 'killercroc') {

			$(clickedOne).siblings('.guess30').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('killer croc');

		} else {
			$(clickedOne).siblings('.guess30').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess31').val() === 'groot') {

			$(clickedOne).siblings('.guess31').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('groot');

		} else {
			$(clickedOne).siblings('.guess31').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess32').val() === 'harley quinn' ||
				$(clickedOne).siblings('.guess32').val() === 'harleyquinn') {

			$(clickedOne).siblings('.guess32').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('harley quinn');

		} else {
			$(clickedOne).siblings('.guess32').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess33').val() === 'dare devil' ||
				$(clickedOne).siblings('.guess33').val() === 'daredevil') {

			$(clickedOne).siblings('.guess33').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('dare devil');

		} else {
			$(clickedOne).siblings('.guess33').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess34').val() === 'captain america' ||
				$(clickedOne).siblings('.guess34').val() === 'captainamerica') {

			$(clickedOne).siblings('.guess34').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('captain america');

		} else {
			$(clickedOne).siblings('.guess34').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess35').val() === 'green arrow' ||
				$(clickedOne).siblings('.guess35').val() === 'the green arrow' ||
				$(clickedOne).siblings('.guess35').val() === 'the greenarrow' ||
				$(clickedOne).siblings('.guess35').val() === 'thegreenarrow' ||
				$(clickedOne).siblings('.guess35').val() === 'greenarrow') {

			$(clickedOne).siblings('.guess35').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('green arrow');

		} else {
			$(clickedOne).siblings('.guess35').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess36').val() === 'hawk man' ||
				$(clickedOne).siblings('.guess36').val() === 'hawkman') {

			$(clickedOne).siblings('.guess36').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('hawkman');

		} else {
			$(clickedOne).siblings('.guess36').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess37').val() === 'dr doom' ||
				$(clickedOne).siblings('.guess37').val() === 'drdoom' ||
				$(clickedOne).siblings('.guess37').val() === 'doctor doom' ||
				$(clickedOne).siblings('.guess37').val() === 'doctordoom') {

			$(clickedOne).siblings('.guess37').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('dr doom');

		} else {
			$(clickedOne).siblings('.guess37').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess38').val() === 'bane') {

			$(clickedOne).siblings('.guess38').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('bane');

		} else {
			$(clickedOne).siblings('.guess38').css('background-color', '#D72729');
		}

		if ($(clickedOne).siblings('.guess39').val() === 'the riddler' ||
				$(clickedOne).siblings('.guess39').val() === 'theriddler' ||
				$(clickedOne).siblings('.guess39').val() === 'riddler') {

			$(clickedOne).siblings('.guess39').hide();
			  previousValue = correctAnswers;
			 	correctAnswers++;
	        $(clickedOne).siblings('.answer').html('the riddler');

		} else {
			$(clickedOne).siblings('.guess39').css('background-color', '#D72729');
		}



		$('#score').html(correctAnswers+'/39');

		if (correctAnswers == 0) {
			$('#level').html(levelZero);
		} else if ((correctAnswers >=1) && (correctAnswers <=7)) {
			$('#level').html(levelOne);
		} else if ((correctAnswers >=8) && (correctAnswers <=16)) {
			$('#level').html(levelTwo);
		} else if ((correctAnswers >=17) && (correctAnswers <=24)) {
			$('#level').html(levelThree);
		} else if ((correctAnswers >=25) && (correctAnswers <=32)) {
			$('#level').html(levelFour);
		} else if ((correctAnswers >=33) && (correctAnswers <=38)){
			$('#level').html(levelFive);
		} else if (correctAnswers == 39) {
			$('#level').html(levelSix);
			$('#surprise').html("<img class= 'surprise' src='http://38.media.tumblr.com/a2cc17ac37aa28733928286fe62e0df6/tumblr_mla8voaODR1ra9eteo1_1280.gif'/>");
		}

});

$('#getScore').click(function() {
	$('#getScore').hide();
	$('.score').show();
});


$('input[name="guess"]').keyup(function (e) {
		var submit = $(this).siblings('.submit');


	    if (e.keyCode == 13) {
	   		$(submit).click();

	   		console.log(previousValue);
	   		console.log(correctAnswers);

		   		textboxes = $('input[name="guess"]');
		        currentBoxNumber = textboxes.index(this);
		        if (correctAnswers != previousValue) {
		            nextBox = textboxes[currentBoxNumber + 1]
		            nextBox.focus();
		            nextBox.select();
		            // event.preventDefault();
		            // return false 
		            previousValue++;
		            }
	    }


});


$('#reset').click(function(){
	location.reload(true)
});


});

