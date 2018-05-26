      

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

        console.log("Inserting user: " + userName + ".");
        insertUser(userName, accessToken, '');

      });
}

function insertUser(name, token, password) {

      var url_string = "http://192.168.56.1:8090/user";

      // executed at onLoad
      /*
      $.post( url_string, { name: "John", token: "sd3sdpm", password: "" })
      .done(function( data ) {
        alert( "User inserted: " + data );
      });
      */

      var request = $.ajax({
            url: url_string,
            type: 'POST',
            //data: JSON.stringify({ "name" : "John", "token" : "sd3sdpm", "password" : "" }),
            data: JSON.stringify({ "name" : name, "token" : token, "password" : password }),
            contentType: 'application/json; charset=utf-8'
        });
        request.done(function(data) {
            // your success code here
      });
      
}
  
function fetchFriends() {
      var friendListEndpoint = "https://graph.facebook.com/v2.10/" + userId + 
      "/friends?access_token=" + accessToken;
            $.get(friendListEndpoint, function(data, status){
                  $("#response").html(JSON.stringify(data));
            });
}

function fetchResources() {
      var url_string = "http://192.168.56.1:8100/resources";
      
      var resources_endpoint = url_string + "?access_token=" + accessToken;
            $.get(resources_endpoint, function(data, status){
                  console.log(JSON.stringify(data));
                  console.log(data);
                  $("#responseResources").html(JSON.stringify(data));
            });
}