
$('#generateHTML').click(function() {
	var htmlCode = ''
	var lead = $('#lead').val()?`<p class="lead">${$('#lead').val()}</p>`:''
	htmlCode += lead
	htmlCode += '<div class="productDescription__wrap">'
	var paragraph = Array.from($('.paragraph'))
				.filter(r=>$(r).find('input').val()!== ''||$(r).find('textarea').val()!=='')
				.reduce((current, paragraphItem)=>{
					var title = $(paragraphItem).find('input').val()?`<h3>${$(paragraphItem).find('input').val()}</h3>`:''
					var description = $(paragraphItem).find('textarea').val()?`<p>${$(paragraphItem).find('textarea').val()}</p>`:''
					return current += `<div class="productDescription__con">${title}${description}</div>`
				},'')
	htmlCode += `${paragraph}</div>`
	$('#html-code').val(htmlCode)
});
