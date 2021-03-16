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
//TODO: need this
//! fix
//? is this correct

getTodo()
    .then(todo => {
        console.log(todo.text)
    })
    .catch(error => {
        console.log(error.text)
    })
console.time()
console.timeLog()
console.log("This is the first line.")

console.log('hello');