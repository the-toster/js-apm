import GeneralInfo from "./GeneralInfo";
import FpsMeter, {RequestAnimationFrame} from "./FPS/FpsMeter";
import Collector, {Measure} from "./FPS/Collector";

export default class Apm {
    readonly navigator: Navigator;
    readonly performance: Performance;
    readonly requestAnimationFrame: RequestAnimationFrame;
    readonly fpsCollector: Collector;
    readonly fpsMeter: FpsMeter;

    constructor(window: WindowInterface) {
        this.navigator = window.navigator;
        this.performance = window.performance;
        this.requestAnimationFrame = window.requestAnimationFrame;

        this.fpsCollector = new Collector();
        this.fpsMeter = new FpsMeter(this.fpsCollector);
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

    startFpsMeasure(): void {
        this.fpsMeter.startMeasure(this.requestAnimationFrame);
    }

    stopFpsMeasure(): void {
        this.fpsMeter.stopMeasure();
    }
    
    getFPS(): Array<Measure>
    {
        return this.fpsCollector.getMeasures();
    }
}

interface WindowInterface {
    readonly navigator: Navigator,
    readonly performance: Performance,
    readonly requestAnimationFrame: RequestAnimationFrame
}

