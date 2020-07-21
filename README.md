[![Build Status](https://travis-ci.com/the-toster/js-apm.svg?branch=master)](https://travis-ci.com/the-toster/js-apm)
# Performance monitoring for web app

get profile data from client 

## Installation 
```sh
npm i js-apm
```
or bundled:  
```html
<script src="dist/bundle/js-apm.js"></script>
```
will expose global `Apm` constuctor

## Usage

```js
import Apm from "js-apm";

const apm = new Apm(window);
const data = apm.getGeneralInfo();
```
where data is:
```ts
export default class GeneralInfo {
    userAgent: string;
    connection?: Connection;
    timing?: Timing;
}

declare class Connection {
    type?: "bluetooth" | "none" | "unknown" | "cellular" | "ethernet" | "mixed" | "other" | "wifi" | "wimax" | undefined;
    effectiveType?: "2g" | "3g" | "4g" | "slow-2g" | undefined;
    downlinkMax?: number | undefined;
    downlink?: number | undefined;
    rtt?: number | undefined;
    saveData?: boolean | undefined;
}

declare class Timing {
    domComplete: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    domInteractive: number;
    loadEventEnd: number;
    loadEventStart: number;
    redirectCount: number;
    unloadEventEnd: number;
    unloadEventStart: number;
}
```
`Connection` is serializable version of [NetworkInformation](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation)  
And `Timing` is like [PerformanceNavigationTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming)
