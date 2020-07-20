import GeneralInfo from "./GeneralInfo";
export default class Apm {
    readonly navigator: Navigator;
    readonly performance: Performance;
    constructor(window: WindowInterface);
    getGeneralInfo(): GeneralInfo;
}
interface WindowInterface {
    readonly navigator: Navigator;
    readonly performance: Performance;
}
export {};
