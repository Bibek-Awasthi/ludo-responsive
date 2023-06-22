let p1,p2;
let name = window.prompt("Enter your name ");
document.getElementById("human").innerHTML=name;
document.getElementById("playBtn").addEventListener("click",function (){
p1 = Math.floor(Math.random()*6+1);
p2 = Math.floor(Math.random()*6+1);

let img1 = document.getElementById("i1");
let img2=document.getElementById("i2");
let srcp1=`./img/dice${p1}.png`;
let srcp2=`./img/dice${p2}.png`;
img1.setAttribute("src",srcp1);
img2.setAttribute("src",srcp2);
let result =document.getElementById("res");
let cont = document.getElementsByClassName("ludo-container")[0];

if(p1>p2){
    result.innerHTML=name+" wins🚩";
    cont.style.backgroundColor="green";
    cont.style.color="white";
}
else if(p1<p2){
    result.innerHTML="Computer wins!!!";
    cont.style.backgroundColor="white";
    cont.style.color="black";
}
else if(p1===p2){
    result.innerHTML="Game Draw🤯"
    cont.style.backgroundColor="yellow";
    cont.style.color="red";
}
else{
    result.innerHTML="Play again..."
    document.body.style.background="red";
}
});