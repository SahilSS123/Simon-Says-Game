let gameseq=[];
let userseq=[];
let btns=['red','green','yellow','blue'];

let highscore=0;
let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress", function () {
   if(started==false){
    console.log("Game Started");
    started=true;

    levelup();
   }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);

}
function userbtnflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);

}

function levelup(){
    userseq=[];
    level++;
    h3.innerText= `Level ${level}`;

    let randIndex= Math.floor(Math.random() *3);
    let randcolor=btns[randIndex];
    let randbtn=document.querySelector(`.${randcolor}`)
    // console.log(randIndex);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);

}

function checkans(idx){
    // console.log("Current Level",level);
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
         }
        }else{
            if(level>highscore){
                highscore=level
            }
        h3.innerHTML=`Game Over!!! <b> Your Score was ${level} </b><br> High Score ${highscore} <br> Press Any Key To Restart`;
        document.querySelector(".main").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector(".main").style.backgroundColor="black"
        },250);
        reset();
        }
        
    }


function btnpress(){
    let btn=this
    userbtnflash(btn); 

    userColor=btn.getAttribute('id');
    userseq.push(userColor);

    checkans(userseq.length-1);
}

let allbtn=document.querySelectorAll('.btn');
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset() {
    gameseq=[];
    userseq=[];
    level=0;
    started=false;
}
