export default class Collector {
    private buffer: Array<FpsMeasure> = [];
    push(time: number, fps: number): void {
        this.buffer.push([time, fps]);
    }

    getMeasures(): Array<FpsMeasure>
    {
        return this.buffer;
    }
}

export type FpsMeasure = [number, number];