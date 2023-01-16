var btn = document.getElementById("btnRegister")

var expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 3);
var nameValue = document.getElementsByName("name")[0];
var ageValue = document.getElementsByName("age")[0];
var gender = document.getElementsByName("gender");
btn.addEventListener("click", function () {
      setCookie("name", nameValue.value);
      setCookie("age", ageValue.value);
      
      var gender = document.querySelector('input[name="gender"]:checked').value
      setCookie("gender", gender)
      
      var e = document.getElementById("ddl");
      setCookie("color", e.value)
      setCookie("counter",1)
      window.location.replace("./profile.html")
});
function setCookie(key, value) {
      document.cookie = key + "=" + value + ";expires=" + expireDate;
}


