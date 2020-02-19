$(function(){
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  //calc  button click event
$btnCal.click(function(){
  //get value
  var w = Number($width.val()),
      h = Number($height.val());
  //calculate
  var p = 2 * (w+h),
      a = w*h;

  //浮点
  function roundFractional(x, n) {
      return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);  
  p = roundFractional(p, 2);
  a = roundFractional(a, 2);
        
  }
  //output
  $perimeter.val(p);
  $area.val(a);
})
  
})
