const getTodo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if (!error)
                resolve({ text: 'Complete Code example' })
            else
                reject({ text: 'Error occured' })
        
        }, 2000)
    })
}

async function fetchTodo () {
    try{
        const todo = await getTodo()  
        return todo
    }
    catch{
        console.log("Error occured")
    }
    
}

fetchTodo()
.then(todo => {
    console.log(todo.text)
})
.catch(() => console.log("Error occured"))



