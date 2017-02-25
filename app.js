



// var apiKey = "AIzaSyAUDNuTfHa5XAwGIdS_vYZxyJEQG19grm8"





var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var settings = {
    url: YOUTUBE_BASE_URL,
    data: {
      s: searchTerm,
      r: 'json',
      key: 'AIzaSyAUDNuTfHa5XAwGIdS_vYZxyJEQG19grm8',
      part: 'snippet',
      q: 'searchTerm',
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
  $.ajax(settings);
}



function displayYouTubeSearchData(data) {
  var resultElement = '';
  if (data.Search) {
    data.Search.forEach(function(item) {
     resultElement += '<p>' + items + '</p>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(event) {
    event.preventDefault();
    var query = $(this).find('.js-query').val();
    console.log(query);
    getDataFromApi(query, displayYouTubeSearchData);

  });
}

// $(function(){watchSubmit();});

$(document).ready(function() {
	watchSubmit();
});

