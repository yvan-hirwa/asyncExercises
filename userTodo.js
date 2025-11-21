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
return Promise.all([users, todos])
        .then(([users, todos]) => {
           return users.map(user =>{
                const todo = todos.filter(t => t.userId === user.id)

                return{
                    id: user.id,
                    name: user.name,
                    todo: todo.map(x=> {
                        const {userId, completed} = x
                        return{ userId, completed}
                    })

                }
            })
            
        })
        .catch(error => console.log(`The following error occurred while fetching: ${error}`))
}


fetchUserTodos('https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/todos')
        .then(result => console.log(result))




async function fetchUserTodosAsync(user, todo){
    
    try {
        const [userRes, todoRes] = await Promise.all([fetch(user), fetch(todo)])

        if(!userRes.ok) throw new Error('User failed to fetch')
        if(!todoRes.ok) throw new Error('Todo failed to fetch')

        const users = await userRes.json()    
        const todos = await todoRes.json()
        
        return users.map(user =>{
            const userTodos = todos.filter(t => user.id === t.userId)

            return{
                id : user.id,
                name : user.name,
                todo: userTodos.map(todoObj => {
                    const {userId, completed}=todoObj

                    return {userId, completed}
                })
            }
        })
        
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

const res = await fetchUserTodosAsync('https://jsonplaceholder.typicode.com/users',
                                 'https://jsonplaceholder.typicode.com/todos')

console.log(res)