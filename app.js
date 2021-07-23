var url = require('url');
var fs = require('fs');

function render(path,res){
    fs.readFile(path,null,(err,data) => {
        if(err){
            res.writeHead(404);
            res.write('Unable to read data');
        }
        else{
            res.write(data);
        }
        res.end();
    });

}

module.exports = {
    handleRequest: (req,res) => {
        res.writeHead(200,{'Content-Type': 'text/html'});
        let path = url.parse(req.url).pathname;

        switch(path){
            case '/':
                render('./index.html',res);
                break;
            case '/login':
                render('./login.html',res);
                break;

            default:
                res.writeHead(404);
                res.write('Route Not Defined');
                res.end()
                break;
        }
    }
}