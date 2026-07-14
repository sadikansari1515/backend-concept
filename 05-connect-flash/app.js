const express = require('express');
const app = express();
const flash = require('connect-flash');


app.use(flash())

app.get('/', (req, res, next) => {
    req.flash('info', 'Flash is back!')
    res.redirect('/message')
})


app.get('/message', (req, res, next) => {
    res.send(req.flash('info'))
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})