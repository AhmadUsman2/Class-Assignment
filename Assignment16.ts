
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

console.log("\nGood news! I found a bigger dinner table, So we will have more Guests.");

guests.unshift("Ibrahim")

guests.splice(2,0,"Khan")

guests.push("lala")

for (let members of guests) {
    console.log(`Dear ${members}, you are invited to a dinner at my home`);
    
}

console.log("\nUnfortunately, due to smaller table i can only invite two peoples in the dinner");

let removedGuests1 = guests.pop()
console.log(`\nUnfortunately, ${removedGuests1} sorry I can't invite you to the dinner`);

let removedGuests2 = guests.pop()
console.log(`Unfortunately, ${removedGuests2} sorry I can't invite you to the dinner`);

let removedGuests3 = guests.pop()
console.log(`Unfortunately, ${removedGuests3} sorry I can't invite you to the dinner`);

let removedGuests4 = guests.pop()
console.log(`Unfortunately, ${removedGuests4} sorry I can't invite you to the dinner`);


console.log(guests);




export{}