let pop = new Audio('sfx-pop (mp3cut.net).mp3'), turn;

// if player is not selected
document.querySelector('.container').addEventListener('click', shake);

// function shake
function shake() {
    document.querySelector('.gameInfo').childNodes[1].style.color = 'white';

    if (document.getElementById('ready').style.display === 'block') {
        document.querySelector('.gameInfo').childNodes[1].textContent = 'CLICK READY!';
        document.getElementById('ready').classList.add('shake');

        // remove after 1s to re add each time
        setTimeout(() => document.getElementById('ready').classList.remove('shake'), 500);
    }
    else {
        document.querySelector('.gameInfo').childNodes[1].textContent = 'CHOOSE ONE!';
        document.querySelectorAll('.begin').forEach(section => section.classList.add('shake'));

        // remove after 1s to re add each time
        setTimeout(() => document.querySelectorAll('.begin').forEach(section => section.classList.remove('shake')), 500);
    }
        
    
    setTimeout(() => {
        document.querySelector('.gameInfo').childNodes[1].style.color = 'black';
        document.querySelector('.gameInfo').childNodes[1].textContent = 'Let\'s Play!';
    }, 1000);
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

// play against computer eventListener
document.querySelector('.icon1').addEventListener('click', () => {
    document.querySelector('.against').style.display = 'none';
    document.querySelector('.difficulty').style.display = 'flex';
    document.querySelector('.first').style.display = 'flex';
    document.getElementById('ready').style.display = 'block';
});

// play against player eventListener
document.querySelector('.icon2').addEventListener('click', () => {
    document.querySelector('.against').style.display = 'none';
    document.querySelector('.select').style.display = 'flex';
});

// begin popup
function overlay() {
    // toggle adds if present, removes if not
    document.querySelector('.overlay').classList.toggle('overlay-animation');
}

// VERY IMPORTANT : game1x() will call the function. when assigning like below or in event listener, use only game1x. this is the name only and will not call
// let computer = game1x;

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
        else if (positions[0][1] !== '' && positions[1][1] !== '' && positions[2][1] !== '' && positions[3][1] !== '' && positions[4][1] !== '' && positions[5][1] !== '' && positions[6][1] !== '' && positions[7][1] !== '' && positions[8][1] !== '') {
            document.querySelector('.popup').childNodes[1].style.display = 'block';
            document.querySelector('.popup').childNodes[1].childNodes[1].textContent = 'It\'s a Draw!';
            document.querySelector('.popup').childNodes[1].childNodes[3].style.display = 'none';

            document.querySelector('.popup').classList.toggle('show');
            document.querySelector('#popup1').classList.toggle('win');
        }
    }
}

function ok() {
    document.querySelector('.popup').classList.toggle('show');
    document.querySelector('#popup1').classList.toggle('win');
    document.querySelector('.display').style.display = 'none';
    document.getElementById('playAgain').style.display = 'block';
}

function reset() {
    window.location.reload();
}

function xVisible(target) {
    target.children[0].style.visibility = 'visible';
    document.querySelector('.display').childNodes[3].childNodes[3].style.visibility = 'visible';
    document.querySelector('.display').childNodes[3].childNodes[1].style.visibility = 'hidden';
}

function oVisible(target) {
    target.children[1].style.visibility = 'visible';
    document.querySelector('.display').childNodes[3].childNodes[1].style.visibility = 'visible';
    document.querySelector('.display').childNodes[3].childNodes[3].style.visibility = 'hidden';
}

let positions = [[0, ''], [1, ''], [2, ''], [3, ''], [4, ''], [5, ''], [6, ''], [7, ''], [8, '']], computerTurn, difficulty, first, computerGame = false;

document.getElementById('ready').addEventListener('click', () => {
    difficulty = document.getElementById('easy').checked ? true : false;
    first = document.getElementById('computer').checked ? true : false;

    computerGame = true; // to see if the computer is playing or against friend

    document.querySelector('.difficulty').style.display = 'none';
    document.querySelector('.first').style.display = 'none';
    document.getElementById('ready').style.display = 'none';

    if (first) {
        document.querySelector('.display').style.display = 'block';

        computerTurn = Math.floor(Math.random() * 2) === 0 ? 'o' : 'x';
        let placeId = random(positions);
        positions[placeId][1] = computerTurn;

        // remove grid eventlistener
        document.querySelector('.container').removeEventListener('click', shake);

        overlay();
        setTimeout(() => {
            pop.play();
            computerTurn === 'x' ? xVisible(boxes[placeId]) : oVisible(boxes[placeId]);
        }, 1000);
    }
    else {
        document.querySelector('.select').style.display = 'flex';
    }
});

document.getElementById('cross').addEventListener('click', () => {
    // remove grid eventlistener
    document.querySelector('.container').removeEventListener('click', shake);
    
    turn = 'x';
    computerTurn = 'o';

    overlay();
    document.querySelectorAll('.begin').forEach(section => section.style.display = 'none');
    document.querySelector('.display').style.display = 'block';
    document.querySelector('.display').childNodes[3].childNodes[1].style.visibility = 'visible';
    document.querySelector('.display').childNodes[3].childNodes[3].style.visibility = 'hidden';
});

