/// <reference types="node" />
import { Readable } from 'stream';
export declare class Intake<T> {
    readable: Readable;
    getReadable(): Readable;
    pushData(chunkData: T): void;
    signalEnd(): void;
}
