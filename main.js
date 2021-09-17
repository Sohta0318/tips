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

///////////////
//static difference

class PersonCI {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  // greet = function () {
  //   console.log(`Hey ${this.firstName}`);
  // };

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not Full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey(fullName) {
    console.log(`Hey there 👏`);
    console.log(fullName);
  }
}
const jessica = new PersonCI("Jessica Davis", 1996);
jessica.calcAge(); //instanceはnew -を定義しないと使えない

PersonCI.hey("jessica"); // static はnew- を定義しなくても呼び出せる  also can take argument
// PersonCI.calcAge();

// about this
//let can not be window object
// let width = 600;
//var become window object
var width = 600;

var shape = { width: 300 };

var showWidth = function () {
  //this indicate window object if this is in normal function
  console.log(this.width);
  //if this is in object it indicate object
};

showWidth();
