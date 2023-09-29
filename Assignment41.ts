function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Create an array of magician's names
const magicianNames: string[] = ["aa", "bb", "cc", "dd"];

// Call make_great() to modify the magician names
make_great(magicianNames);

// Call show_magicians() to display the modified names
show_magicians(magicianNames);
