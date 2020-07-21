import GeneralInfo from "./GeneralInfo";
var Apm = /** @class */ (function () {
    function Apm(window) {
        this.navigator = window.navigator;
        this.performance = window.performance;
    }
    Apm.prototype.getGeneralInfo = function () {
        var perf = this.performance.getEntriesByType('navigation')[0];
        return new GeneralInfo(this.navigator.userAgent, this.navigator.connection, perf);
    };
    return Apm;
}());
export default Apm;
//# sourceMappingURL=Apm.js.map