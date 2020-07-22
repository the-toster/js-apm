import {describe, test, expect} from '@jest/globals';

import Apm from '../../src/Apm';

describe('getGeneralInfo', () => {

    const performance = {
        getEntriesByType: () => [{domComplete: 100.123} as PerformanceNavigationTiming]
    }

    const window = {
        navigator: {userAgent: 'UA', connection: {type: 'wifi'}} as Navigator,
        performance: performance as unknown as Performance,
        requestAnimationFrame: (cb: FrameRequestCallback) => {cb(100); return 100;}
    };

    const apm = new Apm(window);

    const info = apm.getGeneralInfo();

    test('timings', () => {
        expect(info.timing && info.timing.domComplete).toBe(100)
    });

    test('connection', () => {
        expect(info.connection && info.connection.type).toBe('wifi');
    });

    test('user agent', () => {
        expect(info.userAgent).toBe('UA');
    })
})