document.getElementById('circle').addEventListener('click', () => {
    // remove grid eventlistener
    document.querySelector('.container').removeEventListener('click', shake);
    
    turn = 'o';
    computerTurn = 'x';

    overlay();
    document.querySelectorAll('.begin').forEach(section => section.style.display = 'none');
    document.querySelector('.display').style.display = 'block';
    document.querySelector('.display').childNodes[3].childNodes[3].style.visibility = 'visible';
    document.querySelector('.display').childNodes[3].childNodes[1].style.visibility = 'hidden';
});

// game logic
let boxes = document.querySelectorAll('.box');

boxes.forEach((box, index) => {
    box.addEventListener('click', e => {
        if (document.getElementById('turner').style.display !== 'block')
            return;
        
        if (computerGame) {
            if (difficulty) {
                pop.play();

                // make unclickable now to allow only one click
                box.style.pointerEvents = 'none';

                // make the opponent's piece visible
                computerTurn === 'o' ? xVisible(e.target) : oVisible(e.target);

                // update positions[]
                positions[index][1] = changeTurn(computerTurn);

                // checkWin
                if (checkWinMinimax(changeTurn(computerTurn), positions) || (positions[0][1] !== '' && positions[1][1] !== '' && positions[2][1] !== '' && positions[3][1] !== '' && positions[4][1] !== '' && positions[5][1] !== '' && positions[6][1] !== '' && positions[7][1] !== '' && positions[8][1] !== ''))
                    checkWin();
                else {
                    // computer's turn
                    let placeId = random(positions);
                    positions[placeId][1] = computerTurn;

                    setTimeout(() => {
                        pop.play();
                        computerTurn === 'x' ? xVisible(boxes[placeId]) : oVisible(boxes[placeId]);

                        // checkWin
                        if (checkWinMinimax(computerTurn, positions) || (positions[0][1] !== '' && positions[1][1] !== '' && positions[2][1] !== '' && positions[3][1] !== '' && positions[4][1] !== '' && positions[5][1] !== '' && positions[6][1] !== '' && positions[7][1] !== '' && positions[8][1] !== ''))
                            checkWin();
                    }, 500);
                }
            }
            else {
                pop.play();

                // make unclickable now to allow only one click
                box.style.pointerEvents = 'none';

                // make the opponent's piece visible
                computerTurn === 'o' ? xVisible(e.target) : oVisible(e.target);

                // update positions[]
                positions[index][1] = changeTurn(computerTurn);

                // checkWin
                if (checkWinMinimax(changeTurn(computerTurn), positions) || (positions[0][1] !== '' && positions[1][1] !== '' && positions[2][1] !== '' && positions[3][1] !== '' && positions[4][1] !== '' && positions[5][1] !== '' && positions[6][1] !== '' && positions[7][1] !== '' && positions[8][1] !== ''))
                    checkWin();
                else {
                    // computer's turn
                    let placeId = minimax(computerTurn, positions).id;
                    positions[placeId][1] = computerTurn;

                    setTimeout(() => {
                        pop.play();
                        computerTurn === 'x' ? xVisible(boxes[placeId]) : oVisible(boxes[placeId]);

                        // checkWin
                        if (checkWinMinimax(computerTurn, positions) || (positions[0][1] !== '' && positions[1][1] !== '' && positions[2][1] !== '' && positions[3][1] !== '' && positions[4][1] !== '' && positions[5][1] !== '' && positions[6][1] !== '' && positions[7][1] !== '' && positions[8][1] !== ''))
                            checkWin();
                    }, 500);
                }
            }
        }
        else {
            // play sound
            pop.play();

            // VERY IMPORTANT. TO ALLOW ONLY 1 CLICK. MAKE IT UNCLICKABLE NOW
            box.style.pointerEvents = 'none';

            if (turn === 'x') {
                // make x visible
                xVisible(e.target);

                // update positions[]
                positions[index][1] = turn;

                // change turn
                turn = changeTurn(turn);

                checkWin();
            }
            else {
                // make x visible
                oVisible(e.target);
                
                // update positions[]
                positions[index][1] = turn;
                
                // change turn
                turn = changeTurn(turn);

                checkWin();
            }
        }
    });
});

function changeTurn(turn) {
    return turn === 'x' ? 'o' : 'x';
}

function emptyPlaces(arr) {
    let array = [];
    
    arr.forEach((element, index) => {
	    if (element[1] === '')
        array.push(index);
    });

    return array;
}

function checkWinMinimax(turn, arr) {            
    let pos = [];
    
    turn === 'o' ? arr.forEach((element, index) => pos[index] = element[1] === 'o' ? true : false)
                 : arr.forEach((element, index) => pos[index] = element[1] === 'x' ? true : false);
                 
    return pos[0] && pos[1] && pos[2] ? true :
           pos[3] && pos[4] && pos[5] ? true :
           pos[6] && pos[7] && pos[8] ? true :
           pos[0] && pos[3] && pos[6] ? true :
           pos[1] && pos[4] && pos[7] ? true :
           pos[2] && pos[5] && pos[8] ? true :
           pos[0] && pos[4] && pos[8] ? true :
           pos[2] && pos[4] && pos[6] ? true : false;
}
        
