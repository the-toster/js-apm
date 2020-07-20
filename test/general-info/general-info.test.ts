import {describe, test, expect} from '@jest/globals';

import Apm from '../../src/Apm';

describe('getGeneralInfo', () => {

    const performance = {
        getEntriesByName: () => [{domComplete: 100} as PerformanceNavigationTiming]
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
        expect(info.navigationTiming && info.navigationTiming.domComplete).toBe(100);
    })
})