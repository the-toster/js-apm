import {describe, test, expect} from '@jest/globals';

import FpsMeter from "../../src/FPS/FpsMeter";

describe('fps meter tick', () => {
    const meter = new FpsMeter(cb => 100);
    //For FPS 60 frame duration = 1/60 seconds = 1000/60 ms
    const frameLen = 1000 / 60;

    // let make 3 frame
    meter.tick(frameLen);
    meter.tick(frameLen * 2);
    meter.tick(frameLen * 3);

    const intFPS = Math.round(meter.getFrameRate());
    test('correct fps count', () => {
        expect(intFPS).toBe(60)
    });
});