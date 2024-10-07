import { useState, useEffect } from "react"

export default function Table({ selection, moonData, marsData }) {
    const [data, setData] = useState()

    useEffect(() => {
        if (selection == "MO")  setData(moonData)
        else if (selection == "MA")  setData(marsData)
    }, [])

    useEffect(() => {
        console.log(selection)
        if (selection == "MO")  setData(moonData)
        else if (selection == "MA")  setData(marsData)
    }, [selection])
    
    return (
        <div className="">
            {selection != "Choose an option" && data &&<div className="flex justify-center">
                <div className="relative overflow-x-auto">
                    <table className="w-full min-w-[900px] text-sm text-left rtl:text-right text-gray-500 text-gray-400">
                        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 rounded-s-lg">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Group
                                </th>
                                <th scope="col" className="px-6 py-3 rounded-e-lg">
                                    Max Magnitude
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Type
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, i) => (
                                <tr className="" key={i}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
                                        {row.date}
                                    </th>
                                    <td className="px-6 py-4">
                                        {row.group}
                                    </td>
                                    <td className="px-6 py-4">
                                        {row.magnitude_max}
                                    </td>
                                    <td className="px-6 py-4">
                                        {row.type}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>}
        </div>
    )
}