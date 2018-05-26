

var url_string = "http://localhost:8090/user";
// var url_string = "http://172.27.96.1:8090/user";

// console.log("Access token: " + accessToken);

// var userId = "";
// var userName = "";

function insertUser(name, token, password) {
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
  
