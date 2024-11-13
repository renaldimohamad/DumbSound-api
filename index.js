const express = require('express') // require ('express') kan mengambil package express dari node_modules dan disimpan di variabel express
const dotenv = require('dotenv')

// initialize dotenv
dotenv.config()

const app = express()
const port = process.env.PORT || 3000 // ini nama key nya key yang kita simpan di dalam file .env


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})