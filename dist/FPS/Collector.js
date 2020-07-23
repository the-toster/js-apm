var Collector = /** @class */ (function () {
    function Collector() {
        this.buffer = [];
        this.cursor = -1;
        this.last = 0;
    }
    Collector.prototype.push = function (time, val) {
        if (val !== this.last
            || this.cursor < 1
            || val !== this.buffer[this.cursor - 1][1]) {
            this.addToBuffer(time, val);
            return;
        }
        this.buffer[this.cursor][0] = time;
    };
    Collector.prototype.addToBuffer = function (time, val) {
        this.buffer.push([time, val]);
        this.last = val;
        this.cursor++;
    };
    Collector.prototype.getMeasures = function () {
        return this.buffer;
    };
    return Collector;
}());
export default Collector;
//# sourceMappingURL=Collector.js.map