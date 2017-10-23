// Select color input
$('#colorPicker').on('click',function colorSelect() {
  const color = $('#colorPicker').val();
  $('.color_changing').css("background-color", color);
});

// When size is submitted by the user, call makeGrid()

$('#submit').on('click',function makeGrid(click) {
  click.preventDefault()
  $('#pixel_canvas').find('tr').remove();
  $('#pixel_canvas').find('td').remove();

  const n = $('#input_height').val();
  const m = $('#input_width').val();

  for (var x = 1; x <= n; x++) {
    $('#pixel_canvas').append('<tr></tr>')
  }
  for (var y = 1; y <= m; y++) {
    $('tr').append('<td></td>')
  }
});

//color the canvas when it is clicked
$('td').on('click', function() {
  $(this).toggleClass("color_changing");
} );
