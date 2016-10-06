
$('#generateHTML').click(function() {

	var htmlCode = ''

	lead = $('#lead').val()

	if(lead){

		lead = '<p class="lead">' + lead + '</p>'

		htmlCode += lead

	}


	$('.paragraph').each(function() {

		paragraph = ''

	 	title = $(this).find('input').val()

	 	if(title){

	 		title = '<h2>' + title + '</h2>'

	 		paragraph += title 

	 	}
	 	
	 	description = $(this).find('textarea').val()

	 	if(description){

	 		description = '<p>' + description + '</p>'

	 		paragraph += description 

	 	}

	 	if(description || title){

	 		paragraph = '<div class="productDescription__con">' + paragraph + '</div>'

	 	}

	 	htmlCode += paragraph

	});

	$('#html-code').val(htmlCode)

});