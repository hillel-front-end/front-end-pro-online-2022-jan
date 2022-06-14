/*
    https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde
    https://cdn-media-1.freecodecamp.org/images/1*u1HxrxTNgFJmIVMd5I-ucw.png
    https://cdn-media-1.freecodecamp.org/images/1*xM9pXLcsQa641gzCfTz0iw.jpeg
    https://gist.github.com/ostinlviv/f86796b1c633f1c8fedca4a6aa25d140

    https://miro.medium.com/max/1400/1*GpS8sOvkhbj-NIXNtM084g.png
    https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
*/

// import and export ALL
// import * as WeatherService from './weather.js';

// Named import
// import { weatherActions, value2 as weatherValue2 }  from './weather.js';

// Default import
import WeatherServiceDefault, { EXTRA_VALUE } from './weather.js';



console.log('Index starts.');


// console.log(WeatherService);
// console.log(WeatherService.value2);
// console.log(weatherActions, weatherValue2);

console.log(WeatherServiceDefault, EXTRA_VALUE);







