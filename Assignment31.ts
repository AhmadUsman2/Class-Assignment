// Current usernames
let current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];

// New usernames
let new_users: string[] = ["User3a", "User6", "user7", "User8", "user9"];

// Convert current usernames to lowercase for case-insensitive comparison
let lowercase_current_users: string[] = current_users.map(username => username.toLowerCase());

for (let i = 0; i < new_users.length; i++) {
    let new_username = new_users[i];
    let lowercase_new_username = new_username.toLowerCase(); // Convert to lowercase

    if (lowercase_current_users.includes(lowercase_new_username)) {
        console.log(`Sorry, '${new_username}' is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations, '${new_username}' is available!`);
        // Add the new username to the current usernames list
        current_users.push(new_username);
        lowercase_current_users.push(lowercase_new_username);
    }
}
