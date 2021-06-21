/// <reference types="node" />
import EventEmitter from 'events';
import * as http from 'http';
export declare class Application extends EventEmitter {
    constructor();
    init(): void;
    listen(...agrs: any[]): http.Server;
    callback(): void;
}
