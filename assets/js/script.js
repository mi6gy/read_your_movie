$(document).ready(function () {

  $("#findContent").on("click", function (event) {

    event.preventDefault()

    // var movie = $("#contentInput").val();
    var book = $("#contentInput").val();


    // var queryMoviesURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=101156dc";
    var queryBooksURL = "http://openlibrary.org/search.json?title=" + book;




    $.ajax({
      url: queryBooksURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#contentView").html(response[0]);

      var bookTitle = response.docs[0].title
      console.log(bookTitle)
    });

    // $.ajax({
    //   url: queryMoviesURL,
    //   method: "GET"
    // }).then(function (response) {
    //   console.log(response);
    //   $("#contentView").text(response.Title);

    // });

  });

});
