// data is encryptes using the crypto modules and certifiation keys and values
const https=require("https");
//  console.log(https)

// it is quite similat to http creat a server and Mthods used for encryptions 
https.createServer((req,res)=>{
    console.log(`server stared`)
    // console.log(``)
    console.log(req);
    res.end(`Hamza kahan`)
}).listen(8080)


// to creata https server we need a certification  install in local Folder and use as a Option 


/* const https = require('https');
      const fs = require('fs');
     
      const options = {
        pfx: fs.readFileSync('test/fixtures/test_cert.pfx'),
        passphrase: 'sample'
      };
     
      https.createServer(options, (req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
      }).listen(8000);*/
