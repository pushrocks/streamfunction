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
exports.createDuplexStream = (funcArg) => {
    return plugins.through2.obj((chunk, enc, cb) => {
        let asyncWrapper = () => __awaiter(this, void 0, void 0, function* () {
            let resultChunk = yield funcArg(chunk);
            cb(null, resultChunk);
        });
        asyncWrapper();
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBT3hDLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxPQUF3QjtJQUN2RCxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDekMsSUFBSSxZQUFZLEdBQUc7WUFDakIsSUFBSSxXQUFXLEdBQVcsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDOUMsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUEsQ0FBQTtRQUNELFlBQVksRUFBRSxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=