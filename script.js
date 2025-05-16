let gameseq=[];
let userseq=[];
let start=false;
let level=0;
let colors=["red","green","blue","violet"];
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelup();
    }
})

function btnflash(rnbtn){
    rnbtn.classList.add("flash");
    setTimeout(() => {
        rnbtn.classList.remove("flash");
    }, 250);
}
function userflash(rnbtn){
    rnbtn.classList.add("user");
    setTimeout(() => {
        rnbtn.classList.remove("user");
    }, 250);
}


function levelup(){
    userseq=[];
    level++;
    document.querySelector("h3").textContent=`Level ${level}`;
    let rnidx=Math.floor(Math.random()*3);
    let rncol=colors[rnidx];
    let rnbtn=document.querySelector(`.${rncol}`);
    // console.log(rncol);
    btnflash(rnbtn);
    gameseq.push(rncol);
    console.log(gameseq);
}

function checkAns(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
         document.querySelector("h3").innerHTML=`Game over! Your score ${level} <br>press any key to restart`;
         document.body.style.backgroundColor="red";
         setTimeout(() => {
            document.body.style.backgroundColor="lightsteelblue";
         }, 500);
         reset();
    }
}

function btnpress(){
    // console.log("btn press")
    let btn=this;
    userflash(btn);
    
    usercol=btn.getAttribute("id");
    userseq.push(usercol);
    console.log(userseq);
    checkAns(userseq.length-1);
}


let allbtns=document.querySelectorAll(".btn")

for(let btn of allbtns){btn.addEventListener("click",btnpress)}
btnpress();

function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}