// Hard Difficulty
function minimax(turn, arr) {
    if (checkWinMinimax(changeTurn(turn), arr)) {
            // calling changeturn because we want to see if the previous turn was win
            // last case id doesnt matter so put anything (-1)
        return { id: -1, evaluation: turn === computerTurn ? -10 : 10 }; // if it is computers turn currently, then lost
    }
    else if (arr[0][1] !== '' && arr[1][1] !== '' && arr[2][1] !== '' && arr[3][1] !== '' && arr[4][1] !== '' && arr[5][1] !== '' && arr[6][1] !== '' && arr[7][1] !== '' && arr[8][1] !== '')
        return { id: -1, evaluation: 0 };
    else {
        let empty = emptyPlaces(arr), moves = [];

        empty.forEach(place => {
            arr[place][1] = turn;
            // minimax returns an object (see last line and first lines)
            moves.push({ id: place, evaluation: minimax(changeTurn(turn), arr).evaluation });
            // console.log(moves, turn);
            arr[place][1] = ''; // added in the previous step for possibilities. now for actual; remove
        });
                
        // sort according to evaluation
        moves.sort((a, b) => a.evaluation - b.evaluation);
                
        // return object with max evaluation if it is computerTurn
        return turn === computerTurn ? moves[moves.length - 1] : moves[0];
    }
}

// Easy Difficulty
function random(arr) {
    let empty = emptyPlaces(arr);

    return empty[Math.floor(Math.random() * empty.length)];
}

// // computer game takes the moves array and counter and decides moves according to the counter and array
// function game1x() {
//     // circular fashion box variables. 
//     /*
//         0 1 2
//         7 8 3
//         6 5 4
//     */

//     let b = [[boxes[0], 0], [boxes[1], 1], [boxes[2], 2], [boxes[5], 5], [boxes[8], 8], [boxes[7], 7], [boxes[6], 6], [boxes[3], 3], [boxes[4], 4]];
//     let base, diff, c; // a is for corners and b is for edges

//     if (counter === 0) {
//         let firstMove = Math.floor(Math.random() * 9);

//         if (firstMove === 0 || firstMove === 2 || firstMove === 4 || firstMove === 6) {
//             base = 0;
//             diff = firstMove;
//         }

//         computerMovex(counter, b[firstMove][1], b[firstMove][0]);
//     }
//     else if (counter === 1) {
//         if (base === 0) {
//             if (adjust(moves[1] - diff) === base + 3 || adjust(moves[1] - diff) === base + 5) {
//                 c = Math.floor(Math.random() * 3);
//                 c === 0 ? computerMovex(counter + 1, b[adjust(base + diff + 2)][1], b[adjust(base + diff + 2)][0]) :
//                 c === 1 ? computerMovex(counter + 1, b[a + 8][1], b[a + 8][0]) :
//                 computerMovex(counter + 1, b[a + 6][1], b[a + 6][0]);
//             }
//         }
//     }
//     else if (counter === 3) {
//         if (a === 0) {
//             if (moves[1] === a + 3 || moves[1] === a + 5) {
//                 if (moves[2] === a + 2) {
//                     if (moves[3] === a + 1) {
//                         c = Math.floor(Math.random() * 2);
//                         c === 0 ? computerMovex(counter + 1, b[a + 8][1], b[a + 8][0]) :
//                                   computerMovex(counter + 1, b[a + 6][1], b[a + 6][0]);
//                     }
//                     else computerMovex(counter + 1, b[a + 1][1], b[a + 1][0]);
//                 }
//                 else if (moves[2] === a + 6) {
//                     if (moves[3] === a + 7) {
//                         c = Math.floor(Math.random() * 2);
//                         c === 0 ? computerMovex(counter + 1, b[a + 8][1], b[a + 8][0]) :
//                                   computerMovex(counter + 1, b[a + 2][1], b[a + 2][0]);
//                     }
//                     else computerMovex(counter + 1, b[a + 7][1], b[a + 7][0]);
//                 }
//                 else {
//                     if (moves[3] === a + 4)
//                         computerMovex(counter + 1, b[a + 8][1], b[a + 8][0]);
//                     else computerMovex(counter + 1, b[a + 7][1], b[a + 7][0]);
//                 }
//             }
//         }
//     }
// }

// function game2x() {

// }

// function computerMovex(indexing, boxNo, box) {
//     pop.play();

//     // change turn
//     turn = '0';

//     // modify array
//     moves[indexing] = boxNo;

//     // make that box unclickable
//     box.style.pointerEvents = 'none';

//     // make visible
//     xVisible(box);
// }

// function adjust(value) {
//     if (value < 0)
//         value += 8;
//     else if (value > 7)
// }