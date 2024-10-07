"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import TextTitle from "./TextTitle"
import { useState } from "react"
import TextH1 from "./TextH1"
import TextP from "./TextP"

export default function Header({ selection, setSelection }) {
    return (
        <div>
            <div className="h-[700px] pt-10 bg-gradient-to-b from-slate-950 to-slate-900 ">
                <div className="text-white"><TextH1 textValue={"Smart Planetary Seismic Detection"}/></div>
                <div className="text-white flex justify-center">
                    <div className="max-w-2xl flex justify-center pt-3">
                        <TextP textValue={"By filtering out noise and focusing on key signals, we provide a web-based platform that visualizes seismic events, making it easy to detect and analyze quakes efficiently across different planets."} />
                    </div>
                        
                </div>
                <form className="max-w-sm mx-auto">
                    <label htmlFor="Options" className="block mb-2 text-sm font-medium text-white flex justify-center pb-1 pt-10"><TextTitle textValue={"Select An Option"} /></label>
                    <select onInput={(e) => {
                        setSelection(e.target.value)
                    }} id="Options" className="border text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue>Choose an option</option>
                        <option value="MO">Moon</option>
                        <option value="MA">Mars</option>
                    </select>
                </form>

                <div className="flex justify-center p-10 ">
                <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0.5, scale: 0.8 }}
                            animate={{ 
                            y: [20, 0, 20], 
                            opacity: [0.8, 1], 
                            scale: [0.9, 1, 0.9], 
                            rotate: [0, 360] 
                            }}
                            transition={{
                                y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }, 
                                opacity: { duration: 2, ease: "easeInOut" }, 
                                scale: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }, 
                                rotate: { duration: 30, repeat: Infinity, ease: "easeInOut" } 
                            }}
                        >
                            <Image className={`w-full max-w-[220px] ${selection == "MA" ? "flex" : "hidden"}`}
                            src="/mars2.svg" 
                            width={300}
                            height={300}
                            alt="mars"
                            />
                        </motion.div>
                    </div>
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0.5, scale: 0.8 }}
                            animate={{ 
                            y: [20, 0, 20], 
                            opacity: [0.8, 1], 
                            scale: [0.9, 1, 0.9], 
                            rotate: [0, 360] 
                            }}
                            transition={{
                                y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }, 
                                opacity: { duration: 2, ease: "easeInOut" }, 
                                scale: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }, 
                                rotate: { duration: 30, repeat: Infinity, ease: "easeInOut" } 
                            }}
                        >
                            <Image className={`w-full max-w-[220px] ${selection == "MO" ? "flex" : "hidden"}`}
                            src="/moon3.svg" 
                            width={300}
                            height={300}
                            alt="moon"
                            />
                        </motion.div>
                    </div>
                </div>  
            </div>
        </div>
    )
}