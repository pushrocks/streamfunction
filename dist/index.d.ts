/// <reference types="node" />
import { Transform } from 'stream';
export interface ITruncateFunc {
    (): void;
}
export interface IStreamTools {
    truncate: ITruncateFunc;
}
export interface IStreamFunction {
    (stringChunkArg: string, toolsArg: IStreamTools): Promise<string>;
}
export declare let createDuplexStream: (funcArg: IStreamFunction) => Transform;
