$('.mob_menu').click(function(){
	$('.main_menu').animate({'right': '10px'}).click(function(){
		$(this).animate({'right': '-100px'});
	})
})
