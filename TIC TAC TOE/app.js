let pop = new Audio('sfx-pop (mp3cut.net).mp3');

// play as
let turn;

document.getElementById('cross').addEventListener('click', () => {
    turn = 'x';
    overlay();
    document.querySelector('.begin').style.display = 'none';
    document.querySelector('.display').style.display = 'block';
    document.querySelector('.display').childNodes[3].childNodes[1].style.visibility = 'visible';
    document.querySelector('.display').childNodes[3].childNodes[3].style.visibility = 'hidden';

    // make grid clickable
    document.querySelector('.container').style.pointerEvents = 'auto';
});

document.getElementById('circle').addEventListener('click', () => {
    turn = '0';
    overlay();
    document.querySelector('.begin').style.display = 'none';
    document.querySelector('.display').style.display = 'block';
    document.querySelector('.display').childNodes[3].childNodes[3].style.visibility = 'visible';
    document.querySelector('.display').childNodes[3].childNodes[1].style.visibility = 'hidden';

    // make grid clickable
    document.querySelector('.container').style.pointerEvents = 'auto';
});

// begin popup
function overlay() {
    // toggle adds if present, removes if not
    document.querySelector('.overlay').classList.toggle('overlay-animation');
}

// check win
function checkWin() {
    let cross1 = document.querySelectorAll('.cross')[0].style.visibility === 'visible' ? true : false;
    let cross2 = document.querySelectorAll('.cross')[1].style.visibility === 'visible' ? true : false;
    let cross3 = document.querySelectorAll('.cross')[2].style.visibility === 'visible' ? true : false;
    let cross4 = document.querySelectorAll('.cross')[3].style.visibility === 'visible' ? true : false;
    let cross5 = document.querySelectorAll('.cross')[4].style.visibility === 'visible' ? true : false;
    let cross6 = document.querySelectorAll('.cross')[5].style.visibility === 'visible' ? true : false;
    let cross7 = document.querySelectorAll('.cross')[6].style.visibility === 'visible' ? true : false;
    let cross8 = document.querySelectorAll('.cross')[7].style.visibility === 'visible' ? true : false;
    let cross9 = document.querySelectorAll('.cross')[8].style.visibility === 'visible' ? true : false;
    let circle1 = document.querySelectorAll('.circle')[0].style.visibility === 'visible' ? true : false;
    let circle2 = document.querySelectorAll('.circle')[1].style.visibility === 'visible' ? true : false;
    let circle3 = document.querySelectorAll('.circle')[2].style.visibility === 'visible' ? true : false;
    let circle4 = document.querySelectorAll('.circle')[3].style.visibility === 'visible' ? true : false;
    let circle5 = document.querySelectorAll('.circle')[4].style.visibility === 'visible' ? true : false;
    let circle6 = document.querySelectorAll('.circle')[5].style.visibility === 'visible' ? true : false;
    let circle7 = document.querySelectorAll('.circle')[6].style.visibility === 'visible' ? true : false;
    let circle8 = document.querySelectorAll('.circle')[7].style.visibility === 'visible' ? true : false;
    let circle9 = document.querySelectorAll('.circle')[8].style.visibility === 'visible' ? true : false;

    if ((cross1 && cross2 && cross3) || (cross4 && cross5 && cross6) || (cross7 && cross8 && cross9) || (cross1 && cross4 && cross7) || (cross2 && cross5 && cross8) || (cross3 && cross6 && cross9) || (cross1 && cross5 && cross9) || (cross3 && cross5 && cross7)) {
        const cross = document.createElement('div');
        cross.className = 'cross';
        document.querySelector('.popup').childNodes[1].childNodes[3].appendChild(cross);

        console.log(document.querySelector('.popup').childNodes[1]);
        document.querySelector('.popup').childNodes[1].childNodes[3].childNodes[0].style.visibility = 'visible';
        document.querySelector('.popup').childNodes[1].style.display = 'block';
        document.querySelector('.popup').classList.toggle('show');
        document.querySelector('#popup1').classList.toggle('win');
    }
    else if ((circle1 && circle2 && circle3) || (circle4 && circle5 && circle6) || (circle7 && circle8 && circle9) || (circle1 && circle4 && circle7) || (circle2 && circle5 && circle8) || (circle3 && circle6 && circle9) || (circle1 && circle5 && circle9) || (circle3 && circle5 && circle7)) {
        const circle = document.createElement('div');
        const incircle = document.createElement('div');
        incircle.style.background = 'white';
        circle.appendChild(incircle);
        circle.className = 'circle popcircle';
        document.querySelector('.popup').childNodes[1].childNodes[3].appendChild(circle);
        // const cross = document.createElement('div');
        // cross.className = 'cross';
        // document.querySelector('.popup').childNodes[1].childNodes[3].appendChild(cross);

        document.querySelector('.popup').childNodes[1].childNodes[3].childNodes[0].style.visibility = 'visible';
        document.querySelector('.popup').childNodes[1].style.display = 'block';
        document.querySelector('.popup').classList.toggle('show');
        document.querySelector('#popup1').classList.toggle('win');
    }
}

// game logic
let boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
   box.addEventListener('click', (e) => {
    // play sound
    pop.play();

    // VERY IMPORTANT. TO ALLOW ONLY 1 CLICK. MAKE IT UNCLICKABLE NOW
    box.style.pointerEvents = 'none';

    if (turn === 'x') {
        e.target.children[0].style.visibility = 'visible';
        document.querySelector('.display').childNodes[3].childNodes[3].style.visibility = 'visible';
        document.querySelector('.display').childNodes[3].childNodes[1].style.visibility = 'hidden';
        // change turn
        turn = '0';

        checkWin();
    }
    else {
        e.target.children[1].style.visibility = 'visible';
        document.querySelector('.display').childNodes[3].childNodes[1].style.visibility = 'visible';
        document.querySelector('.display').childNodes[3].childNodes[3].style.visibility = 'hidden';
        // change turn
        turn = 'x';

        checkWin();
    }
   });
});

function ok() {
    document.querySelector('.popup').classList.toggle('show');
    document.querySelector('#popup1').classList.toggle('win');
    document.querySelector('.display').style.display = 'none';
    document.getElementById('playAgain').style.display = 'block';
}

function reset() {
    window.location.reload();
}