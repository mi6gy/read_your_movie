$(document).ready(function () {

  $("#findContent").on("click", function (event) {

    event.preventDefault()

    function displayMovieInfo() {

      var movie = $(this).attr("data-name");
      var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

      $.ajax({
        url: queryMoviesURL,
        method: "GET"
      }).then(function (response) {

        $("#contentView").text(JSON.stringify(response));
        console.log(response);
      });
    };
  });
});