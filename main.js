// Setando datas para os countdowns
const newYear = "1 Jan 2022";
const christmas = "25 Dec 2021";
const halloween = "31 Oct 2021";
const valentines = "12 Jun 2022";

// Pegando os elemntos DOM do HTML

const daysNum = document.getElementById('days-num');
const hoursNum = document.getElementById('hours-num');
const minutesNum = document.getElementById('minutes-num');
const secondsNum = document.getElementById('seconds-num');
const title = document.getElementById('title');

// Configuração do countdown

/*
OBSERVAÇÕES:
1) A variável newDate se refere a data para o Ano Novo.
2) Na operação "newDate - todaysDate" está dada em milisegundos, por isso na constante sec esta operação está dividida por 1000, para que o tempo da constante sec esteja em segundos.
*/
function countdown(someDate) {
    var newDate = new Date(someDate);
    const todaysDate = new Date();

    const sec = (newDate - todaysDate)/1000;
    const days = Math.floor(sec/3600/24);
    const hours = Math.floor(sec/3600%24);
    const minutes = Math.floor(sec/60%60);
    const seconds = Math.floor(sec%60);

    daysNum.innerHTML = `<p>${days}</p>`;
    hoursNum.innerHTML = `<p>${hours}</p>`;
    minutesNum.innerHTML = `<p>${minutes}</p>`;
    secondsNum.innerHTML = `<p>${seconds}</p>`;

    if (hours < 10) {
        hoursNum.innerHTML = `<p>0${hours}</p>`;
    }
    if (minutes < 10) {
        minutesNum.innerHTML = `<p>0${minutes}</p>`;
    }
    if (seconds < 10) {
        secondsNum.innerHTML = `<p>0${seconds}</p>`;
    }
}

var pageDefault = setInterval(countdown, 1000, newYear);

title.addEventListener('click', ()=>{
    clearInterval(pageDefault);
    clearInterval(dayChristmas);
    clearInterval(dayHalloween);
    clearInterval(dayValentines);

    let userDate = prompt("Let us know what date are you excited for: Christmas, Valentine's Day or Halloween");
    
    if (userDate == 'christmas' || userDate == 'Christmas') {
        title.innerHTML = 'Christmas';
        var dayChristmas = setInterval(countdown, 1000, christmas);
    } else if (userDate == 'halloween' || userDate == 'Halloween' || userDate == 'halloweens' || userDate == "halloween's") {
        title.innerHTML = 'Halloween';
        var dayHalloween = setInterval(countdown, 1000, halloween);
    } else if (userDate == 'valentine' || userDate == 'Valentine' || userDate == 'Valentines' || userDate == 'valentines' || userDate == "Valentine's" || userDate == "valentine's" || userDate == "valentine's day" || userDate == "Valentine's Day") {
        title.innerHTML = "Valentine's Day";
        var dayValentines = setInterval(countdown, 1000, valentines);
    }
})