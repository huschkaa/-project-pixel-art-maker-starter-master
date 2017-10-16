// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

$('#submit').on('click',function makeGrid() {
  const n = $('#input_height').val();
  const m = $('#input_width').val();
  const canvas = $('#pixel_canvas');
  const square = $('<td></td>');
  const row = $('<tr></tr>');
  for (var x = 0; x < n; x++) {
      canvas.append(square);
  }
});
