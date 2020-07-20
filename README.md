[![Build Status](https://travis-ci.com/the-toster/js-apm.svg?branch=master)](https://travis-ci.com/the-toster/js-apm)
# Performance monitoring for web app

get profile data from client 

## Installation 
```sh
npm i js-apm
```

## Usage

```js

import Apm from "js-apm";

const apm = new Apm(window);

const data = apm.getGeneralInfo();

/*
data is:
{
    userAgent: string;
    connection?: NetworkInformation | undefined;
    navigationTiming?: PerformanceNavigationTiming | undefined;
}

*/

```

where NetworkInformation is:  
https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation

and PerformanceNavigationTiming:  
https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming
