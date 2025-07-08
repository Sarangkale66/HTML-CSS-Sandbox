import { useState } from 'react'

const App = () => {
  let [time,setTime]=useState({hr:0,min:0,sec:0,mili:0});
  let [status,setStatus]=useState(null);
  let hour=time.hr;
  let min=time.min;
  let second=time.sec;
  let mili=time.mili;

  let handleStart=()=>{
    if(time!==null){
      setStatus(null);
    }
    setStatus(setInterval(()=>{
      mili+=1;
      if(mili===100){
        second+=1;
        mili=0;
        if(second===60){
          min+=1;
          second=0;
          if(min===60){
            min=0;
            hour+=1;
            if(hour===24){
              hour=0;
            }
          }
        }
      }

      setTime({hr:hour,min:min,sec:second,mili:mili});
    },10));
  }

  let handleStop=()=>{
    clearInterval(status);
  }

  let handleReset=()=>{
    clearInterval(status);
    setTime({hr:0,min:0,sec:0,mili:0});
  }


  return (
    <div className='main'>
      <div className="stopWatch">
        <div className="display">
          {`${time.hr}:${time.min}:${time.sec}:${time.mili}`}
        </div>
        <div className="options">
          <button onClick={handleStart}>START</button>
          <button onClick={handleStop}>STOP</button>
          <button onClick={handleReset}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default App;
