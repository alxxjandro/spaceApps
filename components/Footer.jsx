import Image from "next/image";

export default function Footer() {
    return (
        <section className="py-3 bg-gray-950 text-neutral-100 flex justify-center">
            <a target="blank" href="https://github.com/Lughx/A-ventureros">
                <div className="flex">
                    <div>
                        View the code 
                    </div>
                    <i>
                        <Image 
                        className="ml-2 w-6 h-6" 
                        src="/github-mark/github-mark-white.svg" 
                        width={50} height={50}
                        />
                    </i>
                </div>
            </a>
        </section>
    )
}