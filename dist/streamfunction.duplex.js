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
exports.createDuplexStream = function (funcArg) {
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
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtZnVuY3Rpb24uZHVwbGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc3RyZWFtZnVuY3Rpb24uZHVwbGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUFxQnhDLFFBQUEsa0JBQWtCLEdBQUcsVUFBaUIsT0FBOEI7SUFDN0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ2xELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQTtRQUNyQixJQUFJLEtBQUssR0FBaUI7WUFDeEIsUUFBUSxFQUFFO2dCQUNSLFNBQVMsR0FBRyxJQUFJLENBQUE7Z0JBQ2hCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDaEIsQ0FBQztZQUNELFFBQVEsRUFBRSxDQUFDLFVBQVU7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDdkIsQ0FBQztTQUNGLENBQUE7UUFDRCxJQUFJLFlBQVksR0FBRztZQUNqQixJQUFJLFdBQVcsR0FBTyxNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUE7WUFDdkIsQ0FBQztRQUNILENBQUMsQ0FBQSxDQUFBO1FBQ0QsWUFBWSxFQUFFLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==