export default class FpsMeter {
    private last: number = 0;
    private fps: number = 0;
    private enableMeasure: boolean = false;

    constructor(
        readonly frameRequest: RequestAnimationFrame
    ) {

    }

    stopMeasure(): void {
        this.enableMeasure = false;
    }

    startMeasure(): void {
        this.enableMeasure = true;
        this.frameRequest(time => {
                this.tick(time);
                if (this.enableMeasure) {
                    this.startMeasure()
                }
            }
        )
    }

    tick(time: number): void {
        const delta = time - this.last;
        this.fps = 1000 / delta;
        this.last = time;
    }

    getFrameRate(): number {
        return this.fps;
    }
}

export interface RequestAnimationFrame {
    (callback: FrameRequestCallback): number
}