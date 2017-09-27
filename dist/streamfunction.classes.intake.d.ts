/// <reference types="node" />
export declare class Intake<T> {
    chunkStore: T[];
    push: any;
    readable: NodeJS.ReadableStream;
    constructor();
    getReadable(): NodeJS.ReadableStream;
    pushData(chunkData: T): void;
    signalEnd(): void;
}
