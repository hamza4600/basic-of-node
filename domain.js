// discuss basic domin module in js
//domins


/*
Domains provide a way to handle multiple different IO operations as a
 * single group. If any of the event emitters or callbacks registered to a
 * domain emit an `'error'` event, or throw an error, then the domain object
 *
*/

const domain = require('domain');
const http = require('http');
const serverDomain = domain.create();

http.createServer((req, res) => {
serverDomain.run(() => {
    console.log(`running server on 8080`)
  // Server is created in the scope of serverDomain
    // Req and res are also created in the scope of serverDomain
    // however, we'd prefer to have a separate domain for each request.
    // create it first thing, and add req and res to it.
    const reqd = domain.create();
    reqd.add(req);
    reqd.add(res);
    console.log(`requested added `)
    reqd.on('error', (er) => {
      console.error('Error', er, req.url);
      try {
        res.writeHead(200);
        res.end('Error occurred, sorry.');
      } catch (er2) {
        console.error('Error sending 500', er2, req.url);
      }
    });
});
}).listen(8080);
