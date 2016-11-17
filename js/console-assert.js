var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
  // the message only shows if user has entered number less than 10
  console.assert(this.value > 10, 'User entered less than 10');
});

$('#calculator').on('submit', function(e) {
  e.preventDefault();
  console.log('Clicked sumbit...');

  width = $('#width').val();
  height = $('#height').val();
  area = width * height;
  // the message only shows if user has entered something other than an number
  console.assert($.isNumeric(area), 'User entered non-numberic value');

  $form.append('<p>' + area + '</p>');
});
