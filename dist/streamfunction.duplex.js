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
exports.createDuplexStream = function (funcArg, endFuncArg, optionsArg = { objectMode: true }) {
    return plugins.through2(optionsArg, function (chunk, enc, cb) {
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
        asyncWrapper().catch(err => {
            console.log(err);
        });
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
        asyncWrapper().catch(err => {
            console.log(err);
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtZnVuY3Rpb24uZHVwbGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc3RyZWFtZnVuY3Rpb24uZHVwbGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUE2QnhDLFFBQUEsa0JBQWtCLEdBQUcsVUFDOUIsT0FBOEIsRUFDOUIsVUFBbUMsRUFDbkMsYUFBNkIsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDO0lBRS9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxVQUFVLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUMxRCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFDckIsSUFBSSxLQUFLLEdBQWlCO1lBQ3hCLFFBQVEsRUFBRTtnQkFDUixTQUFTLEdBQUcsSUFBSSxDQUFBO2dCQUNoQixFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ2hCLENBQUM7WUFDRCxRQUFRLEVBQUUsQ0FBQyxVQUFVO2dCQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3ZCLENBQUM7U0FDRixDQUFBO1FBQ0QsSUFBSSxZQUFZLEdBQUc7WUFDakIsSUFBSSxXQUFXLEdBQU8sTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDZixFQUFFLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1lBQ3ZCLENBQUM7UUFDSCxDQUFDLENBQUEsQ0FBQTtRQUNELFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLEVBQUUsVUFBVSxFQUFFO1FBQ2IsSUFBSSxLQUFLLEdBQWlCO1lBQ3hCLFFBQVEsRUFBRTtnQkFDUixFQUFFLEVBQUUsQ0FBQTtZQUNOLENBQUM7WUFDRCxRQUFRLEVBQUUsQ0FBQyxPQUFPO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3BCLENBQUM7U0FDRixDQUFBO1FBQ0QsSUFBSSxZQUFZLEdBQUc7WUFDakIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLE1BQU0sR0FBRyxNQUFNLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNuQixDQUFDO1lBQ0QsRUFBRSxFQUFFLENBQUE7UUFDTixDQUFDLENBQUEsQ0FBQTtRQUNELFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSJ9