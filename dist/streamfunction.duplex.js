"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./streamfunction.plugins");
exports.createDuplexStream = function (funcArg, endFuncArg) {
    return plugins.through2.obj(function (chunk, enc, cb) {
        let truncated = false;
        let tools = {
            truncate: () => {
                truncated = true;
                cb(null, null);
            },
            pipeMore: (pipeObject) => {
                this.push(pipeObject);
            }
        };
        let asyncWrapper = () => __awaiter(this, void 0, void 0, function* () {
            let resultChunk = yield funcArg(chunk, tools);
            if (!truncated) {
                cb(null, resultChunk);
            }
        });
        asyncWrapper();
    }, function (cb) {
        let tools = {
            truncate: () => {
                cb();
            },
            pipeMore: (pushArg) => {
                this.push(pushArg);
            }
        };
        let asyncWrapper = () => __awaiter(this, void 0, void 0, function* () {
            if (endFuncArg) {
                let result = yield endFuncArg(tools);
                this.push(result);
            }
            cb();
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtZnVuY3Rpb24uZHVwbGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc3RyZWFtZnVuY3Rpb24uZHVwbGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUF5QnhDLFFBQUEsa0JBQWtCLEdBQUcsVUFBaUIsT0FBOEIsRUFBRSxVQUFtQztJQUNsSCxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDbEQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFBO1FBQ3JCLElBQUksS0FBSyxHQUFpQjtZQUN4QixRQUFRLEVBQUU7Z0JBQ1IsU0FBUyxHQUFHLElBQUksQ0FBQTtnQkFDaEIsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNoQixDQUFDO1lBQ0QsUUFBUSxFQUFFLENBQUMsVUFBVTtnQkFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN2QixDQUFDO1NBQ0YsQ0FBQTtRQUNELElBQUksWUFBWSxHQUFHO1lBQ2pCLElBQUksV0FBVyxHQUFPLE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUNqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQTtZQUN2QixDQUFDO1FBQ0gsQ0FBQyxDQUFBLENBQUE7UUFDRCxZQUFZLEVBQUUsQ0FBQTtJQUNoQixDQUFDLEVBQUUsVUFBVSxFQUFFO1FBQ2IsSUFBSSxLQUFLLEdBQWlCO1lBQ3hCLFFBQVEsRUFBRTtnQkFDUixFQUFFLEVBQUUsQ0FBQTtZQUNOLENBQUM7WUFDRCxRQUFRLEVBQUUsQ0FBQyxPQUFPO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3BCLENBQUM7U0FDRixDQUFBO1FBQ0QsSUFBSSxZQUFZLEdBQUc7WUFDakIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQixDQUFDO1lBQ0QsRUFBRSxFQUFFLENBQUE7UUFDTixDQUFDLENBQUEsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=