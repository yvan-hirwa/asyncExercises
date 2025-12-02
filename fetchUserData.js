// Challenge 2: The "Polite" Scraper
// Concept: Throttling / Sequential Requests Problem: You have a list of 5 User IDs: [1, 2, 3, 4, 5]. 
// You need to fetch their details from https://jsonplaceholder.typicode.com/users/ID. 
// Constraint: The API is strict. If you fire all 5 requests at once (using Promise.all), it will ban you. 
// You must wait for User 1 to finish downloading before you even start the request for User 2.

// The Task:

// Write a function processUsersSequentially(userIds).

// It should take an array of IDs.

// Using for await...of, iterate through the IDs.

// Inside the loop, await fetch(...) the user data and log their name.

async function processUsersSequentially(userIds){
    try {
        for (const id of userIds){
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            if(!response.ok)throw new Error(`User ${id} failed to fetch`)
            const userdata = await response.json()
            console.log(`${userdata.name}, ${userdata.email}`)
        }
    } catch (error) {
        console.log(error.message)
    }
}
await processUsersSequentially([1, 2, 3, 4, 5])
