let [hour,minute,second,milisecond]=[0,0,0,0];
  let stopWatch=document.querySelector(".stopWatch");
  let startBtn=document.querySelector("#start-btn");
  let stopBtn=document.querySelector("#stop-btn");
  let resetBtn=document.querySelector("#reset-btn");

  let time=null;

  let StopWatch=()=>{
    milisecond++;
    if(milisecond===60){
      milisecond=0;
      second++;
      if(second===60){
        second=0;
        minute++;
        if(minute===60){
          minute=0;
          hour++;
          if(hour===24){
            hour=0;
          }
        }
      }
    }
    stopWatch.textContent=`${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}:${String(milisecond).padStart(2,"0")}`;
  }
  
function Start(){
  if(time!==null){
    clearInterval(time);
  }
  time=setInterval(StopWatch, 16.5);
}

function Stop(){
  if(time!==null)
  clearInterval(time);
}

function Reset(){
  clearInterval(time);
  [hour,minute,second,milisecond]=[0,0,0,0];
  stopWatch.textContent=`00:00:00:00`;
}
  