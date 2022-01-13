// a basic server 
const http=require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{
        "Contemt-Type":"text/plain"
    });
    res.write(`Hello Hamza \n New Server` +res.url);
    console.log("Listing on Pert 1334")
    res.end()
}).listen(1334)


// ?/some details of user that request the server
const http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type":"text/html" });
        res.write(`Node Js Server \n\n`)
        res.write(`${JSON.stringify(req.headers,null)}`)
        console.log("Listing in Port 1333");
        console.dir(req.headers) //get the detail of the requsest Object 
        res.end()
}).listen(1333)

// thired example 

const http = require('http');

 const postData = JSON.stringify({
   'msg': 'Hello World!'
 });

 const options = {
   hostname: 'www.google.com',
   port: 80,
   path: '/upload',
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
     'Content-Length': Buffer.byteLength(postData)
   }
 };

 const req = http.request(options, (res) => {
   console.log(`STATUS: ${res.statusCode}`);
   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
   res.setEncoding('utf8');
   res.on('data', (chunk) => {
     console.log(`BODY: ${chunk}`);
   });
   res.on('end', () => {
     console.log('No more data in response.');
   });
 });

 req.on('error', (e) => {
   console.error(`problem with request: ${e.message}`);
 });

 // Write data to request body
 req.write(postData);
 req.end();
