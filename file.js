const fs=require("fs");
const http=require("http")
// fs.appendFile("hamza.txt","Append Data to the File",function(err){
//     if(err) throw console.log(err);
//     console.log("Append The file\n")
// })
// // appeendFile() create a fiel if not presten and add the contenct to the file 

// fs.appendFile("hamza.txt","\n\nNeww Foem of Data ",function(err){
//     if(err) throw console.log(err)
//     console.log(`:New file Datat`)
// })

// unlink() is used to delet data from the file
// rename(one,two) prevesive file and new Name of file  update the name of File  

// creart a server and show the Daata of a file on the requsest

http.createServer(function(req,res){
    fs.readFile("rouugh.js",function(err,data){
        res.writeHead(200,{"Conetnt-Type": "tetx/html"});
        res.write(data);
        console.dir(req.headers)
        return res.end()
    })
}).listen(2500)
// data from file is show to the request 


const file=require("fs/promises");
const fs=require("fs")
// const dirs=file.opendir()
async function hah(){
 try {
   const dir =await file.opendir('.');
    console.log(`List of all files`)

   for await (const dirent of dir)
     console.table(`:  `+dirent.name);
 } catch (err) {
   console.error(err);
 }}
 hah() // simple function return the all files in directory

 // function that will show data from the file 
 function FileData(data){
    fs.readFile(`${data}`,`utf8`,(err,data)=>{
        console.log(data)
    })
 }// pass  naem of file and will show us the data from the file
//  FileData(`basicserver.js`)