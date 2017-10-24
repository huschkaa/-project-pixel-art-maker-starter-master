// When size is submitted by the user, call makeGrid()

$('#submit').on('click',function makeGrid(click) {
  click.preventDefault()

//Erase the previous grid to put in a new grid
  $('#pixel_canvas').find('tr').remove();
  $('#pixel_canvas').find('td').remove();

//create the new grid that is n x m size
  const n = $('#input_height').val();
  const m = $('#input_width').val();

  for (var x = 1; x <= n; x++) {
    $('#pixel_canvas').append('<tr></tr>')
  }
  for (var y = 1; y <= m; y++) {
    $('tr').append('<td></td>')

  }

//color the canvas when it is clicked
  $('td').on('click', function() {
    const color = $('#colorPicker').val();
    $(this).css("background-color", color);
  });
});
