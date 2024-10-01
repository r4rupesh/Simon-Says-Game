let gameSeq = [];
let userSeq = [];
let btns = ['yellow', 'red', 'purple', 'green'];
let started = false;
let level = 0;
let highS = 0;
let h3 = document.querySelector('h3');
let h2 = document.querySelector('h2');
document.addEventListener('keypress', function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 200);
}
function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 200);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
    if(level>highS){
        highS++;
    }
    h3.innerText = '';
}
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start.`;
        reset();
        highScore();
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function () { 
            document.querySelector('body').style.backgroundColor = 'white' }, 200);   
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);

}
let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener('click', btnPress);

}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

function highScore(){
    if(highS>level){
        
        h2.innerHTML = `<b>High Score: ${highS}</b>`;

    }
}