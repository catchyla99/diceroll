var n=Math.ceil(6*Math.random());
var img1=("images/dice"+n+".png");

document.querySelectorAll("img")[0].setAttribute("src",img1);

var x=Math.ceil(6*Math.random());
var img2=("images/dice"+x+".png");

document.querySelectorAll("img")[1].setAttribute("src",img2);


if(n>x){
    document.querySelector("div.result").textContent="Sumiran Wins!!";
}

else if(x>n){
    document.querySelector("div.result").textContent="Devika Wins!!";
}

else{
    document.querySelector("div.result").textContent="Its a Draw!";
}