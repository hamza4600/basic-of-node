// Basic Server 
const http=require('http');
const host=`127.0.0.1`
const port=3030;
const server=http.createServer((req,res)=>{
  res.statusCode=200
  res.setHeader(`Content-Type`,`text/html`);
  console.log(req)
  res.end(`hello Hamza is here`)
})
server.listen(port,host,()=>{
  console.log(`server is running on ${host} port is ${port}`)
})
console.log(http)


const http= require('http');
const { hostname } = require('os');
// console.log(http)
// Protocaol desigined for many Purposes Data transfer and requesr and respone Data  Low level API 

// message.headers contain the details 

// server.timeout() callback function can be defined 

// we can also get and setHeader 

/*
 outgoingMessage.setHeader('Foo', 'bar');
 outgoingMessage.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

 const headers = outgoingMessage.getHeaders();
          // headers === { foo: 'bar', 'set-cookie': ['foo=bar', 'bar=baz'] }
  */       

const local=`127.0.0.1`;
const port=8080;
const server=http.createServer((req,res)=>{
    // res.statusCode=200
    res.writeHead(200,{"Content-Type":"text/html",
                        "Trailer":"Content-MD5"})
    // res.setHeader(`Content-Type`,`text/html`);
    res.write("dATA will be Dynamic in server")
    console.log(req.headers);
    res.addTrailers({'Content_MD5':"7895bf4b8828b55ceaf47747b4bca667"})
    res.end(`This a Local server `)
    // console.log(res.headers)
});
server.listen(port,local,()=>{
    console.log(`Server is running in ${local} port Number ${port}`)
})

// Header is an array with key and values 
/*const body = 'hello world';
          response
            .writeHead(200, {
              'Content-Length': Buffer.byteLength(body),
              'Content-Type': 'text/plain'
            })
            .end(body);
Method is called once in message  must be before end             */

// setHeader(key,value) getHeader(key)

// incoming message is created by Client Request  responce 

// console.log(req.header)



// Bassic server get data from oTher source and show Data in an ApI

const http =require('http');

var paraseDatx;
http.get(`http://jsonplaceholder.typicode.com/users`,(res)=>{
    const {statusCode}=res;
    const ContentType=res.headers["content-type"]
    let error;
    if(statusCode !==200){
        error=new Error(`Request Failed + ${statusCode}`)
    }else if (!/^application\/json/.test(ContentType)) {
        error= new Error (`Invalid Content Type Data recive is ${ContentType}`)
    }
    if(error){
        console.log(error.message);
        res.resume();
        return
    }
    res.setEncoding(`utf8`);
     let  rawData="";
    res.on('data',(chunk)=>{rawData+=chunk})
    res.on(`end`,()=>{
        try{
            const  paraseData=JSON.parse(rawData)
            console.log(paraseData)
            paraseDatx=paraseData
        } catch(e){
            console.log(e.message)
        }
    })
}).on(`error`,(e)=>{
    console.log(`Got error ${e.message}`)
})
// creating a lOcal server and  post data 
const serve= http.createServer((req,res)=>{
    res.writeHead(200,{"Conteent-Type":"Application/json"});
    console.log(req.headers)
    res.end(JSON.stringify({
        data:`Hello worl `,
        paraseDatx
    }))
})
serve.listen(8080)