// async function execute() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     console.log(data);
//     for (let i = 0; i < data.length; i++) {
//       document.getElementById(`btn${i}`).innerHTML = data[i].name;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// execute();

// async function execute1() {
//   try {
//     let response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts?userId=1"
//     );
//     let data = await response.json();
//     var tex = [];
//     for (let i = 1; i < data.length; i++) {
//       tex.push(data[i].title);
//     }
//     document.getElementById("show").innerHTML = tex.join(",\t\t");
//   } catch (error) {
//     console.log(error);
//   }
// }

//////////  using then catch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      document.getElementById(`btn${i}`).innerHTML = data[i].name;
    }
  })
  .catch((error) => {
    console.log(error);
  });

document.getElementById("btn0").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var tex = [];
      for (let i = 1; i < data.length; i++) {
        tex.push(data[i].title);
      }
      document.getElementById("show").innerHTML = tex.join(",\t\t");
    })
    .catch((error) => {
      console.log(error);
    });
});
