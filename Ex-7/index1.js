var http = require('http');
var url = require('url');
var querystring = require('querystring');
function onRequest(req, res) {
    var path = url.parse(req.url).pathname;
    console.log("Request for " + path + " received");
    var query = url.parse(req.url).query;
    console.log(query);
    var name = querystring.parse(query)["name"];
    var rollno = querystring.parse(query)["rollno"];
    var gender = querystring.parse(query)["gender"];
    var dept = querystring.parse(query)["dept"];
    var year = querystring.parse(query)["year"];
    var email = querystring.parse(query)["email"];
    var mobile = querystring.parse(query)["mobile"];
    res.write("Hello " + name + " \nYour details using get method :\n\tRoll no : " + rollno + "\n\tGender : " + gender + "\n\t Department : " + dept + "\n\tYear : " + year + "\n\tE-mail : " + email + "\n\tMobile : " + mobile);
    res.end();
}
http.createServer(onRequest).listen(8000);
console.log("Server started...");