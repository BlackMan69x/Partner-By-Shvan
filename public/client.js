// client-side js
// run by the browser each time your view template referencing it is loaded

console.log('hello world :o');

let dreams = [];

// define variables that reference elements on our page
const dreamsList = document.getElementById('dreams');
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['dream'];

// a helper function to call when our request for dreams is done
const getDreamsListener = function() {
  // parse our response to convert to JSON
  dreams = JSON.parse(this.responseText);

  // iterate through every dream and add it to our page
  dreams.forEach( function(row) {
    appendNewDream(row.dream);
  });
}

// request the dreams from our app's sqlite database
const dreamRequest = new XMLHttpRequest();
dreamRequest.onload = getDreamsListener;
dreamRequest.open('get', '/getDreams');
dreamRequest.send();

// a helper function that creates a list item for a given dream
const appendNewDream = function(dream) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = dream;
  dreamsList.appendChild(newListItem);
}

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();
  
  // add the dream to the database - NOTE: to actually add to the database, remix this app and comment out the lines here: https://glitch.com/edit/#!/silicon-blackbird?path=server.js:64:4
  console.log(`attempt to add dream ${dreamInput.value}`);
  const data = {dream: dreamInput.value};
  
  fetch('/addDream', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())
  .then(response => console.log(JSON.stringify(response)));

  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form 
  dreamInput.value = '';
  dreamInput.focus();
};
