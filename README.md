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
data is:
```ts
class GeneralInfo {
    readonly userAgent: string;
    readonly connection?: NetworkInformation | undefined;
    readonly navigationTiming?: PerformanceNavigationTiming | undefined;
}
```
fields description:

[NetworkInformation](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation)  
[PerformanceNavigationTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming)
