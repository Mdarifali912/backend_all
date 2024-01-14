const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("mdarifali912 twitter")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at arif website</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send("<h4>arif youtube </h4>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})