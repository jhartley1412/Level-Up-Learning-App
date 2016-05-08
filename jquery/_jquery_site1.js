
$(document).ready(function(){


	// NEWS AND MY VIEWERSHIP TABS
	$('.news_tab').click(function(e){
		$('.viewership_page').hide();
		$('.viewership_tab').removeClass('current_tab');

		$('.news_updates_page').show();
		$('.news_tab').addClass('current_tab');
		e.preventDefault();
	});

	$('.viewership_tab').click(function(e){
		$('.news_updates_page').hide();
		$('.news_tab').removeClass('current_tab');

		$('.viewership_page').show();
		$('.viewership_tab').addClass('current_tab');
		e.preventDefault();
	});



	// NEWS GENRE DROPDOWN
	$('.news_checklist_carot_small').click(function(e){
		$('.news_dropdown_small').show();
		e.preventDefault();
	});

	$('.news_dropdown_small').mouseleave(function(e){
		$('.news_dropdown_small').hide();
		e.preventDefault();
	});

	$('.news_checklist_carot_medium').click(function(e){
		$('.news_dropdown_medium').show();
		e.preventDefault();
	});

	$('.news_dropdown_medium').mouseleave(function(e){
		$('.news_dropdown_medium').hide();
		e.preventDefault();
	});



	// USER PORTAL MENU TABS
	$('.jobs_tab').click(function(e){
		$('.user_page').hide();
		$('.user_tab').removeClass('current_tab');
		$('.education_page').hide();
		$('.education_tab').removeClass('current_tab');
		$('.heart_page').hide();
		$('.heart_page').removeClass('current_tab');

		$('.jobs_page').show();
		$('.jobs_tab').addClass('current_tab');

		e.preventDefault();
	});

	$('.user_tab').click(function(e){
		$('.jobs_page').hide();
		$('.jobs_tab').removeClass('current_tab');
		$('.education_page').hide();
		$('.education_tab').removeClass('current_tab');
		$('.heart_page').hide();
		$('.heart_tab').removeClass('current_tab');

		$('.user_page').show();
		$('.user_tab').addClass('current_tab');

		e.preventDefault();
	});

	$('.education_tab').click(function(e){
		$('.jobs_page').hide();
		$('.jobs_tab').removeClass('current_tab');
		$('.user_page').hide();
		$('.user_tab').removeClass('current_tab');
		$('.heart_page').hide();
		$('.heart_tab').removeClass('current_tab');

		$('.education_page').show();
		$('.education_tab').addClass('current_tab');

		e.preventDefault();
	});

	$('.heart_tab').click(function(e){
		$('.jobs_page').hide();
		$('.jobs_tab').removeClass('current_tab');
		$('.user_page').hide();
		$('.user_tab').removeClass('current_tab');
		$('.education_page').hide();
		$('.education_tab').removeClass('current_tab');

		$('.heart_page').show();
		$('.heart_tab').addClass('current_tab');

		e.preventDefault();
	});



	// VIEWERSHIP TIME SPAN SHOWN
	$('.current_time_span').click(function(e){
		$('.viewership_dropdown').show();
		e.preventDefault();
	});

	$('.viewership_dropdown').mouseleave(function(e){
		$('.viewership_dropdown').hide();
		e.preventDefault();
	});



	// // BREAKPOINTS

	// var isBreakPoint = function (bp) {
	//     var bps = [0, 500, 860],
	//         w = $(window).width(),
	//         min, max

	//     for (var i = 0, l = bps.length; i < l; i++) {
	//       if (bps[i] === bp) {
	//         min = bps[i-1] || 0
	//         max = bps[i]
	//         break
	//       }
	//     }
	//     return w > min && w <= max
	// }

	// // Usage
	// if (isBreakPoint(500)){
	// 	$('.news_updates_page').show();
//   		$('.news_tab').addClass('current_tab');

//   		$('.viewership_page').show();
//   		$('.viewership_tab').addClass('current_tab');
//   		e.preventDefault();
	// } 




});