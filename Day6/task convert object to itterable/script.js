var arr = ["kkk", "jjjj", "ss", "llll"];

/// *** (1)array iterable
// function myfun() {
//   var values = Object.values(this);
//   let step = 0;
//   return {
//     next: function () {
//       if (step <= values.length) {
//         let val = values[step];
//         step++;
//         return {
//           value: val,
//           done: false,
//         };
//       } else {
//         return {
//           value: undefined,
//           done: true,
//         };
//       }
//     },
//   };
// }
// arr[Symbol.iterator] = myfun;

/// for object
let person = {
  name: "mahmoud",
  address: "benha",
  age: 25,
  //   [Symbol.iterator]() {
  //     let values = Object.values(this); // returns an array of ['mahmoud', 'benha', 25]
  //     let index = 0;
  //     return {
  //       next: function () {
  //         if (index < values.length) {
  //           let val = values[index];
  //           index++;
  //           return {
  //             value: val,
  //             done: false,
  //           };
  //         } else
  //           return {
  //             value: undefined,
  //             done: true,
  //           };
  //       },
  //     };
  //   },
};

/// generator function
function* myitterableobject() {
  /// tihs refer to object after of
  for (var key in this) {
    yield `${key} : ${person[key]}`;
  }
}

person[Symbol.iterator] = myitterableobject;

for (let i of person) {
  console.log(i);
}
