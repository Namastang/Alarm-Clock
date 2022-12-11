/* 
	prompt = Display a popup box to enter the value
  after clic on ok it will store the value into the time variable
*/
let time;
let interval;
/*
	It reduce the time variable by -1 and update on the page with the timer ID.
*/
function ticktock() {
  time = time - 1;
  document.getElementById("timer").innerHTML = time;
  endTimer();
}


/* if time value is greater than 0 then only setInterval starts*/
if (time > 0) {
	/* it sets an interval on ms and call the function */
	interval = setInterval(ticktock, 1000);
}

/*

*/
function endTimer() {
	if (time === 0) {
  	alert("Time Up");
    const clock = document.getElementById('clock')
    clock.src = "https://media2.giphy.com/media/l0HlKAXJfCmTH6X3W/giphy.gif?cid=ecf05e47typpjysv250xxm17mc7derzbgqkg8hg09xs7kyhj&rid=giphy.gif&ct=g";
    clearInterval(interval);
  }
}

/* to write a function for start */
function start() {
	time = parseInt(document.getElementById('time').value);
  if (time > 0) {
	  interval = setInterval(ticktock, 1000);
  }
}
