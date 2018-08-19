$(function() {

    $(".devour-burger").on("click", function(event) {
      event.preventDefault();
      
      var id = $(this).data("id");
      var devouredState = {
          devoured: 1
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("Burger devoured");
          // Reload to get the updated list
          location.reload();
        }
      );
    });
  
    // Add a new burger.
    
    $(".create-form").on("submit", function(event) {

      event.preventDefault();
      var newBurger = {
        burger_name: $("#new-burger").val().trim(),
        devoured: 0
      };
  
      // Send POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page
          location.reload();
        }
      );
    });
    
  });