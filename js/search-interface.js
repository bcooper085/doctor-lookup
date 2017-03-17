var searchDoctors = require('./../js/search.js').searchModule;
var apiKey = require('./../.env').apiKey;

function doctorList(response){
  response.data.forEach(function(res) {
    $('#all-doctors').append("<li>Doctors:" + res.profile.first_name + "</li>");
  });
}

$(document).ready(function() {
  $('.medical-form').submit(function() {
    event.preventDefault();
    $('#all-doctors').empty();
    var symptom = $('#symptom').val();
    $('#symptom').val("");
    searchDoctors(symptom, doctorList);
  });
});
