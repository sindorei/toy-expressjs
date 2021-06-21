
export * from './request'
export * from './response'
import * as bodyParser from 'body-parser'
import { Application }  from './application'

export function createApplication() {

    return new Application()
}


