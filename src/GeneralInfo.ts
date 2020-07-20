export default class GeneralInfo {
    constructor(
        readonly userAgent: string,
        readonly connection?: NetworkInformation,
        readonly navigationTiming?: PerformanceNavigationTiming
    ) {
    }
}

interface ConnectionInfo {
    readonly type: string,
    readonly effectiveType: string
}