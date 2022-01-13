// api provide low level design and specification around Protocol http/2
const httpTwo= require("http2");
const { start } = require("repl");

// we can also creat aencrypted server and unencrypted server also
console.log("server is going to start")
const server = httpTwo.createServer((req,res)=>{
    console.log(req.headers)
    console.log(`Runnibg Server in port 8080`)
});
server.on("stream",(stream,headers)=>{
    stream.respond({
        "Content-Type":"html/text ; charset=utf-8'",
        "status":200
    });
    stream.on("error",(err)=>{console.log(err)})
    stream.end(`<h1>Hello Hamza is Hear</h1>`)
})
server.listen(8080)




const http2=require("http2");
// const client=http2.connect(`http://localhost:8085`);
// const {ngHttps}=http2.constants;
// const request = client.request({":path":"/"});
// request.setTimeout(5000,()=>{request.close(ngHttps)})

const server = http2.createServer();
              server.on('stream', (stream) => {
                console.log(`Server started`)
                stream.respond(undefined, { waitForTrailers: true });
            stream.on('wantTrailers', () => {
              stream.sendTrailers({ xyz: 'abc' });
            });
            stream.end('Hello World');
          });
server.listen(8080)

const serve = http2.createServer();
          serve.on('stream', (stream) => {
            stream.respond({ ':status': 200 }, { waitForTrailers: true });
            stream.on('wantTrailers', () => {
              stream.sendTrailers({ ABC: 'some value to send' });
            });
            stream.end('some data');
          });

// deils with file sysytem
          const fs = require('fs');
          
           const serveO = http2.createServer();
           serveO.on('stream', (stream) => {
             const fd = fs.openSync('/some/file', 'r');
          
             const stat = fs.fstatSync(fd);
             const headers = {
               'content-length': stat.size,
               'last-modified': stat.mtime.toUTCString(),
               'content-type': 'text/plain; charset=utf-8'
             };
             stream.respondWithFD(fd, headers, { waitForTrailers: true });
             stream.on('wantTrailers', () => {
               stream.sendTrailers({ ABC: 'some value to send' });
             });
          
             stream.on('close', () => fs.closeSync(fd));
           });          


           