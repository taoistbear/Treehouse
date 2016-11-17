var width = 12;
// throw the Error
var height = 'test';
// run page with correct information
//var height = 15;


function calculateArea(width, height) {
  try {
    var area = width * height;
    if (!isNaN(area)) {
      return area;
    } else {
      throw new Error(': calculateArea() received invalid number');
    }
  } catch(e) {
    console.log(e.name + ' ' + e.message);
    return 'We were unable to calculate the area.';
  }
}

// try to show the area on the page
document.getElementById('area').innerHTML = calculateArea(width, height);
