/// <reference types="node" />
export declare class Intake<T> {
    chunkStore: T[];
    private push;
    private readable;
    constructor();
    getReadable(): NodeJS.ReadableStream;
    pushData(chunkData: T): void;
    signalEnd(): void;
}
