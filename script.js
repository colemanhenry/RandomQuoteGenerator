/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//Created my array of quotes with personal messages pf inspiration

var quotes = [
{
  quote:'Theres no point living, if you cant feel alive.',
  source: 'Elektra King',
  citation: 'World is Not Enough',
  year: '1999'
},

{
  quote: 'Everybody has a plans until they get hit',
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
{
  quote: 'Do or do not. There is no try',
  source: 'Yoda ',
  citation: 'Star Wars',
  year: '1977'
},
]

//I created a random quote generator function obtaining data from the quotes array
function getRandomQuote(array) 
{
  var quoteIndex = 
  Math.floor(Math.random() * (quotes.length));
  {
      var randomQuote = array[quoteIndex];
  }
  return randomQuote;
}



// Printing the quote function and assigning a variable using the objects stored
function printQuote()
{
  
  var random = getRandomQuote(quotes);
  var message ="";

  if( random['quote'] )
  {
    message += '<p class="quote">' + random['quote'] + '</p>';    
};
  if( random['source'] )
  {
    message += '<p class="source">' + random['source'];    
};
  if( random['citation'] )
  {
    message += '<span class="citation">' + random['citation'] + '</span>';    
};

if( random['year'] )
{
    message += '<span class="year">' +random['year'] + '</span>';
};
message += '</p>';

document.getElementById('quote-box').innerHTML = message;
}
      
 



// /***
//   When the "Show another quote" button is clicked, the event listener 
//   below will be triggered, and it will call, or "invoke", the `printQuote` 
//   function. So do not make any changes to the line of code below this 
//   comment.
// ***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);