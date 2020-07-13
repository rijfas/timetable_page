// Get current day,hour,minute
var today = new Date();
var day = today.getDay();
var hour = today.getHours();
var minute = today.getMinutes();
var curretHour;

// Finding the current hours in working day
if(day < 5){

  if(hour==8){
    if(minute>=30){
      curretHour = 1;
    }
  }
  else if (hour==9) {
    if(minute<30){
      curretHour = 1;
    }
    else if(minute>=30){
      curretHour = 2;
    }
  }
  else if (hour==10) {
    if(minute<30){
      curretHour = 2;
    }
    else if(minute>=30){
      curretHour = 3;
    }
  }
  else if (hour==11) {
    if(minute<30){
      curretHour = 3;
    }
    else if(minute>=30){
      curretHour = 4;
    }
  }
  else if (hour==12) {
    if(minute<30){
      curretHour = 4;
    }
    else if(minute>=30){
      curretHour = 5;
    }
  }
  else if (hour==13) {
    if(minute<30){
      curretHour = 5;
    }
  }

}
/*friday*/
else if(day==5){
  if(hour==8){
    if(minute>=30){
      curretHour = 1;
    }
  }
  else if (hour==9) {
    if(minute<20){
      curretHour = 1;
    }
    else if(minute>=20){
      curretHour = 2;
    }
  }
  else if (hour==10) {
    if(minute<10){
      curretHour = 2;
    }
    else if(minute>=10){
      curretHour = 3;
    }
  }
  else if (hour==11) {
    if(minute<0){
      curretHour = 3;
    }
    else if(minute>=0 && minute<50){
      curretHour = 4;
    }
    else if(minute>=50){
      curretHour = 5;
    }
  }
  else if (hour==12) {
    if(minute<40){
      curretHour = 5;
    }
  }
}

// highlite current hour if available
if(day<6 && curretHour){
  document.querySelector(".timetable tr:nth-child("+(day+1)+") td:nth-child("+(curretHour+1)+")").style = "background-color:red;color:white";
}

// media query for mobile
var media_query = '(max-width:768px)';
var matched = window.matchMedia(media_query).matches;

// For Mobile version table generation
if(matched)
  {
    var table = document.getElementById("myTable");
    var myNodeList = document.querySelectorAll(".timetable tr:nth-child("+(day+1)+") td");
    var row = table.insertRow(0);
    var cell = row.insertCell(0);
    cell.style = "background-color: #004B73;color: #FFFFFF;font-weight:bold";

    if(day<6){
    cell.innerHTML = document.querySelectorAll(".timetable tr:nth-child("+(day+1)+") th")[0].childNodes[0].data;
    for(var i=1;i<6;i++){
      var row = table.insertRow(i);
      var cell = row.insertCell(0);
      cell.innerHTML = myNodeList[i-1].childNodes[0].data;
      if(i==curretHour)
        cell.style = "background-color:red;color:white";
    }
  }else{
    cell.innerHTML = "Not A WorkingDay";
  }
  }
