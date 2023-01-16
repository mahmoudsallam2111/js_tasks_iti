// let person = {
//   name: "mahmoud",
//   addresses: "benha",
//   age: 25,
// };

let handler = {
  set: function (targets, prop, value) {
    if (prop === "name") {
      if (Number.isInteger(value)) {
        throw new Error("name must be an string");
      }
      if (value.length == 7) {
        targets[prop] = value;
      } else {
        throw new Error("the value must be only 7 characters long");
      }
    }

    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new Error("the value must be an integer");
      }
      if (value >= 25 && value <= 60) {
        targets[prop] = value;
      } else {
        throw new Error("the value must be between 25 and 60");
      }
    }

    if (prop === "addresses") {
      if (Number.isInteger(value)) {
        throw new Error("the addresses must be an string only");
      }
      targets[prop] = value;
    }
  },

  get: function (targets, prop) {
    if (!targets[prop]) {
      this.console.log("not found");
    } else {
      return targets[prop];
    }
  },
};
var myproxy = new Proxy({}, handler);
myproxy.age = 30;
myproxy.name = "alialil";
console.log(myproxy);
