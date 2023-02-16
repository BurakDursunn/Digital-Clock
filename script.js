function getTime(){

    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let day = now.getDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();
    
      if (hour < 10) {
        document.getElementById("hour").innerHTML = "0" + hour;
      } else {
        document.getElementById("hour").innerHTML = hour;
      }
      
      if (minute < 10) {
        document.getElementById("minute").innerHTML = "0" + minute;
      } else {
        document.getElementById("minute").innerHTML = minute;
      }
      
      if (second < 10) {
        document.getElementById("second").innerHTML = "0" + second;
      } else {
        document.getElementById("second").innerHTML = second;
      }
      
      document.getElementById("date").innerHTML= day+" / "+month+" / "+year; 
    
}
setInterval(function(){getTime();},1000);