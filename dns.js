//dns module
// ..dns


/* Mostaly used for Dns.lookUp 
*/
const dns=require("dns");
// console.log(dns) // all methods 

function ipofServer(name){
    dns.lookup(`${name}`, (err, address, family) => {
     console.log('address: %j family: IPv%s', address, family);
  });}

  ipofServer(`quran.com`) // ip of servers
  ipofServer(`yahoo.com`) 

  
// function provide more information of revervse of back servers of the client
function moreinfo(site){
    dns.resolve4(`${site}`, (err, addresses) => {
      if (err) throw err;

      console.log(`addresses: ${JSON.stringify(addresses)}`);

      addresses.forEach((a) => {
        dns.reverse(a, (err, hostnames) => {
          if (err) {
            throw err;
          }
          console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
        });
      });
    });}

    moreinfo(`quran.com`)

// function retrun ipv6 address
function ipv6(site){
    const options = {
      family: 6,
      hints: dns.ADDRCONFIG | dns.V4MAPPED,
    };
    dns.lookup(`${site}`, options, (err, address, family) =>
      console.log('address: %j family: IPv%s', address, family));
    // address: "2606:2800:220:1:248:1893:25c8:1946" family: IPv6
    
    // When options.all is true, the result will be an Array.
    options.all = true;
    dns.lookup('example.com', options, (err, addresses) =>
      console.log('addresses: %j', addresses));
}
ipv6(`quran.com`)    