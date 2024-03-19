var greating = "Hello";

var name = "Class!";

alert(greating + name);

username = window.prompt("What is your name?")

console.log(username)

/*
function changeBackground(color) {
    document.body.style.background = color;
}

window.addEventListener.apply("load",function() { changeBackground('blue')})
*/

console.log("name");

window.onload=function(){
    var user = document.getElementById("username");
    console.log(user.value);
    console.log(user.type);
}

function inputHandler()
{
    var myvalue = document.getElementById("myinput").value;
    document.getElementById("emptyParagraph").innerHTML = "Your Input:";
}

localStorage.setItem("username","ITM");
console.log(localStorage.getItem("username"));
localStorage.removeItem("username");