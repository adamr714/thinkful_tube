$(document).ready(function() {
    // STEP 1 - Get User Input
    $("#search-form").submit(function (event) {
        event.preventDefault();
        var userInput = $("#query").val();
        getResults(userInput);
    });

    // STEP 2 - Use Input to Make API Call
    function getResults(userInput) {
        $.getJSON("https://www.googleapis.com/youtube/v3/search", {
                part: 'snippet', 
                maxResults: 6, 
                key: 'AIzaSyAUDNuTfHa5XAwGIdS_vYZxyJEQG19grm8',
                q: userInput, 
                type: 'video' 
            },

            function (receivedApiData) {
                console.log(receivedApiData);
                if (receivedApiData.pageInfo.totalResults == 0) {
                    alert("No videos found!");
                }
                else {
                    displaySearchResults(receivedApiData.items);
                }
            });
    }

    // STEP 3 - Prepare Results
    function displaySearchResults(videosArray) {
        var results = '';
        $.each(videosArray, function (videosArrayKey, videosArrayValue) {
            results += "<div class='col-4 box'>"; 
            results += "<a href='https://www.youtube.com/watch?v=" + videosArrayValue.id.videoId + "' target='_blank'>"; //Link to video
            results += "<img src='" + videosArrayValue.snippet.thumbnails.medium.url + "'/>"; //Thumbnail
            results += "</a>";
            results += "<h2>" + videosArrayValue.snippet.title + "</h2>"; //Video Title
            results += "</div>";
        });

    //Step 4 - Show the Results
        $("#search-results").html(results);
    }
});







