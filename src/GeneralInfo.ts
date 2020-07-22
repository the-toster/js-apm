export default class GeneralInfo {
    readonly connection?: Connection;
    readonly timing?: Timing;

    constructor(
        readonly userAgent: string,
        connection?: NetworkInformation,
        timing?: PerformanceNavigationTiming
    ) {

        if (connection) {
            this.connection = new Connection(
                connection.type,
                connection.effectiveType,
                connection.downlinkMax,
                connection.downlink,
                connection.rtt,
                connection.saveData,
            );
        }

        if (timing) {
            this.timing = new (Timing as any)(
                ...([timing.domComplete,
                timing.domContentLoadedEventEnd,
                timing.domContentLoadedEventStart,
                timing.domInteractive,
                timing.loadEventEnd,
                timing.loadEventStart,
                timing.redirectCount,
                timing.unloadEventEnd,
                timing.unloadEventStart].map(Math.round))
            );
        }

    }
}

class Connection {
    constructor(
        readonly type?: ConnectionType,
        readonly effectiveType?: EffectiveConnectionType,
        readonly downlinkMax?: Megabit,
        readonly downlink?: Megabit,
        readonly rtt?: Millisecond,
        readonly saveData?: boolean
    ) {
    }
}

class Timing {
    constructor(
        readonly domComplete: bigint,
        readonly domContentLoadedEventEnd: bigint,
        readonly domContentLoadedEventStart: bigint,
        readonly domInteractive: bigint,
        readonly loadEventEnd: bigint,
        readonly loadEventStart: bigint,
        readonly redirectCount: bigint,
        readonly unloadEventEnd: bigint,
        readonly unloadEventStart: bigint
    ) {
    }
}
