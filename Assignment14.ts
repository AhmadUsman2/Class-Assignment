
let guests = ["Ahmad","Ali","Ayan"]

console.log("Original Guest List");
for (let members of guests ) {
   console.log(`Dear ${members}, you are invited to a dinner at my home`);
   
}

let refusedGuest = guests.pop()
console.log(`Unfortunately, ${refusedGuest} can't make it to the dinner`);

let addedGuest = "Bilal"
guests.push(addedGuest)
console.log("\n Updated Guest List!");
for (let members of guests ) {
   console.log(`Dear ${members}, you are invited to a dinner at my home`);
   
}


export{}