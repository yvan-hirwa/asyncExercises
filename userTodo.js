function fetchUserTodos(user, todo ){
    const users = fetch(user).then(response => {
        if(!response.ok){
            throw new Error('Users Not Fetched')
        }
        return response.json()
    })
    const todos = fetch(todo).then(response => {
        if(!response.ok){
            throw new Error('Todos Not Fetched')
        }
        return response.json()
    })
return Promise.all([users, todos]).then(console.log).catch(error => `The following error occurred while fetching: ${error}`)
}


// fetchUserTodos('https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/todos')




// async function fetchUserTodosAsync(user, todo){
//     const users = await fetch(user)
//     const todos = await fetch(todo)

//     return Promise.all([users, todos]).the
// }