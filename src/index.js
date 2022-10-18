// let name = '';
let scorePlayer = 0;
let scoreBot = 0;

function play(player) {
    let bot = Math.floor(Math.random() * 3) + 1;

    switch (bot) {
        case 1:
            bot = 'rock';
            break;
        case 2:
            bot = 'paper';
            break;
        case 3:
            bot = 'scissor';
            break;
    }
    // console.log(player);

    const result = document.getElementById('result');
    
    if (player === bot) {
        result.textContent = 'Empate'
    } else if ((player === 'rock' && bot === 'scissor') ||
    (player === 'paper' && bot === 'rock') || 
    (player === 'scissor' && bot === 'paper')) {
        result.textContent = 'Has ganado';
        scorePlayer = scorePlayer +1;
    } else {
        result.textContent = 'Has perdido';
        scoreBot = scoreBot + 1;
    }
    console.clear();
    console.log(`Has elegido ${player} y la maquina eligio ${bot}, el puntaje esta ${scorePlayer} vs ${scoreBot}`);

}

let name = window.addEventListener('load', () => {
    console.log(prompt('hola'))
    // console.log(hola)
    // return hola;
})

console.log(name)