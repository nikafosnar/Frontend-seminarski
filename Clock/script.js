var dayInWeek = document.getElementById('dayInWeek');
var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

function updateClock() {
    var timeNow = new Date;
    var dayInWeekNow = timeNow.getDay();
    var dayNow = timeNow.getDate() + ".";
    var monthNow = timeNow.getMonth();
    var yearNow = timeNow.getFullYear() + ".";
    var hourNow = timeNow.getHours();
    var minuteNow = timeNow.getMinutes();
    var secondNow = timeNow.getSeconds();

    if(hourNow < 10) {
        hourNow = "0" + hourNow;
    }
    if(minuteNow < 10) {
        minuteNow = "0" + minuteNow;
    }
    if(secondNow < 10) {
        secondNow = "0" + secondNow;
    }
  
    var week = ["Nedjelja,", "Ponedjeljak,", "Utorak,", "Srijeda,", "Čevrtak,", "Petak,", "Subota,"];
    var months = ["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"];
    var ids = ["dayInWeek", "day", "month", "year", "hours", "minutes", "seconds"];
    var values = [week[dayInWeekNow], dayNow, months[monthNow], yearNow, hourNow, minuteNow, secondNow];

    for(var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];    
    }
}   

function initClock() {
    updateClock();
    setInterval("updateClock()", 1);
}


