$(document).ready(function() {
  $(".term").click(function() {
    $("#"+this.id+"-def").show();
  });

  $(".definition").click(function() {
    $(this).hide();
  });
});
