
$('#generateHTML').click(function() {

	var htmlCode = ''

	$('.paragraph').each(function() {

	 	title = $(this).find('input').val()

	 	if(title){

	 		title = '<h2>' + title + '</h2>'

	 		htmlCode += title 

	 	}
	 	
	 	description = $(this).find('textarea').val()

	 	if(description){

	 		description = '<p>' + description + '</p>'

	 		htmlCode += description 

	 	}
	
	});

	$('#html-code').val(htmlCode)

});