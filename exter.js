// we can say that it is advance verseion http  hhave many features and Optimazitions 
// each request amke a new connection on server can laso carru multplixer  we can slao say that server can ALSO make request to client and othe rsourcers   we can also creata differents routes on it  
// window Object 
const http2 = require('http2');
         
        //   const server = http2.createServer();
        //   const expectedWindowSize = 2 ** 20;
        //   server.on('connect', (session) => {
         
        //     // Set local window size to be 2 ** 20
        //     session.setLocalWindowSize(expectedWindowSize);
        //   });


const session = http2.connect('https://google.com')

// If there is any error in connecting, log it to the console
session.on('error', (err) => console.error(err))


