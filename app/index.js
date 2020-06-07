import clock from "clock";
import document from "document";
import { me as device } from "device";

//For proper fitbit spacing
if (!device.screen) device.screen = { width: 348, height: 250 };

// Update the clock every second
clock.granularity = "seconds";

let seconds_group = document.getElementById('seconds_group');
let minutes_group = document.getElementById('minutes_group');
let hours_group = document.getElementById('hours_group');
let seconds = document.getElementById("seconds");

let hourRadius = device.screen.width * .70;
let minuteRadius = device.screen.width * .53;

let getMinSecX = (val,radius) => radius * Math.cos(Math.PI * val / 30 + .98*Math.PI);
let getMinSecY = (val,radius) => radius * Math.sin(Math.PI * val / 30 + .98*Math.PI);

let getHourX = (hour,radius) => radius * Math.cos(Math.PI * hour / 6 + .98*Math.PI);
let getHourY = (hour,radius) => radius * Math.sin(Math.PI * hour / 6 + .98*Math.PI);

function updateClock(evt) {
  //for testing
  //let today = new Date(2020, 3, 3, 2, 15, 0);
  let today = evt.date;
  let secs = today.getSeconds();
  let mins = today.getMinutes();
  let hours = today.getHours() % 12;

  for (let ind = 0; ind < 12; ind += 1){
    //seconds_group.children[ind].x = getMinSecX(ind*5 - secs, 50);
    //seconds_group.children[ind].y = getMinSecY(ind*5 - secs, 50);

    minutes_group.children[ind].x = getMinSecX(ind*5 - mins, minuteRadius);
    minutes_group.children[ind].y = getMinSecY(ind*5 - mins, minuteRadius);
    
    hours_group.children[ind].x = getHourX(ind - hours - mins/60, hourRadius);
    hours_group.children[ind].y = getHourY(ind - hours - mins/60, hourRadius);
  }

  seconds.text = secs < 10 ? '0' + secs : secs;
}

// Update the clock every tick event
clock.ontick = (evt) => updateClock(evt);