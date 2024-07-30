import http  from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if ( method === 'GET' && url ==='/users') {
        return res
        .setHeader('Contenty-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if ( method === 'POST' && url ==='/users') {
        users.push({
            name: 'gabgi',
            email:'gimas@dev.com',
            age: 22,
        })

        return res.writeHead(201).end();
    }

    return res.writeHead(404).end('Not Found')
})

server.listen(3333)