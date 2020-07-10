var today = new Date();
var day = today.getDay();
var hour = today.getHours();
var minute = today.getMinutes();
var curretHour;
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
if(day<6 && curretHour){
  document.querySelector(".timetable tr:nth-child("+(day+1)+") td:nth-child("+(curretHour+1)+")").style = "background-color:red;color:white";
}
