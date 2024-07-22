import React, { useEffect, useState } from "react";
type Props={
    size:number
}
function ProgressBar({size}:Props) {
    const [progress, setProgress] = useState <number>(0);
    useEffect(()=>{
        const timeout = setInterval(()=> setProgress(size), 1000)
        return ()=> clearTimeout(timeout);
    },[size])
  return (
    <React.Fragment>
      <div className="h-fit rounded-md bg-slate-50/5 w-full">
        <div
          className="h-2 bg-[#40ADE5] rounded-md transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </React.Fragment>
  );
}

export default ProgressBar;
