let usernames: string[] = ["admin", "user1", "user2", "user3", "user4", "user5"];

if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
        }
    }
}

// To test with an empty list of users, uncomment the following line:
// usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
}
