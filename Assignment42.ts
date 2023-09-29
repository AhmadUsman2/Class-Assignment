function make_great1(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

function show_magicians1(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicianNames1: string[] = ["aa", "bb", "cc", "dd"];
const greatMagicians = make_great1([...magicianNames1]); // Create a copy of the original array

// Show the original magicians' names
console.log("Original Magicians:");
show_magicians1(magicianNames1);

// Show the magicians with "the Great" added
console.log("\nGreat Magicians:");
show_magicians1(greatMagicians);
