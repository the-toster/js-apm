import Collector from "./Collector";

export default class FpsMeter {
    private last = 0;
    private enableMeasure = false;
    constructor(
        readonly collector: Collector
    ) {

    }

    stopMeasure(): void {
        this.enableMeasure = false;
    }

    startMeasure(frameRequest: RequestAnimationFrame): void {
        this.enableMeasure = true;
        frameRequest(time => {
                this.tick(time);
                if (this.enableMeasure) {
                    this.startMeasure(frameRequest);
                }
            }
        )
    }

    tick(time: number): void {
        const deltaT = time - this.last;
        const instantFps = Math.round(1000 / deltaT);
        this.last = time;
        this.collector.push(time, instantFps);
    }

}

export interface RequestAnimationFrame {
    (callback: FrameRequestCallback): number
}