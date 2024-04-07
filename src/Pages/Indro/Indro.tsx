import React from 'react'
import { TypewriterEffect } from "../../components/ui/typewriter-effect";
import { useNavigate } from 'react-router-dom';
const Indro = () => {
    const navigate=useNavigate()
    const words = [
        {
          text: "What's ",
        },
        {
          text: "our ",
        },
        {
          text: "task ",
        },
        {
          text: "for ",
        },
        {
          text: "today.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];

      const start=()=>{
        navigate('/watch')
      }
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
    <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
    Work today for a freer tomorrow.
    </p>
    <TypewriterEffect words={words} />
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
      <button onClick={start} className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
        Let's start
      </button>
     
    </div>
  </div>
  )
}

export default Indro
