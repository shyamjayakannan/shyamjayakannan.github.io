let pop = new Audio('sfx-pop (mp3cut.net).mp3');

// if player is not selected
document.querySelector('.container').addEventListener('click', shake);

// function shake
function shake() {
    document.querySelector('.gameInfo').childNodes[1].style.color = 'white';
    document.querySelector('.gameInfo').childNodes[1].textContent = 'SELECT PLAYER!';
    document.querySelector('.begin').classList.add('shake');
        
    // remove after 1s to re add each time
    setTimeout(() => {
            document.querySelector('.gameInfo').childNodes[1].style.color = 'black';
            document.querySelector('.gameInfo').childNodes[1].textContent = 'Let\'s Play!';
            document.querySelector('.begin').classList.remove('shake');
        }, 500);
    
    setTimeout(() => document.querySelector('.gameInfo').childNodes[1].textContent = 'Let\'s Play!', 1000);
}

// line
function line(i) {
    if (window.matchMedia('(max-width: 810px)').matches) {
        const values = [
            // top, left, rotate
            [-19, 36, 90],
            [6, 36, 90],
            [30, 36, 90],
            [6, 11, 0],
            [6, 36, 0],
            [6, 61, 0],
            [-5, 36, -45],
            [-5, 36, 45]
        ];
    
        document.querySelector('.line').style.top = `${values[i][0]}vw`;
        document.querySelector('.line').style.left = `${values[i][1]}vw`;
        document.querySelector('.line').style.transform = `rotate(${values[i][2]}deg)`;
    
        // transform origin
         if (i === 6 || i === 7)
            document.querySelector('.line').style.transformOrigin = '1.5vw 42.5vw';
         else if (i === 0 || i === 1 || i === 2)
            document.querySelector('.line').style.transformOrigin = '1.5vw 31.5vw';
        
        // height transition
        document.querySelector('.line').style.height = i < 6 ? '64vw' : '85vw'; 
    }
    else {
        const values = [
            // top, left, rotate
            [-9, 15.7, 90],
            [2, 15.7, 90],
            [13, 15.7, 90],
            [2, 4.7, 0],
            [2, 15.7, 0],
            [2, 26.7, 0],
            [-3.5, 15.7, -45],
            [-3.5, 15.7, 45]
        ];
    
        document.querySelector('.line').style.top = `${values[i][0]}vw`;
        document.querySelector('.line').style.left = `${values[i][1]}vw`;
        document.querySelector('.line').style.transform = `rotate(${values[i][2]}deg)`;
    
        // transform origin
        if (i === 6 || i === 7)
            document.querySelector('.line').style.transformOrigin = '0.5vw 20vw';
        if (i === 0 || i === 1 || i === 2)
            document.querySelector('.line').style.transformOrigin = '0.8vw 14.5vw';
        
        // height transition
        document.querySelector('.line').style.height = i < 6 ? '29vw' : '40vw';
    }
}

// play as
let turn;

document.getElementById('cross').addEventListener('click', () => {
    // remove grid eventlstener
    document.querySelector('.container').removeEventListener('click', shake);

    turn = 'x';
    overlay();
    document.querySelector('.begin').style.display = 'none';
    document.querySelector('.display').style.display = 'block';
    document.querySelector('.display').childNodes[3].childNodes[1].style.visibility = 'visible';
    document.querySelector('.display').childNodes[3].childNodes[3].style.visibility = 'hidden';

    // make grid clickable
    // document.querySelector('.container').style.pointerEvents = 'auto';
});

document.getElementById('circle').addEventListener('click', () => {
    // remove grid eventlstener
    document.querySelector('.container').removeEventListener('click', shake);

    turn = '0';
    overlay();
    document.querySelector('.begin').style.display = 'none';
    document.querySelector('.display').style.display = 'block';
    document.querySelector('.display').childNodes[3].childNodes[3].style.visibility = 'visible';
    document.querySelector('.display').childNodes[3].childNodes[1].style.visibility = 'hidden';

    // make grid clickable
    // document.querySelector('.container').style.pointerEvents = 'auto';
});

// begin popup
function overlay() {
    // toggle adds if present, removes if not
    document.querySelector('.overlay').classList.toggle('overlay-animation');
}

// check win
let counter = 0;

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

    let m, n;

    m = (cross1 && cross2 && cross3) ? 0
        : (cross4 && cross5 && cross6) ? 1
        : (cross7 && cross8 && cross9) ? 2
        : (cross1 && cross4 && cross7) ? 3
        : (cross2 && cross5 && cross8) ? 4
        : (cross3 && cross6 && cross9) ? 5
        : (cross1 && cross5 && cross9) ? 6
        : (cross3 && cross5 && cross7) ? 7
        : -1;

    if (m !== -1) {
        const cross = document.createElement('div');
        cross.className = 'cross';
        document.querySelector('.popup').childNodes[1].childNodes[3].appendChild(cross);
        
        console.log(document.querySelector('.popup').childNodes[1]);
        document.querySelector('.popup').childNodes[1].childNodes[3].childNodes[0].style.visibility = 'visible';
        document.querySelector('.popup').childNodes[1].style.display = 'block';

        // line
        line(m);

        // overlay after 1s
        setTimeout(() => {
            document.querySelector('.popup').classList.toggle('show');
            document.querySelector('#popup1').classList.toggle('win');
        }, 1000);
    }
    else {
        n = (circle1 && circle2 && circle3) ? 0
        : (circle4 && circle5 && circle6) ? 1
        : (circle7 && circle8 && circle9) ? 2
        : (circle1 && circle4 && circle7) ? 3
        : (circle2 && circle5 && circle8) ? 4
        : (circle3 && circle6 && circle9) ? 5
        : (circle1 && circle5 && circle9) ? 6
        : (circle3 && circle5 && circle7) ? 7
        : -1;

        if (n !== -1) {
            const circle = document.createElement('div');
            const incircle = document.createElement('div');
            incircle.style.background = 'white';
            circle.appendChild(incircle);
            circle.className = 'circle popcircle';
            document.querySelector('.popup').childNodes[1].childNodes[3].appendChild(circle);

            document.querySelector('.popup').childNodes[1].childNodes[3].childNodes[0].style.visibility = 'visible';
            document.querySelector('.popup').childNodes[1].style.display = 'block';

            // line
            line(n);

            // overlay after 1s
            setTimeout(() => {
                document.querySelector('.popup').classList.toggle('show');
                document.querySelector('#popup1').classList.toggle('win');
            }, 1000);
        }
        else if (counter === 8) {
            document.querySelector('.popup').childNodes[1].style.display = 'block';
            document.querySelector('.popup').childNodes[1].childNodes[1].textContent = 'It\'s a Draw!';
            document.querySelector('.popup').childNodes[1].childNodes[3].style.display = 'none';

            document.querySelector('.popup').classList.toggle('show');
            document.querySelector('#popup1').classList.toggle('win');
        }
        counter++;
    }
}

// game logic
let boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
   box.addEventListener('click', (e) => {
    if (document.querySelector('.begin').style.display !== 'none') {
        return;
    }

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