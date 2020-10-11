import * as plugins from './streamfunction.plugins';

import { Stream, Transform } from 'stream';

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
  objectMode?: boolean;
  readableObjectMode?: boolean;
  writableObjectMode?: boolean;
}

export let createDuplexStream = <T, rT>(
  funcArg: IStreamFunction<T, rT>,
  endFuncArg?: IStreamEndFunction<rT>,
  optionsArg: IStreamOptions = {
    objectMode: false,
    readableObjectMode: true,
    writableObjectMode: true,
  }
) => {
  return plugins.through2(
    optionsArg,
    function (chunk, enc, cb) {
      let truncated = false;
      const tools: IStreamTools = {
        truncate: () => {
          truncated = true;
          cb(null, null);
        },
        pipeMore: (pipeObject) => {
          this.push(pipeObject);
        },
      };
      const asyncWrapper = async () => {
        const resultChunk: rT = await funcArg(chunk, tools);
        if (!truncated) {
          cb(null, resultChunk);
        }
      };
      asyncWrapper().catch((err) => {
        console.log(err);
      });
    },
    function (cb) {
      const tools: IStreamTools = {
        truncate: () => {
          cb();
        },
        pipeMore: (pushArg) => {
          this.push(pushArg);
        },
      };
      const asyncWrapper = async () => {
        if (endFuncArg) {
          const result = await endFuncArg(tools);
          this.push(result);
        }
        cb();
      };
      asyncWrapper().catch((err) => {
        console.log(err);
      });
    }
  );
};
