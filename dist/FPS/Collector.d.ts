export default class Collector {
    private buffer;
    push(time: number, fps: number): void;
    getMeasures(): Array<FpsMeasure>;
}
export declare type FpsMeasure = [number, number];
