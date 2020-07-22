/// <reference types="network-information-types" />
export default class GeneralInfo {
    readonly userAgent: string;
    readonly connection?: Connection;
    readonly timing?: Timing;
    constructor(userAgent: string, connection?: NetworkInformation, timing?: PerformanceNavigationTiming);
}
declare class Connection {
    readonly type?: "bluetooth" | "none" | "unknown" | "cellular" | "ethernet" | "mixed" | "other" | "wifi" | "wimax" | undefined;
    readonly effectiveType?: "2g" | "3g" | "4g" | "slow-2g" | undefined;
    readonly downlinkMax?: number | undefined;
    readonly downlink?: number | undefined;
    readonly rtt?: number | undefined;
    readonly saveData?: boolean | undefined;
    constructor(type?: "bluetooth" | "none" | "unknown" | "cellular" | "ethernet" | "mixed" | "other" | "wifi" | "wimax" | undefined, effectiveType?: "2g" | "3g" | "4g" | "slow-2g" | undefined, downlinkMax?: number | undefined, downlink?: number | undefined, rtt?: number | undefined, saveData?: boolean | undefined);
}
declare class Timing {
    readonly domComplete: bigint;
    readonly domContentLoadedEventEnd: bigint;
    readonly domContentLoadedEventStart: bigint;
    readonly domInteractive: bigint;
    readonly loadEventEnd: bigint;
    readonly loadEventStart: bigint;
    readonly redirectCount: bigint;
    readonly unloadEventEnd: bigint;
    readonly unloadEventStart: bigint;
    constructor(domComplete: bigint, domContentLoadedEventEnd: bigint, domContentLoadedEventStart: bigint, domInteractive: bigint, loadEventEnd: bigint, loadEventStart: bigint, redirectCount: bigint, unloadEventEnd: bigint, unloadEventStart: bigint);
}
export {};
