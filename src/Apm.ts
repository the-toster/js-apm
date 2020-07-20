import GeneralInfo from "./GeneralInfo";

export default class Apm {
    readonly navigator: Navigator;
    readonly performance: Performance;

    constructor(window: Window) {
        this.navigator = window.navigator;
        this.performance = window.performance;
    }

    getGeneralInfo(): GeneralInfo {
        let perf: PerformanceNavigationTiming | undefined;
        perf = this.performance.getEntriesByName('navigation')[0] as (PerformanceNavigationTiming | undefined);

        return new GeneralInfo(
            this.navigator.userAgent,
            this.navigator.connection,
            perf
        );
    }


}