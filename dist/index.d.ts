/// <reference types="node" />
import { Transform } from 'stream';
export interface IStreamFunction {
    (stringChunkArg: string): Promise<string>;
}
export declare let createDuplexStream: (funcArg: IStreamFunction) => Transform;
