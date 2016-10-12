
var displayClock = function(){
	var currentDate = new Date();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    var displayHour = document.getElementById("hours");
	if(hour<10){
		hour = '0'+hour;
	}

	var displayMinute = document.getElementById("minutes");
	if (minute<10){
		 minute='0'+ minute + ':';
		}

	var displaySecond = document.getElementById("seconds");
	if(second<10){
		 second = '0'+ second;
		}

	var timeString = hour.toString()+minute.toString()+second.toString();
	var color = '#'+timeString;	
	document.getElementById("clock").style.background=color;
	document.getElementById("clock-box").innerHTML=color;

}
var currentTime = function(){
	var timeoutID = window.setInterval(displayClock,1000);
	}
	currentTime();


