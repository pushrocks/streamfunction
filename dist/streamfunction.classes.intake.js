"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./streamfunction.plugins");
class Intake {
    constructor() {
        this.chunkStore = [];
        this.readable = plugins.from2.obj((size, next) => {
            let localChunkStore = this.chunkStore;
            this.chunkStore = [];
            for (let chunkItem of localChunkStore) {
                next(null, chunkItem);
            }
        });
        this.push = (err, chunkArg) => {
            this.chunkStore.push(chunkArg);
        };
    }
    getReadable() {
        return this.readable;
    }
    pushData(chunkData) {
        this.push(null, chunkData);
    }
    signalEnd() {
        this.push(null, null);
    }
}
exports.Intake = Intake;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtZnVuY3Rpb24uY2xhc3Nlcy5pbnRha2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zdHJlYW1mdW5jdGlvbi5jbGFzc2VzLmludGFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9EQUFtRDtBQUduRDtJQVdFO1FBVkEsZUFBVSxHQUFRLEVBQUUsQ0FBQTtRQUVwQixhQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSTtZQUN0QyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1lBQ3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFDdkIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO1FBR0EsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDdEIsQ0FBQztJQUVELFFBQVEsQ0FBRSxTQUFZO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQztDQUNGO0FBNUJELHdCQTRCQyJ9