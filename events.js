//  events in Nodes we can creat and delet and fire events that we want  using Module 
const event=require("events");
const { once, on } = require('events');

// console.log(event)
// we can used differnt Prorperties of Events as we want set and fire events as we want in our program

// evenrt emmiter and event Listiner 

// * For instance: a `net.Server` object emits an event each time a peer
// * connects to it; a `fs.ReadStream` emits an event when the file is opened;
// * a `stream` emits an event whenever data is available to be read.

// Basic Eample 
class MyEmitter extends event{};
const myEmitter=new MyEmitter();
myEmitter.on('event',()=>{
  console.log(`An evet Have Been occur ?`);
});
myEmitter.emit('event')


// Thre main Points an EventEmitter newListener removeListener  Node  and DOM events   ` 

const evntEmiter=new event.EventEmitter();
// creata a event
const Fun=function(){
  for(let i=1;i<=10;i++){
  console.log(i)}
    console.log("Action Finished ")
}
evntEmiter.on('scream',Fun)
// evntEmiter.emit("scream")


async function run() {
     const ee = new event.EventEmitter();
    
     process.nextTick(() => {
       ee.emit('myevent', 42);
     });
  
     const [value] = await once(ee, 'myevent');
  
    console.log(value);
    console.log(`Fired`);
  
     const err = new Error('kaboom');
     process.nextTick(() => {
       ee.emit('error', err);
     });
  
     try {
       await once(ee, 'myevent');
     } catch (err) {
       console.log('error happened', err);
     }
   }
  
    // An `AbortSignal` can be used to cancel waiting for the event:
  
     const ee = new event.EventEmitter();
     const ac = "AbortError";
    
     async function foo(emitter, event, signal) {
       try {
         await once(emitter, event, { signal });
         console.log('event emitted!');
       } catch (error) {
         if (error.name === 'AbortError') {
           console.error('Waiting for the event was canceled!');
         } else {
           console.error('There was an error', error.message);
         }
       }
     }
    
    //  foo(ee, 'foo', ac.signal);

    //  we can also apply many events on a single trigger
    function Multi(){
      const emitte=new event.EventEmitter();
      emitte.on('event',()=>{console.log(`event Number 1`)});
      emitte.on('event',()=>{console.log(`event Number 2`)});
      emitte.on('event',()=>{console.log(`event Hamza 3`)});
      console.log(event.listenerCount(emitte,'event'))
      console.log(`Three event Happen`)
    }
    // Multi()


    // listenerCount return a copy of array listener for the event name 
    function Listener(){
      const obj=event.EventEmitter();
      const listener=()=>console.log(`Having Fun With Events `)
      obj.addEventListener('foo',listener);
      event.getEventListeners(obj,'foo')
    } 
    // Listener()

// we can also add one time trigger event Listener 
//  myEE.prependOnceListener('foo', () => console.log('b')); as code 


    // we can also use CallBack functions   
    function removeList(){
      const emitter= new event.EventEmitter();
      const CallBackA=()=>{
        console.log(`call Back Function A`);
        emitter.removeListener('event',callbackB)
      };
      const callbackB=()=>{
        console.log(`Call Back B `)
      }
      emitter.on('event',CallBackA)
      emitter.on('event',callbackB)
      console.log("CallBack")
      // in this example callback A is removinmg the callBack B
      emitter.emit("event")
    }
    // removeList()





    const event=require("events");

const ee=new event.EventEmitter()
function pong(){
  console.log(`Calll ther Pong`)
  console.log(`Calll ther Pong remove also `)
};
ee.on("ping",pong);
ee.once("ping",pong);
ee.removeListener('ping',pong);
ee.emit("ping")
ee.emit("ping")

// we can ALSO set the Max Number of Events on a events and remove all eevnta s we want 

// listeners() return a array  event name included  once any wrapper 

// raw Listiner call each Listiner regester for event 
const hamz= new event.EventEmitter()
hamz.on(`event`,function first(){
  console.log(`Hello First event `)
});
// second
hamz.on("event",function second(arg1,arg2){
  console.log(`event with Parameter ${arg1} and ${arg2} are second Event`)
})
// thired 
hamz.on(`event`,function thired(...arg){
  const parameter=arg.join(`,`)
  console.log(`event thrird fired  value are ${parameter}`)
})
console.log(hamz.listeners(`events`));
hamz.emit(`event`,1,2,3,4,5)

// call all event in order 


// once time event Listiner at the begaining of arary
// * server.prependOnceListener('connection', (stream) => {
