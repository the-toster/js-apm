import {describe, test, expect} from '@jest/globals';

import FpsMeter from "../../src/FPS/FpsMeter";
import Collector from "../../src/FPS/Collector";

describe('fps meter tick', () => {
    const collector = new Collector();
    const meter = new FpsMeter(collector);
    //For FPS 60 frame duration = 1/60 seconds = 1000/60 ms
    const frameLen = 1000 / 60;

    // let make 3 frame
    meter.tick(frameLen);
    meter.tick(frameLen * 2);
    meter.tick(frameLen * 3);

    const measures = collector.getMeasures();
    test('correct fps count', () => {
        expect(measures[2][1]).toBe(60)
    });
});