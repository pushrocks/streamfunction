/// <reference types="node" />
import { Transform } from 'stream';
export interface ITruncateFunc {
    (): void;
}
export interface IPipeMoreFunc {
    (pipeObject: any): void;
}
export interface IStreamTools {
    truncate: ITruncateFunc;
    pipeMore: IPipeMoreFunc;
}
export interface IStreamFunction<T, rT> {
    (stringChunkArg: T, toolsArg: IStreamTools): Promise<rT>;
}
export declare let createDuplexStream: <T, rT>(funcArg: IStreamFunction<T, rT>) => Transform;
