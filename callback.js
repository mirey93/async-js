const getTodo = callback => {
    setTimeout(() => {
        callback( { text: 'Complete Code Example' } )
    }, 2000)
}

getTodo( todo => {
    console.timeLog()
    console.log(todo.text)
})
console.time()
console.timeLog()
console.log("This is the first output")
