var Search = require('./../js/search.js').searchModule;

$(document).ready(function() {
  var newSearch = new Search();

  $('.medical-form').submit(function() {
    event.preventDefault();
    $('#all-doctors').empty();
    var symptom = $('#symptom').val();
    $('#symptom').val("");

    newSearch.getSearched(symptom);
  });
});
