// NASA Picture of the Day:
// the user can enter the date and click a button
// 1 event listener
// get NASA api url
// if the user enters an invalid date alert them which date ranges are suitable



$("#getpic").on("click",function(){
var getValue = $("#enterdate").val();
console.log(getValue);
    var apiKey = "0000000000";
    var apiURL = "https://api.nasa.gov/planetary/apod?date=" +getValue+ "&api_key="+apiKey;
    console.log(apiURL);
    $.ajax({
      url: apiURL,

    // Work with the response
    success: function(response){
      console.log(response);
      $("img").attr("src", response.url);
    },
    error: function(response){
      console.log(response);
    }

  });


});
