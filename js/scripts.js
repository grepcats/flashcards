$(document).ready(function() {
  $(".term").click(function() {
    $("#"+this.id+"-def").toggle();
  });

  $(".definition").click(function() {
    $(this).hide();
  });
});
