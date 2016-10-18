$(document).ready(function() {
  $("#para1").click(function(){
    $("#para2,#para3").removeClass();
    $("#para1").toggleClass("boxes");
  });
  $("#para2").click(function(){
    $("#para1, #para3").removeClass();
    $("#para2").toggleClass("boxes");
  });
  $("#para3").click(function(){
    $("#para1, #para2").removeClass();
    $("#para3").toggleClass("boxes");
  });
});
