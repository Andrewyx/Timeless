let [milliseconds,seconds,minutes,hours] = [0,10,0,0]; // starting time is 10 seconds
let timerRef = document.querySelector('#timerDisplay');
let int = null;
let timerStarted = false;


document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
    timerStarted = true;
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,10,0,0];
    timerRef.innerHTML = '00 : 10 : 00 : 000 ';
    score = 0;
    
});

function displayTimer(){
    milliseconds-=10;
    if(milliseconds < 0){
        milliseconds = 990;
        seconds--;
        if(seconds < 0){
            seconds = 59;
            minutes--;
            if(minutes < 0){
                minutes = 59;
                hours--;
            }
        }
    }
    if(hours == 0 && minutes == 0 && seconds == 0 && milliseconds == 0) {
        clearInterval(int);
        timerRef.innerHTML = 'Time\'s up!';
        return;
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}




