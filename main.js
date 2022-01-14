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

// same as const [i] = o
const k = o[0];
console.log(k);

//  find max number in array
const array = [1, 5, 13, 33, 66, 56];
let max = array[0];
for (let i = 0; i <= array.length; i++) {
  if (max < array[i]) {
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

// Without use strict
function a() {
  console.log("from a(): ", this);
  console.log(this === window);
}
a();
// it will show window
//with strict mode it will undefined

// reduce method
let number = [1, 2, 3];
const acc = number.reduce((ac, cu) => {
  return ac + cu;
});
console.log(acc);

// setTimeout if you want use function which is required argument inside it
const a = function (coin) {
  if (coin === 1) console.log("1yes");
  if (coin === 2) console.log("yes");
  if (coin === 3) console.log("3yes");
};

const b = setTimeout(function () {
  a(3);
}, 2000);

// Count how may keys in Object and use Object.entries to use key and value

const setupTags = (objects) => {
  const allTags = {};

  objects.forEach((object) => {
    object.content.tags.forEach((key) => {
      if (allTags[key]) {
        allTags[key] += 1;
      } else {
        allTags[key] = 1;
      }
    });
  });
  // console.log(allTags)
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    // console.log(firstTag, secondTag)
    return firstTag.localeCompare(secondTag);
  });

  return newTags;
};

///////////////////////
// function scope
const test = () => {
  greet();
};

// will not work
// test();
//greet()

const greet = () => {
  console.log("hello");
};

// will work
test();

// you can call later function inside up function and call that function below later function
