// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid() {
  //Remove existing grid before adding new grid
  $('#pixelCanvas tr').remove();
  $('#pixelCanvas td').remove();
  // Select size input
  let row = $('input[name="height"]').val(),
  col = $('input[name="width"]').val();
  // Add new rows and columns to the grid
	for (let n = 0; n < row; n++) {
		$('#pixelCanvas').append('<tr></tr>');
    for (let m = 0; m < col; m++) {
      $('#pixelCanvas tr').last().append('<td></td>');
    }
	}
  return false;
})

// When color is picked by the user, call colorPick()
$('#pixelCanvas').on('click', 'td', function colorPick() {
  // Select color input
  let colorPicker = $('input[type="color"]').val();
  $(this).css('background-color', colorPicker);
})