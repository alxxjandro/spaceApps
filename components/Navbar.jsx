import Image from "next/image"
export default function Navbar(){
    return (
        <nav className="sticky top-0 z-40">
            <div className="flex bg-gray-950 lg:justify-around md:justify-around justify-center ">
                <a className="flex items-center" href="https://github.com/Lughx/A-ventureros" target="blank">
                    <Image src="/boilerPlateLogo.png" width={400} height={400} className="w-12 hover:scale-105 transition duration-300 ease-in-out pt-4 md:pt-0 bg:pt-0"  />
                </a>
                <div className=" hidden lg:flex md:flex items-center min-h-[10vh] gap-x-2">
                    <a href="#home" className="bg-gray-950 px-4 py-2 rounded-lg text-white text-md font-medium hover:bg-slate-600 hover:text-gray-200 hover:scale-105 transition duration-300 ease-in-out active:bg-slate-800 active:scale-95">Home</a>
                    <a href="#about-us" className="bg-gray-950 px-4 py-2 rounded-lg text-white text-md font-medium hover:bg-slate-600 hover:text-gray-200 hover:scale-105 transition duration-300 ease-in-out active:bg-slate-800 active:scale-95">About Us</a>
                    <a href="https://www.spaceappschallenge.org/" target="blank" className="bg-gray-950 px-4 py-2 rounded-lg text-white text-md font-medium hover:bg-slate-600 hover:text-gray-200 hover:scale-105 transition duration-300 ease-in-out active:bg-slate-800 active:scale-95">Space Apps</a>
                </div>
            </div>
            <div className="md:hidden lg:hidden flex justify-center gap-x-3 py-1 pb-3 bg-slate-950 pt-5">
                    <button className="bg-slate-950 px-3 py-1 rounded-lg text-white text-md font-medium hover:bg-slate-600 hover:text-gray-200 hover:scale-105 transition duration-300 ease-in-out active:bg-slate-800 active:scale-95">Home</button>
                    <button className="bg-slate-950 px-4 py-1 rounded-lg text-white text-md font-medium hover:bg-slate-600 hover:text-gray-200 hover:scale-105 transition duration-300 ease-in-out active:bg-slate-800 active:scale-95">About Us</button>
                    <button className="bg-slate-950 px-4 py-1 rounded-lg text-white text-md font-medium hover:bg-slate-600 hover:text-gray-200 hover:scale-105 transition duration-300 ease-in-out active:bg-slate-800 active:scale-95">Space Apps</button>
            </div>
        </nav>

    )
}