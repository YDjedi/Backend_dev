const express = require('express')
const app = express()
const path = require('path')
const {ConnectToMongo} = require('./db')

app.use(express.json())

app.use('/api/users', require('./routes/users'))

ConnectToMongo()
.then(()=>{
    app.listen(5000, () => {
        console.log('backend is listening on port 5000')
    })
})
.catch(()=>{
    console.log('Database not connected')
})
