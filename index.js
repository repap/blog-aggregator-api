const express = require('express')

const app = express()

const PORT = process.env.PORT || 3333

app.get('/', (req, res) => res.send('MOIN MOIN! :)'))

app.listen(PORT, err => err ? console.error(err) : console.log('app is running') )