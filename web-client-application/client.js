var facebookAuthEndpoint = "https://www.facebook.com/v2.10/dialog/oauth";
var responseType = "token";
var clientId = "182913671872217";  
var redirectUrl = "http://www.aademo.tk/logged_in.html";
var scope = "public_profile user_friends";

function goToLogin() {
    var userEndpoint = facebookAuthEndpoint + "? response_type=token&& client_id=" + clientId + "& redirect_uri=" + redirectUrl + "& scope=" + scope;
    console.log("Uri: " + userEndpoint);
    /*
        $.get(userEndpoint, function(data, status){
            console.log("Response data: ");
            console.log(data);
        });
    */
    window.location.replace(userEndpoint);
}