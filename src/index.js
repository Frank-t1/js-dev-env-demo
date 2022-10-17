import './index.css'

import numeral from "numeral";
//debugger;
/* eslint-disable no-console */

const courseValue= numeral(1000).format('$0,0.00');
console.log(`I would get ${courseValue} for this awesome course!`);

