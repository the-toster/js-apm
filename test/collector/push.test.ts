import {describe, test, expect} from '@jest/globals';

import Collector from "../../src/FPS/Collector";

describe('collector', () => {


    const collector = new Collector();
    collector.push(0, 1);
    collector.push(1, 10);
    collector.push(2, 10);
    collector.push(3, 10);
    collector.push(4, 20);
    collector.push(5, 20);
    collector.push(6, 40);
    collector.push(7, 50);
    const measures = collector.getMeasures();

    test('push', () => {
       expect(measures).toStrictEqual([
           [0, 1],
           [1, 10],
           [3, 10],
           [4, 20],
           [5, 20],
           [6, 40],
           [7, 50],
       ])
    });

});