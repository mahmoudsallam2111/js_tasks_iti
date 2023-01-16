var login=document.getElementById("log-btn");
var getallcookies=document.getElementById("GetAll-btn");
var GetOne=document.getElementById("Getkey-btn");
var Name=document.getElementById("Name");
var password=document.getElementById("password");
var key=document.getElementById("key");
var del=document.getElementById("del-btn");
var displayall=document.getElementById("displayall");
var displayone=document.getElementById("displayone");
var expireDate = new Date();

expireDate.setDate(expireDate.getDate() + 3);

var allCookies;

login.addEventListener("click",function(){
    setCookie("name",Name.value );
    setCookie("pass", password.value);
   
});
function setCookie(key, value) {
      document.cookie = key + "=" + value + ";expires=" + expireDate;
     }

function getAllCookies() {
       return document.cookie;
}
getallcookies.addEventListener("click",function(){
     allCookies = getAllCookies();
     displayall.innerHTML = allCookies;
});

function getCookie(key){
    var oneCookie=document.cookie.split(';');
  
    for(var i=0;i<oneCookie.length;i++)
    {
       var cookiekey=oneCookie[i].split('=');
        for(var j=0;j<cookiekey.length;j++)
        {
            if(key==cookiekey[j]);
        }
      
      
        displayone.innerHTML=key;
    }
    
}
GetOne.addEventListener("click",function(){
    getCookie(key.value);
});

del.addEventListener("click",del);
function del(key)
{
    expireDate.setDate(expireDate.getDate()-3);
    var mycookies=document.cookie.split(';');
  
    for(var i=0;i<mycookies.length;i++)
    {
       var cookiekey=mycookies[i].split('=');
        for(var j=0;j<cookiekey.length;j++)
        {
            if(key==cookiekey[j]);
        }
      
      document.cookie = cookiekey[0] + "=" + cookiekey[1] + ";expires=" + expireDate;
    }
}
