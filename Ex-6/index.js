const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer(function (req, res) {
    if (req.url == "/") {
        fs.readFile('restaurant.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.write(data, 'utf-8');
            return res.end();
        });
    }
    else if (req.url == "/about") {
        fs.readFile('about.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
    else if (req.url == "/contact") {
        fs.readFile('contact.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
    else if (req.url.match('\.jfif$')) {
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/jfif" });
        fileStream.pipe(res);
    }
    else if (req.url.match('\.jpg$')) {
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/jpg" });
        fileStream.pipe(res);
    }
    else if (req.url.match('\.png$')) {
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);
    }
    else {
        fs.readFile('wrongUrl.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }

}).listen(8080);
