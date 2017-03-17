var searchDoctors = require('./../js/search.js').searchModule;
var apiKey = require('./../.env').apiKey;

function doctorList(response){
  response.data.forEach(function(res) {
    var doctorName = res.profile.first_name + " " + res.profile.last_name;
    $('#all-doctors').append("<li><button class='btn' type='button' value=\"" + doctorName + "\">" + "Doctor:" + doctorName + "</button></li>");
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
