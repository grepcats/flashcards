$(document).ready(function() {
  $(".term").click(function() {
    $("#"+this.id+"-def").toggle();
  });

  $(".definition").click(function() {
    $(this).hide();
  });

  $("h2.open-cards").click(function() {
    $(".definition").show();
    $(this).hide();
    $("h2.close-cards").show();
  });

  $("h2.close-cards").click(function() {
    $(".definition").hide();
    $(this).hide();
    $("h2.open-cards").show();
});

});
