import EventEmitter from 'events'
import * as http  from 'http'

export class Application extends EventEmitter {
    constructor() {
        super()
    }
    init() {

    }
    
    public listen(...agrs: any[]): http.Server {
        const server = http.createServer(this.callback)
        return server.listen(...agrs)
    }

    public callback() {

    }
}
