import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
    _transform(chunck, encoding, callback){
        const Transformed = Number(chunck.toString()) * -1

        console.log(Transformed)
        
        callback(null, Buffer.from(String(Transformed)))
    }
}

const server = http.createServer(async(req,res) => {


    console.log(fullStreamContent)

    return res.end(fullStreamContent)
})

server.listen(3334)
