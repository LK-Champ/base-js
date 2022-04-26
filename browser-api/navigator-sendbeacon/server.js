/* eslint-disable no-undef */
var http = require('http');
var fs = require('fs');
var url = require('url');

var typeMapping = {
    'html': 'text/html',
    'js': 'text/javascript',
    'css': 'text/css',
    'ico': 'image/x-icon',
    'png': 'image/png',
    'pdf': 'image/pdf',
    'jpg': 'image/jpg',
    'svg': 'image/svg',
    'gif': 'image/gif'
};

var imageType = ['png', 'pdf', 'jpg', 'svg', 'gif'];

var getResourceExtension = function (req) {
    var url = req.url;
    var lastIndexOfDot = url.lastIndexOf('.');

    if (lastIndexOfDot === -1) return 'text/plain';
    return url.substring(lastIndexOfDot + 1);
};

var respondResourceToClient = function (req, res) {
    //read the reource and respond via 'pipe'
    fs.createReadStream(req.url.replace(/^\//, '')).pipe(res);
};

var server = http.createServer(function (req, res) {

    console.log('requesting url: ', req.url);

    var pathname = url.parse(req.url).pathname;

    var extension = getResourceExtension(req);

    var delay = function (time) {
        setTimeout(function () {
            respondResourceToClient(req, res);
        }, time || 0);
    };

    if (extension === 'html' || extension === 'css') {
        res.writeHead(200, { 'Content-Type': typeMapping[extension] });
        delay(0);
    } else if (extension === 'js') {
        res.writeHead(200, { 'Content-Type': typeMapping[extension] });
        delay(1000);
    } else if (imageType.includes(extension)) {

        fs.readFile(pathname.substr(1), function (err) {
            if (err) {
                res.writeHead(404, { 'Content-Type': extension });
            } else {
                res.writeHead(204, { 'Content-Type': 'image/png' });

                var imageFilePath = pathname.substr(1);
                var stream = fs.createReadStream(imageFilePath);
                var resData = [];//存储文件流
                if (stream) {//判断状态
                    stream.on('data', function (chunk) {
                        resData.push(chunk);
                    });
                    stream.on('end', function () {
                        var finalData = Buffer.concat(resData);
                        res.write(finalData);
                        res.end();
                    });

                }
            }
        });

    } else {
        res.end('');
    }
});

server.listen(8090);

console.log('listening at port 8090...');    