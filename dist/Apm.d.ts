import GeneralInfo from "./GeneralInfo";
export default class Apm {
    readonly navigator: Navigator;
    readonly performance: Performance;
    constructor(window: Window);
    getGeneralInfo(): GeneralInfo;
}
