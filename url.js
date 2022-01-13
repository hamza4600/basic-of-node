// url Module for web address we can laso split web address in Parts
const url=require("url")
// console.log(url)
// console.log(url.parse)
// console.log(url.URL)
// console.log(url.format)
// show all methods and functions 


// / constructing a URL Object 
const pathname ="/a/b/c";
const search = "?/d=e";
const  hash= "#hgf";
const myURL =(`http://localhost:8080${pathname}${search}${hash}`)
console.log(myURL);

// const urls= new URL("/foo","http://localhost/")
// console.log(URL===globalThis.URL);

const hamza= url.format({
       protocol: 'http',
       hostname: 'example.com',
       pathname: '/some/path',
       query: {
         page: 1,
         format: 'json'
       }
     });

     console.log(hamza) //https://example.com/some/path?page=1&format=json
     console.log(hamza.port)
console.log(url.domainToASCII(`hamza.com`))
console.log(url.domainToUnicode(`hamza.com`))


// file URL TO PATHE 
// we have reach the oath we define in the urlPath
const hasan=url.pathToFileURL(`E:\Node`)
hasan.port=`8080`;
hasan.protocol='ftp';
console.log(hasan)
console.log(`Protocol is `+" "+hasan.protocol)
console.log(`Port is `+" "+hasan.port)




const {URL}=require("url")
const myURLs = [
       new URL('https://www.example.com'),
       new URL('https://test.example.org'),
     ];
     console.log(JSON.stringify(myURLs));


// `we can seee all the properties of Object URl`
const urrl= new URL("https://hamza:xyz@example.com")
console.dir(`User Name is as Below`)     
console.dir(urrl.username)     
console.dir(urrl)     

// search parametere
 const myUrls = new URL('https://example.org/abc?foo=~bar');
console.dir(`search paraameter is as  `+myUrls.search)


// changing the protocaol of a address 
const URLH = new URL('https://example.org');
URLH.protocol="ftp";
console.log(`Protocol is as`)
console.log(URLH.href)


// we can alo chamge the protocola tha we are using as
const URLP = new URL('https://example.org:8888');
console.log(`Port used is as  `+URLP.port)
console.log(`Change Port Number as`)
URLP.port="500";
console.log(`Port used is as  `+URLP.port)


// we can also set and delete the search Params as wee want and get 
const params= new URLSearchParams();
params.append(`ab`,"hamza");
params.append(`bc`,`Hassan`);
console.log(`Search Parameter are `+params.toString())

// we can also get a nd set the path of the Host that  we want to define  
const URLD = new URL('https://Google.com');
URLD.pathname="hamza";
console.log(`Generated our own custom Url Path`)
console.log(URLD.href)