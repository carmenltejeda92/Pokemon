const express = require('express')
const app = express()
const pokemen = require('./models/pokemon')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// app.use(express.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})


app.get('/pokemon', (req, res)=>{
    res.render('Index', {pokemon: pokemen})
})













app.listen(3000, ()=>{
    console.log('listening ..')
})