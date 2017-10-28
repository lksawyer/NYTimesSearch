  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
  <script type="text/javascript">

    var searchQuery;
    var startYear = "";
    var endYear = "";
    var recordNumber;
    var queryURL;
    var nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
    var apiKey = "7ef710c13ca94bb784fbb4c4fc064c9c";

  // When "Search" Button is clicked

  $("#search-button").on("click", function() {  

    if (startYear!=="" && endYear!==){
      queryURL = nytURL + "q=" + searchQuery + "&" + "begin_date=" + startYear + "0101" + "end_date=" + endYear + "0101";
    } else if (startYear!=="") {
      queryURL = nytURL + "q=" + searchQuery + "&" + "begin_date=" + startYear + "0101";

    }


  });



$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});







    // Adding click event listen listener to all buttons
    $("button").on("click", function() {
      // Grabbing and storing the data-animal property value from the button
      var animal = $(this).attr("data-animal");

      // Constructing a queryURL using the animal name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var animalDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var animalImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            animalImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(p);
            animalDiv.append(animalImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(animalDiv);
          }
        });
    });
  </script>