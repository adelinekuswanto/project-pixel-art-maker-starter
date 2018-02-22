// Select color input
// Select size input
$(function(){
	
	const height = $('#inputHeight').val();
	const width = $('input#inputWidth').val();
	const pixelCanvas = $('table');
	const submitButton = $('input[type=submit]');



		// When size is submitted by the user, call makeGrid()
	submitButton.click(function makeGrid() {
		for (var i = 0; i <= height; i++) {
			pixelCanvas.append('<tr class="pixel-row"></tr>');
		};
		for (var m=0; i <= width; m++) {
			$('.pixel-row').each(function() {
				$(this).append('<td>Apple</td>');
			});
		};
	});






});
