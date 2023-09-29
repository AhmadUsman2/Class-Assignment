let PlacetoVisit:string[]= ["Makkah","Madina","Amsterdam","switzerland","male island"]

console.log("Original Order");

console.log(PlacetoVisit);

console.log("\nAlphabetical Order");

let sortedAlphabetically = PlacetoVisit.sort();

console.log(sortedAlphabetically);

console.log("\nOriginal Order");

console.log(PlacetoVisit);

let reverseAlphabetically = PlacetoVisit.sort((a,b)=> b.localeCompare(a))

console.log("\n reverseAlphabetically");

console.log(reverseAlphabetically);

console.log("\nOriginal Order");

console.log(PlacetoVisit);

console.log("\n reverseOrder");

let reverseOrder = PlacetoVisit.reverse();

console.log("\nOriginal Order");

console.log(PlacetoVisit);

console.log("\n reverseOrderAgain");

let reverseOrderAgain = PlacetoVisit.reverse();

console.log("\nOriginal Order");

console.log(PlacetoVisit);

PlacetoVisit.sort();
console.log("\nSorted in alphabetical order (original list changed):");
console.log(PlacetoVisit);

PlacetoVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order (original list changed):");
console.log(PlacetoVisit);