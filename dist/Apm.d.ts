import GeneralInfo from "./GeneralInfo";
import FpsMeter, { RequestAnimationFrame } from "./FPS/FpsMeter";
import Collector, { Measure } from "./FPS/Collector";
export default class Apm {
    readonly navigator: Navigator;
    readonly performance: Performance;
    readonly requestAnimationFrame: RequestAnimationFrame;
    readonly fpsCollector: Collector;
    readonly fpsMeter: FpsMeter;
    constructor(window: WindowInterface);
    getGeneralInfo(): GeneralInfo;
    startFpsMeasure(): void;
    stopFpsMeasure(): void;
    getFPS(): Array<Measure>;
}
interface WindowInterface {
    readonly navigator: Navigator;
    readonly performance: Performance;
    readonly requestAnimationFrame: RequestAnimationFrame;
}
export {};
