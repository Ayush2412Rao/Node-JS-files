const http=require('http');
const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=="/")
    {
        res.end("HomePage");
    }
    else if(req.url=="/about")
    {
        res.end("AboutUs Page")
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>Error Page</h1>");
    }
});

server.listen(8080,"127.0.0.1",()=>{
    console.log("Server is running on port 8080");
});