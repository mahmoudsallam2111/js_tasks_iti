var btn = document.getElementById("btn1");

btn.addEventListener("click", function (e) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var UsersData = JSON.parse(xhr.response);
        console.log(UsersData);
        var tablebody = document.getElementById("tbody");
        for (var user in UsersData) {
          var tr = document.createElement("tr"); /// to create new row
          tablebody.appendChild(tr); /// to append new row to table body

          var td_id = document.createElement("td");
          var td_name = document.createElement("td");
          var td_email = document.createElement("td");

          tr.appendChild(td_id);
          tr.appendChild(td_name);
          tr.appendChild(td_email);
          td_id.innerHTML = UsersData[user].id;
          td_name.innerHTML = UsersData[user].name;
          td_email.innerHTML = UsersData[user].email;
        }
      }
    }
  };
  xhr.open("GET", "http://jsonplaceholder.typicode.com/users");
  xhr.send("");
});
