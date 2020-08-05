$(document).ready(function () {
  $("#findContent").on("click", function (event) {
    event.preventDefault()
        var book = $("#contentInput").val();
       var queryBooksURL = "https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=AIzaSyBfde9KgHwbNNBEW_J011ZGwrHD0G0O1go"




    $.ajax({
      url: queryBooksURL,
      method: "GET"
    }).then(function (googleResponse) {
      console.log(googleResponse);

      // $("#bookView").html(googleResponse.items[0].volumeInfo.authors);
      var queryMoviesURL = "https://www.omdbapi.com/?s=" + book  + "&apikey=101156dc";
      $.ajax({
        url: queryMoviesURL,
        method: "GET"
      }).then(function (movieResponse) {
        console.log(movieResponse);
        // $("#contentView").text(movieResponse.Title);
        if(googleResponse.items.length > 0 && movieResponse.Response != "False"){
          var bookImgURL = response.items[0].imageLinks.thumbnail;
          $("#bookName").text(googleResponse.items[0].volumeInfo.title);
          $("#card-title").html(googleResponse.items[0].volumeInfo.authors); 
          $("#contentView").text(movieResponse.Title);
          $("img").attr("src", bookImgURL);
        }
        else {
          $("#bookView").html("<p>Movie not found</p>");
        }
      });
    }).catch(function (err) {
      console.log(err);
    })

  });
});