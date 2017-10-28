<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
  <script type="text/javascript">

    var nydata;
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
    } else if (endYear!=="") {
      queryURL = nytURL + "q=" + searchQuery + "&" + + "end_date=" + endYear + "0101";
    }

    .ajax({
      url: queryURL,
      method: 'GET',
    }).done(function(nydata) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });

    

  });



  </script>