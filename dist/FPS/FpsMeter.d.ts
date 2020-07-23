import Collector from "./Collector";
export default class FpsMeter {
    readonly collector: Collector;
    private last;
    private enableMeasure;
    constructor(collector: Collector);
    stopMeasure(): void;
    startMeasure(frameRequest: RequestAnimationFrame): void;
    tick(time: number): void;
}
export interface RequestAnimationFrame {
    (callback: FrameRequestCallback): number;
}
