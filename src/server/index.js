const dotenv = require('dotenv')
dotenv.config()
const fetch = require('node-fetch')

var path = require('path')
const express = require('express')
 const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

// setting up the api 



// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

const apiKey = process.env.KEY
const url = "https://api.meaningcloud.com/sentiment-2.1"
console.log("apiKey ---- > " +apiKey)
app.post('/api', async function(req, res) {
    console.log("req.body ---- > " +req.body.url)
    const input = req.body.url;
    console.log("input url ---- > " + input);
    const apiUrl = `${url}?key=${apiKey}&url=${input}&lang=en`

    try {const response = await fetch(apiUrl)
        console.log("response ---- > " + response)
        const data = await response.json()
        console.log("response data  ---- > " + data)
        res.send(data)}
    catch(error) {
        console.log('error ---- >', error)
    }
})
