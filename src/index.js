
console.log('Hello world');

fetch('https://us-central1-rrees-gcf-playground.cloudfunctions.net/jsoncors')
  .then(function(response) {
    response.json().then(function(json) {
        document.querySelector('#output').innerHTML = JSON.stringify(json, null, 4);
    });
  });
