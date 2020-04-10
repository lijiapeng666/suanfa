const http = require('http')
const url = require('url')
const express = require('express')
const app = express()
    // http.createServer((req, res) => {

//     let Url = url.parse(req.url, true)
//     let func = Url.query.callback
//     let massage = "Today im not eat"
//     res.writeHead(200, {
//         "Content-Type": "text/plain;charset=UTF8"
//     })
//     res.write(`${func}("${massage}")`)
//     res.end()

// }).listen(3001)

app.get('/', (req, res) => {
    let message = "今天天气不错"
    let func = req.query.callback
    console.log(func)
    res.end(`${func}("${message}")`)
}).listen(3001)