export default class Collector {
    private buffer: Array<Measure> = [];
    private cursor = -1;
    private last = 0;
    push(time: number, val: number): void {

        if(val !== this.last
            || this.cursor < 1
            || val !== this.buffer[this.cursor - 1][1]
        ) {
            this.addToBuffer(time, val);
            return;
        }

        this.buffer[this.cursor][0] = time;
    }

    private addToBuffer(time: number, val: number): void
    {
        this.buffer.push([time, val]);
        this.last = val;
        this.cursor++;
    }

    getMeasures(): Array<Measure>
    {
        return this.buffer;
    }
}

export type Measure = [number, number];