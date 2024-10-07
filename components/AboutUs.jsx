import Image from "next/image"

const data = [
    {
        image: "/Yahir.jpeg",
        name: "Yahir Tapia"
    },
    {
        image: "/Alonso.jpg",
        name: "Alonso Parra"
    },
    {
        image: "/Jared.jpeg",
        name: "Jared Marquez"
    },
    {
        image: "/Mario.jpeg",
        name: "Mario Prieto"
    },
    {
        image: "/Myriam.jpeg",
        name: "Myriam Muruato"
    },
]

export default function AboutUs() {
    return (
        <div className="flex justify-center">
            <div className="max-w-[800px]">
                <div className="text-center">
                    <div className="text-3xl font-semibold">
                        About us
                    </div>
                    <div className="mt-3 mb-7 w-full px-6">
                        We are A-Ventureros , a team of engineers driven by our passion for space and technology. Our mission is to create more efficient and dynamic solutions, continuously pushing the boundaries of innovation and contributing to the advancement of science.
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6">
                    {data.map(member => (
                        <div className="text-center flex justify-center" key={member.name}>
                            <div className="">
                                <div>
                                    <Image className="object-cover border border-2 rounded-full h-32 w-32 " src={member.image} width={300} height={300} />
                                </div>
                                <div className="mt-2">{member.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}