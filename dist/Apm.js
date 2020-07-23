import GeneralInfo from "./GeneralInfo";
import FpsMeter from "./FPS/FpsMeter";
import Collector from "./FPS/Collector";
var Apm = /** @class */ (function () {
    function Apm(window) {
        this.navigator = window.navigator;
        this.performance = window.performance;
        this.requestAnimationFrame = window.requestAnimationFrame;
        this.fpsCollector = new Collector();
        this.fpsMeter = new FpsMeter(this.fpsCollector);
    }
    Apm.prototype.getGeneralInfo = function () {
        var perf = this.performance.getEntriesByType('navigation')[0];
        return new GeneralInfo(this.navigator.userAgent, this.navigator.connection, perf);
    };
    Apm.prototype.startFpsMeasure = function () {
        this.fpsMeter.startMeasure(this.requestAnimationFrame);
    };
    Apm.prototype.stopFpsMeasure = function () {
        this.fpsMeter.stopMeasure();
    };
    Apm.prototype.getFPS = function () {
        return this.fpsCollector.getMeasures();
    };
    return Apm;
}());
export default Apm;
//# sourceMappingURL=Apm.js.map