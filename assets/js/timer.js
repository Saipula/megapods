const FULL_DASH_ARRAY = 283;
var day = new Date();
const countDownData = new Date(day.getFullYear(), day.getMonth(), day.getDate()+1, 0, 0, 0, 0).getTime();

var countDownFunction = setInterval(function () {
    // Получение оставшегося времени
    var now = new Date().getTime();
    let timeLet = countDownData - now;

    // Ковертация в ч/м/с
    var hours = GetHours(timeLet);
    var minutes = GetMinutes(timeLet);
    var seconds = GetSeconds(timeLet);

    // // Отобращение времени в строках
    // document.getElementById("hours_label").innerHTML = hours;
    // document.getElementById("minutes_label").innerHTML = minutes;
    // document.getElementById("seconds_label").innerHTML = seconds;

    // // Уменьшение кругов
    // document.getElementById("hours__path-remaining").style.strokeDasharray = calculateCircleDasharray(hours, 24);
    // document.getElementById("minutes__path-remaining").style.strokeDasharray = calculateCircleDasharray(minutes, 60);
    // document.getElementById("seconds__path-remaining").style.strokeDasharray = calculateCircleDasharray(seconds, 60);

    // Отображение времени в верхнем таймере
    document.getElementById("timer_top-tenH").innerHTML = Math.floor(hours/10);
    document.getElementById("timer_top-oneH").innerHTML = hours%10;
    document.getElementById("timer_top-tenM").innerHTML = Math.floor(minutes/10);
    document.getElementById("timer_top-oneM").innerHTML = minutes%10;
    document.getElementById("timer_top-tenS").innerHTML = Math.floor(seconds/10);
    document.getElementById("timer_top-oneS").innerHTML = seconds%10;
}, 1000);

function calculateCircleDasharray(time, max) {
    return `${(time / max * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
}

function GetHours(time){
    return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}

function GetMinutes(time){
    return Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
}

function GetSeconds(time){
    return Math.floor((time % (1000 * 60)) / 1000);
}