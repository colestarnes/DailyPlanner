var entry = document.querySelector(".timeblock");
var save = document.querySelector(".saveEntry");
var timeBlock = document.querySelector(".hour"); 

// date

function renderTime(){
    var mydate = new Date(); 
    var year = mydate.getYear();  
    if(year < 1000){
        year += 1900
    }
var day = mydate.getDay(); 
var month = mydate.getMonth(); 
var daym = mydate.getDate(); 
var dayarray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
 
// time 
var currentTime = new Date(); 
var h = currentTime.getHours(); 
var m = currentTime.getMinutes(); 
var s = currentTime.getSeconds();  
var ampm = "";

if(h == 24){
    h = 0;
} else if(h > 12){ 
    h = h - 12 
    ampm = "PM"
} else if(h < 12){
    ampm = "AM"
} 
if(h === 0){
  h = 12;
 }

if(m < 10) 
m = "0" + m; 

if(s < 10){
    s = "0" + s;
} 



var myClock = document.getElementById("clockDisplay")
myClock.textContent = "" +dayarray[day]+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s+ " " +ampm;
myClock.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s+ " " +ampm;

setTimeout("renderTime()", 1000); 
renderTime(); 
} 
// save.addEventListener("click", saveEntry) 
localStorage
// function saveEntry(){ 
    
     // FINISH CODE BELOW
  // var entryText = document.getElementsByClassName("timeblock")
   // localStorage.getItem("email");
   // localStorage. 

   $(document).ready(function () {
$('.saveEntry').on('click', function () {
    var value = $(this).siblings('.')
})
   })
