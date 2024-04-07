import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../utils/cn";
import { Spotlight } from "../../components/ui/Spotlight";


const Watch = () => {
  const initialTime = localStorage.getItem("stopwatchTime") ? parseInt(localStorage.getItem("stopwatchTime")!) : 0;

  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now() - time;
      intervalRef.current = window.setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, time]);

  const startStopwatch = () => {
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    localStorage.setItem("stopwatchTime", time.toString());
  }, [time]);

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    const centiseconds = Math.floor((milliseconds % 1000) / 10)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}.${centiseconds}`;
  };

  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />


      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          {formatTime(time)}
        </h1>
        <div className="flex justify-center mt-4 md:space-x-5">
          <button
           className="w-20 h-10 rounded-xl bg-white text-black border border-black text-sm md:w-24"
            onClick={startStopwatch}
          >
            {isRunning ? "Stop" : "Start"}
          </button>
          <button
       className="w-20 h-10 rounded-xl bg-white text-black border border-black text-sm md:w-24"
            onClick={resetStopwatch}
          >
            Reset
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Watch;
