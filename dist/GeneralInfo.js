var GeneralInfo = /** @class */ (function () {
    function GeneralInfo(userAgent, connection, timing) {
        this.userAgent = userAgent;
        if (connection) {
            this.connection = new Connection(connection.type, connection.effectiveType, connection.downlinkMax, connection.downlink, connection.rtt, connection.saveData);
        }
        if (timing) {
            this.timing = new Timing(timing.domComplete, timing.domContentLoadedEventEnd, timing.domContentLoadedEventStart, timing.domInteractive, timing.loadEventEnd, timing.loadEventStart, timing.redirectCount, timing.unloadEventEnd, timing.unloadEventStart);
        }
    }
    return GeneralInfo;
}());
export default GeneralInfo;
var Connection = /** @class */ (function () {
    function Connection(type, effectiveType, downlinkMax, downlink, rtt, saveData) {
        this.type = type;
        this.effectiveType = effectiveType;
        this.downlinkMax = downlinkMax;
        this.downlink = downlink;
        this.rtt = rtt;
        this.saveData = saveData;
    }
    return Connection;
}());
var Timing = /** @class */ (function () {
    function Timing(domComplete, domContentLoadedEventEnd, domContentLoadedEventStart, domInteractive, loadEventEnd, loadEventStart, redirectCount, unloadEventEnd, unloadEventStart) {
        this.domComplete = domComplete;
        this.domContentLoadedEventEnd = domContentLoadedEventEnd;
        this.domContentLoadedEventStart = domContentLoadedEventStart;
        this.domInteractive = domInteractive;
        this.loadEventEnd = loadEventEnd;
        this.loadEventStart = loadEventStart;
        this.redirectCount = redirectCount;
        this.unloadEventEnd = unloadEventEnd;
        this.unloadEventStart = unloadEventStart;
    }
    return Timing;
}());
//# sourceMappingURL=GeneralInfo.js.map