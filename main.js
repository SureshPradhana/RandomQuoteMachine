const link = "https://type.fit/api/quotes";

$(document).ready(() => {
  fetch(link)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //initial values
      var randomQuoteIndex = Math.round(Math.random() * data.length);
      var currentQuote = data[randomQuoteIndex].text;
      var currentAuthor = data[randomQuoteIndex].author;
      $("#text").text(currentQuote);
      $("#author").text(currentAuthor);
      $("#tweet-quote").attr(
        "href",
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
          encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
      );
      //after event listening
      $("#new-quote").click(function () {
        randomQuoteIndex = Math.round(Math.random() * data.length);
        currentQuote = data[randomQuoteIndex].text;
        currentAuthor = data[randomQuoteIndex].author;
        $("#text").text(currentQuote);
        $("#author").text(currentAuthor);
      });
      $("#tweet-quote").click(() => {
        let currentA = $("#author").text();
        let currentT = $("#text").text();
        $("#tweet-quote").attr(
          "href",
          "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
            encodeURIComponent('"' + currentT + '" ' + currentA)
        );
      });
    });
});
