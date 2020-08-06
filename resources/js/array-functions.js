// Arrow functions
const arrow = (x) => x * x;
const nonArrow = function (x) { return x * x }
console.log(arrow(2));
console.log(nonArrow(2));

let a = [1, 2, 2, 4, 5];
let b = [5, 3, 2, 2, 1];

// some
console.log(a.some(e => e === 2)); // This will be true
console.log(a.some(e => e === 3)); // This will be false

// filter
console.log(b.filter(e => e === 2)); // This will be [2, 2]
console.log(b.filter(e => e === 3)); // This will be [3]

// map
b = [5, 3, 2, 2, 1];
console.log(b.map(e => e * e)); // creates new array with mapped entries
console.log(b); // b reamins unchanged

// concat
a = [1, 2, 2, 4, 5];
console.log(a.concat(6)); // This will be [1, 2, 2, 4, 5, 6]
console.log(a); // a remains unchanged

// Or operator
const x = null;
const y = [1];

console.log(x || []);
console.log(y || []);

// Optional chaining
const obj = null;
console.log(obj?.x); // undefined
console.log(obj.x); // Error!