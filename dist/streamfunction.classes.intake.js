"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
class Intake {
    constructor() {
        this.readable = new stream_1.Readable();
    }
    getReadable() {
        return this.readable;
    }
    pushData(chunkData) {
        this.readable.push(chunkData);
    }
    signalEnd() {
        this.readable.push(null);
    }
}
exports.Intake = Intake;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtZnVuY3Rpb24uY2xhc3Nlcy5pbnRha2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zdHJlYW1mdW5jdGlvbi5jbGFzc2VzLmludGFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1DQUFpQztBQUVqQztJQUFBO1FBQ0UsYUFBUSxHQUFHLElBQUksaUJBQVEsRUFBRSxDQUFBO0lBYTNCLENBQUM7SUFYQyxXQUFXO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDdEIsQ0FBQztJQUVELFFBQVEsQ0FBRSxTQUFZO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDMUIsQ0FBQztDQUNGO0FBZEQsd0JBY0MifQ==