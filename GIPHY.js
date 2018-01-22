<script type="text/javascript">
    $(function () {
    var topics = ["cake", "muffins", "cookies", "pies"];
    console.log(topics);
    function renderButtons() {
    $("#food-buttons").empty(); // Clears all children from food-buttons id
          for (var i = 0; i < topics.length; i++) {
          var a = $("<button>"); // Add a <button> 
          a.addClass("food"); // Add a CLASS 
          a.attr("data-name", topics[i]); // Add a data-attribute with a value of the array "topics" at index i
          a.text(topics[i]); // Providing the button's text with a value of the array "topics" at index i
    $("#food-buttons").append(a); // Adding the button to the HTML
 }
}
     $(document).on("click", ".food", function (event) {
          var food = $(this).attr("data-name");
          var queryURL = "<src="https:/media.giphy.com/media/thln8oJs58o7u/giphy.gif"></script>"

                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).done(function (response) {
                    console.log(queryURL);
                    console.log(response);
                    var results = response.data; 

                    $("#food").empty()
                    for (var i = 0; i < response.data.length; i++) {
                        // Creating and storing a div tag:
                        var foodDiv = $("<div class='col-md-4'>");
                        // Change object to a string:
                        $(foodDiv).text(JSON.stringify(response));
                        // Creating a paragraph tag with the result item's rating:
                        var p = $("<p>").text("Rating: " + results[i].rating);
                        // Creating and storing an image tag
                        var foodImage = $("<img>");
                        // Adding attributes
                        $(foodImage).attr("src", results[i].images.fixed_height.url);
                        $(foodImage).attr("data-still", results[i].images.fixed_height_still.url);
                        $(foodImage).attr("data-animate", results[i].images.fixed_height.url);
                        $(foodImage).attr("data-state", "still");
                        // Appending the paragraph and image tag to the food div
                        $("#food").append(p);
                        $("#food").append(foodImage);

          $(document).on("click", "img", function (event) {
                        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                         var state = $(this).attr("data-state");
                         // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                         // Then, set the image's data-state to animate
                         // Else set src to the data-still value
                                    if (state === "still") {
                                        $(this).attr("src", $(this).attr("data-animate"));
                                        $(this).attr("data-state", "animate");
                                    } else {
                                        $(this).attr("src", $(this).attr("data-still"));
                                        $(this).attr("data-state", "still");
                                    }
                            });
                            }
                            })
                { 
     
            $("#add-food").on("click", function (event) {
                // event.preventDefault() prevents the form from trying to submit itself.
                event.preventDefault();
                var food = $("#food-input").val().trim(); // This line will grab the text from the input box
                topics.push(food); // The input from the textbox is then added to our array
                // calling renderButtons which handles the processing of our topics array
                renderButtons();
            });
            renderButtons();
        };
       </script>
