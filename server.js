const express = require('express')
const app = express()
const pokemen = require('./models/pokemon')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended:true}))
app.use((req, res, next)=>{
    console.log('I run for all routes')
    next()
})


app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!')
})


app.get('/pokemon', (req, res)=>{
    res.render('Index', {pokemon: pokemen})
})


app.get('/pokemon/new', (req, res)=>{
    res.render('New')
})



app.post('/pokemon',(req, res)=>{
    const handleSubmit = (e)=>{
        e.preventDefault()
        pokemen.push()
    }
    console.log(req.body)
    res.redirect('/pokemon')
})

app.get('/pokemon/:shownumber', (req, res)=>{
    res.render('Show', {pokemon: pokemen[req.params.shownumber]})
})



app.listen(3000, ()=>{
    console.log('listening ..')
})