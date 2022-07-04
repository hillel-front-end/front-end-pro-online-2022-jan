const fs = require('fs')
const express = require('express')
const app = express()
const port = 7676

const user_1 = {name: 'User 1'}


app
    .all('/*', (req, res) => {
        const path = `./mock${req.originalUrl}/${req.method.toLowerCase()}.json`;
        console.log(req.method, path);
        fs.readFile(path, 'utf8', (err, data) => {
            if(err) {
                console.error(err)

                res.send('No mock data.')
                return;
            }

            res.json(JSON.parse(data))
        })
    })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})