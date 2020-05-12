// declares the base URL
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
// inserts special API key ; lets NYT know exactly what user is using their API
const key = 'Tj3bRpnVmyMct0rDuHbkAqzq6TGWpqOt';
// makes dynamic search url
let url;

// querySelector returns the first element within the document that matches the specified selector or group of selectors
const searchTerm = document.querySelector('.search');
// create variable 'startDate' set = to search in 'document', use querySelector to search for class of '.start-date'
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
// create variable 'searchForm' set = to document and use querySelector to search for form tag
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
// button variable for pagination 
const nextBtn = document.querySelector('.next');
// button variable for pagination 
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

// hides the "previous/next" nav when the page loads
// don't want it turned on immediately when there are no results to page
nav.style.display = 'none';

/* takes care of some pagination issues that wil; come up later. ensures that it won't be visible until we want it to be*/
let pageNumber = 0;
let displayNav = false;
// console.log('PageNumber:', pageNumber); 
// use pageNumber variable to show different pages of results 

// identifies target and adds eventListener 
/*   takes variable from above and call event listener on it. Looking for 'submit' event then will fetch results after submit button is clicked   */
// controls functionality of clicks
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

// 
function fetchResults(e) {
  // console.log(e);
//   (e) is part of something in Javascript called an event handling function
// add preventDefault to make sure that a request isn't actually sent
  e.preventDefault();
//   assemble the full URL using string interpolation(backticks)
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
  console.log('URL:', url);

//   conditional statement for start date
// rudimentary version of form validation; method of endsuring that specific fields are filled out in a form
// condition is checking for the value(input tag) of startDate
// checking to see if value is not equal "!==" to empty string
  if (startDate.value !== '') {
    console.log(startDate.value)
    // checking to see if what user has inputted 
    // using concatnation on string of url provided above
    // have to add "&begin_date=" because of API 
    url += '&begin_date=' + startDate.value;
  }
  
//   conditional statement for end date
  if (endDate.value !== '') {
    console.log(endDate.value)
    url += '&end_date=' + endDate.value;
  }

//   fetch makes a request for information 
// url given to fetch as a parameter which requests to the url
  fetch(url)
//   creates a promise containing a function that takes in results object
    .then(function(result) {
        // response
      console.log(result)
    //   promise asynchronously returns a function that converts result into usable json
      return result.json();
    })
    // create a second promise that has a function that takes in the json object
    .then(function(json) {
        // response
      console.log(json);
    //   sends JSONified results to 'displayResults' function
      displayResults(json);
    })
}

