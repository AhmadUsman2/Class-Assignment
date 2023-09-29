let alien_color: string = 'blue'; // Assign a value that doesn't match any condition

// Version that fails the if test (no output)
if (alien_color === 'green') {
    // This block will not execute because alien_color is 'blue', not 'green'
    console.log("This message will not be displayed.");
}

// Version that passes the if test
if (alien_color === 'red') {
    console.log("Congratulations! You just earned 5 points for shooting down a red alien.");
}
