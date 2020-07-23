var FpsMeter = /** @class */ (function () {
    function FpsMeter(collector) {
        this.collector = collector;
        this.last = 0;
        this.enableMeasure = false;
    }
    FpsMeter.prototype.stopMeasure = function () {
        this.enableMeasure = false;
    };
    FpsMeter.prototype.startMeasure = function (frameRequest) {
        var _this = this;
        this.enableMeasure = true;
        frameRequest(function (time) {
            _this.tick(time);
            if (_this.enableMeasure) {
                _this.startMeasure(frameRequest);
            }
        });
    };
    FpsMeter.prototype.tick = function (time) {
        var deltaT = time - this.last;
        var instantFps = Math.round(1000 / deltaT);
        this.last = time;
        this.collector.push(time, instantFps);
    };
    return FpsMeter;
}());
export default FpsMeter;
//# sourceMappingURL=FpsMeter.js.map