// storing name in lower case

let myName = "Ahmad Usman"

// printing name in lower case

let nameInLowerCase = myName.toLowerCase()
console.log (nameInLowerCase)

// printing name in Upper Case 

let nameInUpperCase = myName.toUpperCase()
console.log(nameInUpperCase)

let mane = "coder singh";
let newName = "";

const words = mane.split(" ");
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalizedWord = word.charAt(0).toUpperCase() + word.substring(1);
    
    if (i > 0) {
        newName += " ";
    }
    newName += capitalizedWord;
}

console.log(newName);
