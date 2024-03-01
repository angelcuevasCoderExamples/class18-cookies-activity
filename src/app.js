const express = require('express');
const port = 8080; 
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');

const app = express();

/** body and query */
app.use(express.json())
app.use(express.urlencoded({extended:true}))

/** handlebars */
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

/** public folder */
app.use(express.static(`${__dirname}/public`))

/**cookies */
app.use(cookieParser())

app.get('/', (req, res)=>{
    res.render('cookies')
})

app.post('/cookies', (req, res)=>{
    const data = req.body; 
    res.cookie('coderCookie',data,{maxAge: 120*1000})
    res.send({status:'success', message:'cookies has been set'})
})

app.get('/cookies',(req, res)=>{
    const cookies = req.cookies;
    res.send({status:'success', payload: cookies })
})


app.listen(port, ()=>console.log(`up and running on port ${port}`))