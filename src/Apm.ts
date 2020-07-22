import GeneralInfo from "./GeneralInfo";
import {RequestAnimationFrame} from "./FPS/FpsMeter";

export default class Apm {
    readonly navigator: Navigator;
    readonly performance: Performance;
    readonly requestAnimationFrame: RequestAnimationFrame;

    constructor(window: WindowInterface) {
        this.navigator = window.navigator;
        this.performance = window.performance;
        this.requestAnimationFrame = window.requestAnimationFrame;
    }

    getGeneralInfo(): GeneralInfo {
        const perf: PerformanceNavigationTiming | undefined =
            this.performance.getEntriesByType('navigation')[0] as (PerformanceNavigationTiming | undefined);

        return new GeneralInfo(
            this.navigator.userAgent,
            this.navigator.connection,
            perf
        );
    }

    startFpsMeasurement(): void {

    }

}

interface WindowInterface {
    readonly navigator: Navigator,
    readonly performance: Performance,
    readonly requestAnimationFrame: RequestAnimationFrame
}

