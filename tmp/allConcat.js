var searchDoctors = require('./../js/search.js').searchModule;
var apiKey = require('./../.env').apiKey;

function doctorList(response){
  response.data.forEach(function(res) {
    var doctorName = res.profile.first_name + " " + res.profile.last_name;
    var gender = res.profile.gender;
    var bio = res.profile.bio;
    $('#all-doctors').append("<li>" + "Doctor: " + doctorName + "<br><span class='bio-pic'><img src=" + res.profile.image_url + ">" + "</span>" + "<br>Gender: " + gender + "<br>Bio: " + bio + "</li><br>");
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
