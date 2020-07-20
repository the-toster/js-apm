/// <reference types="network-information-types" />
export default class GeneralInfo {
    readonly userAgent: string;
    readonly connection?: NetworkInformation | undefined;
    readonly navigationTiming?: PerformanceNavigationTiming | undefined;
    constructor(userAgent: string, connection?: NetworkInformation | undefined, navigationTiming?: PerformanceNavigationTiming | undefined);
}
