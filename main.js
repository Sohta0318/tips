// what is [] mean in object array
const o = [
  {
    name: "sohta",
    age: 22,
    country: "japan",
  },
  {
    name: "sota",
    age: "20",
    country: "japan",
  },
];
console.log(o);
// const [i] = o //only take first one
const [i, p] = o;
console.log(i, p);

// same as [k]
const k = o[0];
console.log(k);

//  find max number in array
const array = [1, 5, 13, 33, 66, 56];
let max = array[0];
for (let i = 0; i <= array.length; i++) {
  if (max < array[i]) {
    // max = array[i];
    max = array[i];
    //   } else {
    //     console.log(max);
  }
}
console.log(max);
