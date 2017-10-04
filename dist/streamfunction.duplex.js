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
exports.createDuplexStream = function (funcArg, endFuncArg, optionsArg = {
        objectMode: false,
        readableObjectMode: true,
        writableObjectMode: true
    }) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtZnVuY3Rpb24uZHVwbGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc3RyZWFtZnVuY3Rpb24uZHVwbGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUErQnhDLFFBQUEsa0JBQWtCLEdBQUcsVUFDOUIsT0FBOEIsRUFDOUIsVUFBbUMsRUFDbkMsYUFBNkI7UUFDM0IsVUFBVSxFQUFFLEtBQUs7UUFDakIsa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixrQkFBa0IsRUFBRSxJQUFJO0tBQ3pCO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFVBQVUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzFELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQTtRQUNyQixJQUFJLEtBQUssR0FBaUI7WUFDeEIsUUFBUSxFQUFFO2dCQUNSLFNBQVMsR0FBRyxJQUFJLENBQUE7Z0JBQ2hCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDaEIsQ0FBQztZQUNELFFBQVEsRUFBRSxDQUFDLFVBQVU7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkIsQ0FBQztTQUNGLENBQUE7UUFDRCxJQUFJLFlBQVksR0FBRztZQUNqQixJQUFJLFdBQVcsR0FBTyxNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUE7WUFDdkIsQ0FBQztRQUNILENBQUMsQ0FBQSxDQUFBO1FBQ0QsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsRUFBRSxVQUFVLEVBQUU7UUFDYixJQUFJLEtBQUssR0FBaUI7WUFDeEIsUUFBUSxFQUFFO2dCQUNSLEVBQUUsRUFBRSxDQUFBO1lBQ04sQ0FBQztZQUNELFFBQVEsRUFBRSxDQUFDLE9BQU87Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDcEIsQ0FBQztTQUNGLENBQUE7UUFDRCxJQUFJLFlBQVksR0FBRztZQUNqQixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksTUFBTSxHQUFHLE1BQU0sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25CLENBQUM7WUFDRCxFQUFFLEVBQUUsQ0FBQTtRQUNOLENBQUMsQ0FBQSxDQUFBO1FBQ0QsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=