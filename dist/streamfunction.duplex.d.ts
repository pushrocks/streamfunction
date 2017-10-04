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
export interface IStreamEndFunction<rT> {
    (toolsArg: IStreamTools): Promise<rT>;
}
export interface IStreamOptions {
    objectMode: boolean;
}
export declare let createDuplexStream: <T, rT>(funcArg: IStreamFunction<T, rT>, endFuncArg?: IStreamEndFunction<rT>, optionsArg?: IStreamOptions) => Transform;
