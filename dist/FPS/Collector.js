var Collector = /** @class */ (function () {
    function Collector() {
        this.buffer = [];
    }
    Collector.prototype.push = function (time, fps) {
        this.buffer.push([time, fps]);
    };
    Collector.prototype.getMeasures = function () {
        return this.buffer;
    };
    return Collector;
}());
export default Collector;
//# sourceMappingURL=Collector.js.map