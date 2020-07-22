import {describe, test, expect} from '@jest/globals';

import FpsMeter from "../../src/FPS/FpsMeter";

const frameLen = 1000 / 60;
const times: Array<number> = [];
// let make 3 frame
times.push(frameLen);
times.push(frameLen * 2);
times.push(frameLen * 3);
let meter: FpsMeter;

describe('fps meter request callback', () => {
    test('requestAnimFrame handling', () => new Promise(resolve => {
        const cb = (fn: FrameRequestCallback) => {
            const time = times.shift()
            if (time) {
                Promise.resolve().then(() => fn(time));
            } else {
                expect(Math.round(meter.getFrameRate())).toBe(60)
                resolve();
            }
            return 100;
        }

        meter = new FpsMeter(cb);
        meter.startMeasure();
    }));



});