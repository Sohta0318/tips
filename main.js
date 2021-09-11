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
const [i, p] = o;
console.log(i, p);

// same as [k]
const k = o[0];
console.log(k);
