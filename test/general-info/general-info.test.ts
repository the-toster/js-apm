import {describe, test, expect} from '@jest/globals';

import Apm from '../../src/Apm';

describe('getGeneralInfo', () => {

    const performance = {
        getEntriesByType: () => [{domComplete: 100.123} as PerformanceNavigationTiming]
    }

    const window = {
        navigator: {userAgent: 'UA', connection: {type: 'wifi'}} as Navigator,
        performance: performance as unknown as Performance
    };

    const apm = new Apm(window);

    test('user agent', () => {
        const info = apm.getGeneralInfo();
        expect(info.userAgent).toBe('UA');
        expect(info.connection && info.connection.type).toBe('wifi');
        expect(info.timing && info.timing.domComplete).toBe(100);
    })
})