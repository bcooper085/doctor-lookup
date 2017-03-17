(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "19478a44178f1a8663d1322d8f54f4a7";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

var searchDoctors = function(symptom, displayResults) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptom +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
       console.log(response);
       displayResults(response);
     }).fail(function(error){
       $('#all-doctors').text(error);
     });
};

exports.searchModule = searchDoctors;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/search.js":2}]},{},[3]);
