// console.log(arguments);
// console.log(require("module").wrapper);

// modules.exports
const C = require("./test-module-1");

const Calc1 = new C();
console.log(Calc1.add(2, 5));
console.log(Calc1.multiply(2, 6));

// export
// const calc2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");
console.log(multiply(5, 6));
console.log(divide(5, 6).toFixed(2));
console.log(isFinite(5));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
