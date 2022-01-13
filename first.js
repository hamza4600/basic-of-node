// const fs= require('fs')
const fa=()=>console.log('hamza')
const fz=()=>console.log('Hassan')
const foo=()=>{
  console.log('Foo Main function exicute')
  setTimeout(fa,2000)
  fz()
}
// foo()
// any function in event loop make adelay will exicute at the last of App 
// above is an example of callStack function or Stack code is run from top to down but in above example nothing happen such because i use setTimeOut function and in App it will increase Problum so Js come up with Pronises that will give result in Future  
//  CallBack and Promises
// callback are function that are pass in another function as a argument to exicute later used in two different functions Asyn funct and add a Asycn function and will disaly as a fucntions in CallStack

function mesag(msg,callback){
  setTimeout(()=>{
    console.log(msg)
    callback(msg)
  },1000)
}
function display(){
  console.log('Second  Displayed')
}
mesag('First Render')
display()
// ?now funcxtion have run in a sequience