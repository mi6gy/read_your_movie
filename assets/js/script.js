$(document).ready(function () {

  $("#findContent").on("click", function (event) {

    event.preventDefault()

    var movie = $("#contentInput").val();
    var book = $("#contentInput").val();

    var queryMoviesURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    var queryBooksURL = "https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=AIzaSyBfde9KgHwbNNBEW_J011ZGwrHD0G0O1go"



    $.ajax({
      url: queryBooksURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#contentView").text(JSON.stringify(response));

    });

    $.ajax({
      url: queryMoviesURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#contentView").html(response.Title);

    });

  });

});
