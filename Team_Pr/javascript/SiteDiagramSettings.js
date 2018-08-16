
//функция для вывода времени

function startTime() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.getElementById("DateClock").innerHTML = weekday[d.getDay()] + " " + hours + ":" + mins + ":" + secs;
}
setInterval(startTime, 1000);

//функция для нижних блоков со значением

function CurrencyConverter(valNum) {
    valNum = parseFloat(valNum);
    if (valNum > 0) {
        document.getElementById("DigitsM").innerHTML = ((valNum * 6) + " " + "M");
        document.getElementById("DigitsB").innerHTML = ((valNum * 7) + " " + "B");
    }
    else {
        document.getElementById("DigitsM").innerHTML = 0 + " " + "M";
        document.getElementById("DigitsB").innerHTML = 0 + " " + "B";
    }

}





















