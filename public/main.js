import square ,{cube as cubeFunction, areaOfCircle}  from './calculate.js';

const number =50;

const squaredNumber =square(number);

const CubeNumbered = cubeFunction(number);

const area = areaOfCircle(number);

console.log(area);

console.log(CubeNumbered);

console.log(squaredNumber);