// can name parameter whatever we want because it's just a placeholder for whatever we send it
// but this json variable is different than the json variable above
function displayResults(json) {
    // checking to see if section element has any child elements 
  while (section.firstChild) {
    //   if section.firstChild is true, we call removeChild on section variable 
    section.removeChild(section.firstChild);
    // will clear out any child elements that are in the seciton
    // will clear out any articles before new search results are added
  }

//   declaring a new variable
//  changed to json format so it's now an object
 // drill down and store specific data in response variable
  let articles = json.response.docs;

//   point where we start to show results
// checking the length of the articles and using our comparison operator to see if we received anything
  if (articles.length === 0) {
    //   logic of having no results
    // if strict equal to 0 and no results log 'no results'
    console.log('No results');
    // articles variable contains array of articles so we can iterate over that array in the else
  } else {
    //   for loop that iterates for the length of the articles array
    // first set of results holds an array of 10, and we're simply printing out a number for each item in the index
    for (let i = 0; i < articles.length; i++) {
       
        // DOM manipulation each time we iterate through the results 
// create article variable that will create a node in the DOM that is an article element
      let article = document.createElement('article');
    // create a heading variable that creates a node in DOM that is a h2 element
      let heading = document.createElement('h2');
    //   create a link variable that uses 'a' element
      let link = document.createElement('a');
    //   add an img variable that will create an image element
      let img = document.createElement('img');
    //   declared a paragraph variable that will append a p tag to the DOM to be used for some of our JSON data
      let para = document.createElement('p');
    //   declaring a clearfix variable that will later append a div to the DOM 
      let clearfix = document.createElement('div');

    //   create a current variable that holds the data of the current article as we iterate 
    // dig into array using square bracket notation
    // i comes from for loop above
    // i = local scope variable
      let current = articles[i];
    //   log current data
      console.log('Current:', current);

    //   since link is an 'a' element we need to attach href property to it; current.web_url grabs the hyperlink for the current article out of the json result 
    // anytime we see current now we know it's dealing with the API
      link.href = current.web_url;
      console.log(link);
    //   text in link.textContent  set to value of current.headline.main which is part of json object from NYT API
      link.textContent = current.headline.main;

    //   adding the textContent to our para variable; each result will show this at the top of the p tag created by para
      para.textContent = 'Keywords: ';
      // Group 3
    /*  have a for loop inside another for loop(see above)
    using nested for loop it iterate over 'current' object (sepcifically 'keywords' are for that object)
    look through JSON results, see 'keyword' is a property of the entire object and it's an array
    here we iterate through the length of the array for the current result object
     */
      for (let j = 0; j < current.keywords.length; j++) {
        //   as we iterate, we create a 'span' for each keyword
        // 'span' will be an element that will end when the item ends (span of 'Pizza' starts at the P and ends at the a)(if we used a p tag here, it would cover the entirity of the parent object)
        let span = document.createElement('span');
        // textContent for each 'span' will be the value found inside the 'keywords' array inside the JSON object
        span.textContent += current.keywords[j].value + ' ';
        // append each 'span' as a child to the para node
        para.appendChild(span);
      }

    //   use a conditional to check the JSON for data 
    // multimedia property in the JSOn
      if (current.multimedia.length > 0) {
        //   if there is an object, we want to concatenate a string with the URL for the html src value 
        // concatenate: link things together in a chain or series
        // add first item to multimedia array "current.multimedia[0].usl""
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        // need an 'alt' if something should happen that the image isn't available
        // set it to value of headline
        img.alt = current.headline.main;
      }

    //   remember still have an outer loop and printing the results
    // here using 'setAttribute' method to target our 'clearfix' class (class in the CSS file)
    // clearing extra space and bringing div's down so the picture isn't overflowing
      clearfix.setAttribute('class', 'clearfix');

    // call appendChild on the article element; creates a child node on that element; heading in appendChild method creates a h2 element inside each article element
      article.appendChild(heading);
    //   appends a link as a child in the DOM inside of each h2
      heading.appendChild(link);
    //   append the img to the article element for each of our items
      article.appendChild(img);
    //   appends 'para' as child to article
      article.appendChild(para);
    //   appends 'clearfix' as child to article
      article.appendChild(clearfix);
    //   call appendChild to section element; article is a child of section and h2 is a grandchild of section
    // has to come last because it is appending everything created above
      section.appendChild(article);
    }
  }

//   add if-else that checks to see if articles.length is greater than 10; if it is, sets CSS to block; if not, sets CSS to none
// notice targetting the nav element in the nav variable at top of page
  if (articles.length === 10) {
    //   shows the nav display if 10 items are in the array
    nav.style.display = 'block';
  } else {
    //   hides the nav display if less than 10 items are in array
    nav.style.display = 'none';
  }
}

// does exactly what it says; allows user to move to the next page 
function nextPage(e) {
    // first increase the value of the the 'pageNumber' variable
  pageNumber++;
//   rerun the 'fetchResults' function
  fetchResults(e);
//   print the 'pageNumber' variable so that we can see it increment
  console.log('Page Number:', pageNumber);
}

// works the opposite of 'nextPage'; decreases the pageNumber variable when we click it 
function previousPage(e) {
    // have to account for the user being on the first page (page 0) (pageNumber of -1 will result in an error)
  if (pageNumber > 0) {
    //   if page number is over 0 we decrement the page number by 1 
    pageNumber--;
    fetchResults(e);
  } else {
    //   if the value is 0, return nothing and get out of function so it won't drop below 0
    return;
  }
//   if value wasn't 0 and we've decremented the page number, we fetch results again
  fetchResults(e);
  console.log('Page:', pageNumber);
}

// pagination: process of separating print or digitial content into separate pages
// print doc and some online content - refers to the automated process of putting in consecutive numbers to identifiy the sequential order of pages 
// our app - we already only display first 10 results. need to add navigation between the results

