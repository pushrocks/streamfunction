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
            this.push = next;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtZnVuY3Rpb24uY2xhc3Nlcy5pbnRha2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zdHJlYW1mdW5jdGlvbi5jbGFzc2VzLmludGFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9EQUFtRDtBQUduRDtJQVlFO1FBWEEsZUFBVSxHQUFRLEVBQUUsQ0FBQTtRQUVaLGFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJO1lBQzlDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUE7WUFDcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUN2QixDQUFDO1lBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUE7UUFHQSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVE7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN0QixDQUFDO0lBRUQsUUFBUSxDQUFFLFNBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDO0NBQ0Y7QUE3QkQsd0JBNkJDIn0=