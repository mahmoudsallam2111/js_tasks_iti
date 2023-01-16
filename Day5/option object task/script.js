// var object1 = {
//   id: 1,
//   name: "mahmoud",
// };

// var object2 = {
//   id: 2,
// };

// Object.assign(object1, object2);
// console.log(object1);

/// option accepts object as argument
var display = function (option) {
  let defaultValues = {
    coursename: "default name",
    courseduration: 0,
    courseowner: "default  name",
  };

  Object.assign(defaultValues, option); /// if value exist , it will be overridden else will set default values

  console.log(
    `coursename ${defaultValues.coursename} && courseduration ${defaultValues.courseduration}
     && courseowner ${defaultValues.courseowner}`
  );
};

display({
  coursename: "js",
  courseduration: 4,
  courseowner: "ahmed",
});
