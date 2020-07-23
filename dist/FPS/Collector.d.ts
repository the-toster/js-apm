export default class Collector {
    private buffer;
    private cursor;
    private last;
    push(time: number, val: number): void;
    private addToBuffer;
    getMeasures(): Array<Measure>;
}
export declare type Measure = [number, number];
