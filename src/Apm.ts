import GeneralInfo from "./GeneralInfo";

export default class Apm {
    readonly navigator: Navigator;
    readonly performance: Performance;

    constructor(window: WindowInterface) {
        this.navigator = window.navigator;
        this.performance = window.performance;
    }

    getGeneralInfo(): GeneralInfo {
        if ('getEntriesByType' in this.performance) {
            const perf: PerformanceNavigationTiming | undefined =
                this.performance.getEntriesByType('navigation')[0] as (PerformanceNavigationTiming | undefined);

            return new GeneralInfo(
                this.navigator.userAgent,
                this.navigator.connection,
                perf
            );
        }
        return new GeneralInfo(this.navigator.userAgent, this.navigator.connection)

    }
}

interface WindowInterface {
    readonly navigator: Navigator,
    readonly performance: Performance,
}