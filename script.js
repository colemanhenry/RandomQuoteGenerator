/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/
var quotes = [
{
  quote: 'The stuff that dreams are made of.',
  source: 'The Maltese Falcon',
  citation: "Movie the Maltese Falcon",
  year: '1941'
},

{
  quote: 'Everybody has plans until they get hit.',
  source: 'Mike Tyson ',
  year: '1987'
},
{
  quote: 'A goal is not always meant to be reached, it often serves simply as something to aim at.',
  source: 'Bruce Lee ',
  year: '1987'
},
{
  quote: 'Show me the money!.',
  source: 'Jerry Maguire ',
  citation: 'Movie',
  year: '1996'
},

/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

function getRandomQuote(array) 
{
  var quoteIndex = 
  Math.floor(Math.random() * (quotes.length));
  for (var i = 0; i < array.length; i++) 
  {
      var randomQuote = array[quoteIndex];
  }
  return randomQuote;
}
console.log(quoteIndex);

// /***
//   Create the `printQuote` function to: 
//    - call the `getRandomQuote` function and assign it to a variable.
//    - use the properties of the quote object stored in the variable to 
//      create your HTML string.
//    - use conditionals to make sure the optional properties exist before 
//      they are added to the HTML string.
//    - set the `innerHTML` of the `quote-box` div to the HTML string. 
// ***/
// function printQuote()
// {
//   var random = getRandomQuote(quotes);
// }
 
// //Changes the background color on quote change
// function changeColour ()
// {
//   var newColor = colors[Math.floor(Math.random() * colors.length)];
//   return newColor
// },
  
// // Initializing the message variable with empty string
//   var result = getRandomQuote(quotes)
//   message = "<p class='quote'>" + result.quote + "</p>";
//   message += "<p class='source'>" + result.source;
//   message += "<span class='citation'>" + result.citation + "</span>";
//   message += "<span class='year'>" + result.year + "</span>"
//   message += "</p>";

//   document.getElementById('quote-box').innerHTML = message;  
// }
// printQuote();


// /***
//   When the "Show another quote" button is clicked, the event listener 
//   below will be triggered, and it will call, or "invoke", the `printQuote` 
//   function. So do not make any changes to the line of code below this 
//   comment.
// ***/

// document.getElementById('loadQuote').addEventListener("click",function() { printQuote(quoteLibrary)},false);


// // Remember to delete the comments that came with this file, and replace them with your own code comments.