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
    readonly domComplete: number;
    readonly domContentLoadedEventEnd: number;
    readonly domContentLoadedEventStart: number;
    readonly domInteractive: number;
    readonly loadEventEnd: number;
    readonly loadEventStart: number;
    readonly redirectCount: number;
    readonly unloadEventEnd: number;
    readonly unloadEventStart: number;
    constructor(domComplete: number, domContentLoadedEventEnd: number, domContentLoadedEventStart: number, domInteractive: number, loadEventEnd: number, loadEventStart: number, redirectCount: number, unloadEventEnd: number, unloadEventStart: number);
}
export {};
