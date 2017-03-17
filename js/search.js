var apiKey = require('./../.env').apiKey;

searchDoctors = function(symptom, displayResults) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
       console.log(response);
       displayResults(response);
     }).fail(function(error){
       $('#all-doctors').text(error);
     });
};


exports.searchModule = searchDoctors;
