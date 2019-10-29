const express = require('express')

const app = express()

const PORT = process.env.PORT || 3333

app.get('/', (req, res) => res.send('MOIN MOIN! :)'))
app.get('/test', (req, res) => res.send('MOIN MOIN! Das ist ein Test! :)'))
app.get('/whup', (req, res) => res.send('WHUP, WHUP! :D :)'))

app.listen(PORT, err => err ? console.error(err) : console.log('app is running') )