import {describe, test, expect} from '@jest/globals';

import FpsMeter from "../../src/FPS/FpsMeter";
import Collector from "../../src/FPS/Collector";

const frameLen = 1000 / 60;
const times: Array<number> = [];
// let make 3 frame
times.push(frameLen);
times.push(frameLen * 2);
times.push(frameLen * 3);
let meter: FpsMeter;
const collect = new Collector();

describe('fps meter request callback', () => {
    test('requestAnimFrame handling', () => new Promise(resolve => {
        const cb = (fn: FrameRequestCallback) => {
            const time = times.shift()
            if (time) {
                Promise.resolve().then(() => fn(time));
            } else {
                expect(Math.round(collect.getMeasures()[0][1])).toBe(60)
                resolve();
            }
            return 100;
        }

        meter = new FpsMeter(collect);
        meter.startMeasure(cb);
    }));



});