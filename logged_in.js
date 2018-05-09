

// In case ?# is present we need just the ?, in case # is present we need ? instead of it.
var url_string = window.location.href.replace('?#', '#').replace('#', '?');
console.log("URL String : " + url_string);
var url = new URL(url_string);
var accessToken = url.searchParams.get("access_token");
console.log("Access token: " + accessToken);

var userId = "";
var userName = "";

function welcomeTheUser() {
      var userEndpoint = "https://graph.facebook.com/v2.10/me?fields=name&access_token="
      + accessToken;
  
      //ajax GET call to get user ID
      $.get(userEndpoint, function(data, status){
        userId = data.id;
        userName = data.name;
        $("#greetings").html("<h2>Hello &nbsp;" + userName + "<h2/>");
      });
  }
  
function fetchFriends() {
      var friendListEndpoint = "https://graph.facebook.com/v2.10/" + userId + 
      "/friends?access_token=" + accessToken;
            $.get(friendListEndpoint, function(data, status){
                  $("#response").html(JSON.stringify(data));
            });
}
