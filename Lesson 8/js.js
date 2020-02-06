// // let timerID = setTimeout(sayHello, 3000 );
// // clearTimeout(timerID);

// let timerID = setInterval(sayHello, 3000 );
// // clearTimeout(timerID);

// function sayHello() {
//     console.log('Hello World');
// }

// let timerId = setTimeout(function lockDown() {
//     console.log('Hello');
//     setTimeout(lockDown, 3000);
// });

let button = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        }else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
} 

button.addEventListener('click', myAnimation);


let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.first')) {
        console.log('qq')
    }
})    
