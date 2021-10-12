var http = require('http');
var querystring = require('querystring');

http.createServer(function (req, res) {
    var fdata = '';
    req.on('data',function(chunk){
        console.log(chunk);
        fdata += chunk;
        console.log("Student Data : "+fdata);
    });
    req.on('end',function(){
        qs = querystring.parse(fdata);
        console.log(qs);
        var name = qs["name"];
        var rollno = qs["rollno"];
        var gender = qs["gender"];
        var dept = qs["dept"];
        var year = qs["year"];
        var email = qs["email"];
        var mobile = qs["mobile"];
        res.write("Hello " + name + " \nYour details using post method :\n\tRoll no : " + rollno + "\n\tGender : " + gender + "\n\tDepartment : " + dept + "\n\tYear : " + year + "\n\tE-mail : " + email + "\n\tMobile : " + mobile);
        res.end();
    });
    
}).listen(8002);

console.log("Server started...");