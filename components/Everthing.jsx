"use client"
import AboutUs from "@/components/AboutUs";
import Header from "@/components/Header";
import Table from "@/components/Table";
import { useState } from "react"

export default function Everthing({ moonData, marsData }) {
    const [selection, setSelection] = useState()

    return (
        <div className="">
            <Header selection={selection} setSelection={setSelection} />
            <div className="min-h-[700px] text-white bg-gradient-to-b from-[rgb(17,23,41)] to-blue-950">
                <Table selection={selection} moonData={moonData} marsData={marsData} />
                <div className="" id="about-us">
                    <div className="h-[80px]"></div>
                    <AboutUs />
                    <div className="h-[70px]"></div>
                </div>
            </div>
        </div>
    )
}