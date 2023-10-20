let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let hs=0;
let p=document.querySelector("p");
 p.innerText=hs;
let btn=["yellow","red","green","purple"];
let press=document.querySelector(".press");
let h2=document.querySelector("h2")
press.addEventListener("click",function(event){
    press.style.visibility="hidden";
    console.log("game started");
    started=true;
    setTimeout(levelUp,300);
    
});

function levelUp(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;
let randIdx=Math.floor(Math.random()*3);
let randColor=btn[randIdx];
let randBtn=document.querySelector(`.${randColor}`)
gameSeq.push(randColor);
console.log(gameSeq);

btnFlash(randBtn);
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function checkAns(idx){
   if(gameSeq[idx]===userSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
   }else{
    h2.innerHTML=`Game Over! <span>Your score is ${level} </span> <br>Press <span>START</span> button to start the game`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor="white"; 
    }, 100);
    press.style.visibility="visible";
    if(level>hs){
        p.innerText=level;
    }
    reset();
   }
}
function btnPress(){
    console.log(this); 
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor)
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(bt of allBtns){
    bt.addEventListener("click",btnPress);
}
function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;

}
