//  it  provide asynce netwwork api for tcp connection  or ipc server and client


 /*A `net.Socket` can be created by the user and used directly to interact with
     * a server. For example, it is returned by {@link createConnection},
     * so the user can use it to talk to the server.
     *
     * It can also be created by Node.js and passed to the user when a connection
     * is received. For example, it is passed to the listeners of a `'connection'` event emitted on a {@link Server}, so the user can use
     * it to interact with the client.
     * 
     * Sockets
     *  Sends data on the socket. The second parameter specifies the encoding in the
         * case of a string. It defaults to UTF8 encoding.
         *
         * Returns `true` if the entire data was flushed successfully to the kernel
         * buffer. Returns `false` if all or part of the data was queued in user memory.`'drain'` will be emitted when the buffer is again free.
         * 
         *socket.connect(options[, connectListener])`
         * * `socket.connect(path[, connectListener])` for `IPC` connections.
         * * `socket.connect(port[, host][, connectListener])` for TCP connections.
         * * Returns: `net.Socket` The socket itself.
         *
         * This function is asynchronous. When the connection is established, the `'connect'` event will be emitted. If there is a problem connecting,
         * instead of a `'connect'` event, an `'error'` event will be emitted with
         * the error passed to the `'error'` listener. 
         * net.Scoket
         * we can also define path and port we want to connect to 
         * 
         * net.Socket` has the property that `socket.write()` always works. This is to
         * help users get up and running quickly. The computer cannot always keep up
         * with the amount of data that is written to a socket. The network connection
         * simply might be too slow. Node.js will internally queue up the data written to a
         * socket and send it out over the wire when it is possible.
         *
         * latency buffer size to be send 
         * 
         * commnet events 
         *  events.EventEmitter
         *   1. close
         *   2. connect
         *   3. data
         *   4. drain
         *   5. end
         *   6. error
         *   7. lookup
         *   8. timeout 
     * 
     * 
     * Server object 
     *  sever listineing for a connection 
          * `server.listen([port[, host[, backlog]]][, callback])` for TCP servers
     * we can also pass more data 
         * All `listen()` methods can take a `backlog` parameter to specify the maximum
     * 
     * * server.on('error', (e) => {
         *   if (e.code === 'EADDRINUSE') {
         *     console.log('Address in use, retrying...');
         *     setTimeout(() => {
         *       server.close();
         *       server.listen(PORT, HOST);
         *     }, 1000);
         *   }
         * }); // basic example 
         * 
         * 
         * 
         * IPV4 or ip address 
         * we can also block the ip address we want to add them in BlokList
         * const blockList = new net.BlockList();
         * blockList.addAddress('123.123.123.123');
         * 
        function createConnection(port: number, host?: string, connectionListener?: () => void): Socket;
        * // we can also bounce a client to another serever we wanted      
     *  */
// const net=require("net");
// console.log(net)
// console.log(net.Socket)


//creat a server 
// const server = net.createServer((c) => {
//        // 'connection' listener.
//        console.log('client connected');
//        c.on('end', () => {
//          console.log('client disconnected');
//        });
//        c.write('hello\r\n');
//        c.pipe(c);
//      });
//      server.on('error', (err) => {
//        throw err;
//      });
//      server.listen(8124, () => {
//        console.log('server bound');
//      });


    // function createConnection(port: number, host?: string, connectionListener?: () => void): Socket;
    
 
	

let net = require('net');
 
let server = net.createServer();
 
// 'connection' listener
server.on('connection', (socket) => {
    console.log('connected');
    socket.on('end', () => {
        console.log('disconnected');
    });
    socket.write('hello world this is node net in action! \r\n');
    socket.end()
});
 
// handle errors
server.on('error', (err) => {
  throw err;
});
 
// listen on port 8080 on local host with a backlog of 200
server.listen(8080, 'localhost', 200, () => {
    console.log('opened server on', server.address());
});