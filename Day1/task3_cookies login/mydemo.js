
function profile()
{ 
      var allCookies = document.cookie;   
      var arrCookies = allCookies .split('; ');
      console.log(arrCookies.length)

      for(var i=0;i<arrCookies.length;i++)
      {
            var arr= arrCookies[i].split('=')

            if(arr[0]=="color")
            {
                  document.querySelectorAll("span")[0].style.color=arr[1];
                  document.querySelectorAll("span")[1].style.color=arr[1];
            }
            else if(arr[0]=="name")
            {
                  document.querySelectorAll("span")[0].innerHTML=arr[1];
            }
            else if(arr[0]=="gender")
            {
                  if(arr[1]=="Male")
                    document.getElementById("img").setAttribute("src","./Images/maleimg.jpeg")
                  else
                    document.getElementById("img").setAttribute("src","./Images/femaleimg.jpeg")
            }
            else if(arr[0]=="counter")
            {
                  document.querySelectorAll("span")[1].innerHTML=arr[1];
                  setCookie("counter",Number(arr[1])+1)
                  
            }
      }      
}
profile()

var expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 3);

function setCookie(key, value) {
      document.cookie = key + "=" + value + ";expires=" + expireDate;
}