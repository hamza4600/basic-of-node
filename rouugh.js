// ? GET request Method get data from aserver and add that data from a server to an API  an  this api can be used to render in UI
const http=require("http");
var dats;
http.get('http://jsonplaceholder.typicode.com/users', (res) => {
       const { statusCode } = res;
       const contentType = res.headers['content-type'];
        
       let error;
       // Any 2xx status code signals a successful response but
       // here we're only checking for 200.
       if (statusCode !== 200) {
         error = new Error('Request Failed.\n' +
                           `Status Code: ${statusCode}`);
       } else if  (!/^application\/json/.test(contentType)) {
         error = new Error('Invalid content-type.\n' +
                           `Expected application/json but received ${contentType}`);
       }
       if (error) {
         console.error(error.message);
         // Consume response data to free up memory
         res.resume();
         return;
       }
    
       res.setEncoding('utf8');
       let rawData = '';
       res.on('data', (chunk) => { rawData += chunk; });
       res.on('end', () => {
         try {
           const parsedData = JSON.parse(rawData);
           console.log(parsedData);
           dats=parsedData
         } catch (e) {
           console.error(e.message);
         }
       });
     }).on('error', (e) => {
       console.error(`Got error: ${e.message}`);
     });
    
     // Create a local server to receive data from
     const server = http.createServer((req, res) => {
       res.writeHead(200, { 'Content-Type': 'application/json' });
       res.end(JSON.stringify({
         data: 'Hello World!',
         dats
       }));
       console.log("Data is ")
       console.log("Data is ")
       console.log("Data is ")
       console.log(dats)
     });
    
     server.listen(8000);
     