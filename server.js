const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'dj jazzy jeff': {
        'age': 49,
        'birthName': 'Jeff',
        'birthLocation': 'Bel Aire'
    },
    'eminem': {
        'age': 39,
        'birthName': 'Marshall Mathers',
        'birthLocation': '8 Mile, Michigan'
    },
    'snoop dogg': {
        'age': 69,
        'birthName': 'God Poons',
        'birthLocation': 'Long Beach, CA'
    },
    'unknown': {
        'age': '??',
        'birthName': 'Who knows',
        'birthLocation': 'No idea'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name
    if (rappers[rapperName]){
        response.json(rappers[rapperName])
    }
    else{
        response.json(rappers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! Betta go catch it!`)
})