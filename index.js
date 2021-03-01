const fs=require('fs');
module.exports=
function serveImageFile(res, path) {

    console.log(__dirname + path);

    fs.readFile(__dirname + path, function(err, data) {
        console.log(err);
        if(err) {
            res.writeHead(500, { 'Content-Type' : 'text/plain' });
            res.end('500 - Internal Error');
        } 
        else {
            res.writeHead( 200, { 'Content-Type' : "image/png" });
            res.end(data);
        }
    });
}