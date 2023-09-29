function make_sandwich(...items: string[]) {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (const item of items) {
        console.log(item);
    }
    console.log("Bread");
    console.log("Enjoy your sandwich!");
}

// Call the function with different numbers of arguments
make_sandwich("Lettuce", "Tomato", "Cheese");
make_sandwich("beef", "peri peri");
make_sandwich("Peanut Butter", "Jelly");
