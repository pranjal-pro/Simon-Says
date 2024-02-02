let started= false;
let seq= [];
let userSeq= [];
document.addEventListener('keypress', ()=>{
    if(!started){
        started= true;
        gameStart();
    }
});
function gameStart(){
    seq.push(`btn${Math.floor(Math.random()* 4)+ 1}`);
    console.log(seq);
    flash(document.querySelector(`.${seq[seq.length- 1]}`));
    document.querySelector('h3').innerText= `Level ${seq.length}`;
}
function flash(obj){
    obj.classList.add('flash');
    setTimeout(()=> {obj.classList.remove('flash')}, 350);
}
function userInput(){
    console.log(this);
    userSeq.push(this.classList[0]);
    if(userSeq[userSeq.length- 1]!== seq[userSeq.length- 1]){
        started= false;
        document.querySelector('h3').innerHTML= `You lose on Level ${seq.length}<br><span>Press any key to continue</span>`;
        document.querySelector('body').style.backgroundColor= 'red';
        setTimeout(()=>{document.querySelector('body').style.backgroundColor= 'white'}, 200);
        seq= [];
        userSeq= [];
    } else if(userSeq[userSeq.length- 1]=== seq[userSeq.length- 1] && userSeq.length=== seq.length) {
        this.classList.remove('flash');
        userSeq= [];
        setTimeout(gameStart(), 1000);
    }
}
let btns= document.querySelectorAll('.game button');
btns.forEach(btn=> {
    btn.addEventListener('click', userInput);
});