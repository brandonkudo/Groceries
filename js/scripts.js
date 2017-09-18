$(document).ready(function() {
  $("#groceryList").submit(function(event) {
    event.preventDefault();
    var groceryList = ["item1", "item2", "item3", "item4", "item5", "item6"];

    var uppercase = groceryList.map(function(grocery) {
      var listinput = $("#" + grocery).val();
      return listinput.toUpperCase();
    });

    uppercase.forEach(function(grocery) {
      $(".output").append("<li>"+grocery+"</li>");
    });

    // $(".output").append("<p>" + $("#"+grocery).val() + "</p>");

    // var alphabet = uppercase.map(function(grocery) {
    //   return grocery.sort();
    // });
    //
    // alphabet.map(function(groceryItem) {
    //   var userInput = $("#" + groceryItem).val();
    //   $(".output" + userInput.length).text(userInput);
    // });

    $("#customerList").show();
  });
});
