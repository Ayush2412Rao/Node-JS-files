const fs = require('fs');
const http = require('http');

const server=http.createServer();

server.on("request",(req,res)=>{
    const fs = require('fs');
    // fs.readFile("stream.txt",(err,data)=>{
    //     if(err)
    //     {
    //         console.error("There is some error");
    //         res.end("There is some error")
    //     }
        
    //     res.end(data);
    // });
    //****2nd way by creating readable stream
    const rstream=fs.createReadStream("stream.txt");
    rstream.on("data",(chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on("end",()=>{
        res.end();
    });
    rstream.on("error",(err)=>{
        console.error(err);
        res.end("File do not exist!!");
    });
    
});
server.listen(8000,"127.0.0.1");