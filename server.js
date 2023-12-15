const express = require('express')
const app = express()


app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})



app.get('/pokemon', (req, res)=>{
    res.send()
})
















app.listen(3000, ()=>{
    console.log('listening ..')
})