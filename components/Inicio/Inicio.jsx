export default function Inicio() {
    return (
        <div className="grid grid-cols-2 gap-5 p-5 h-screen" style={{ background: "linear-gradient(to right, #00c6ff, #0072ff)" }}>
            {/* Caja izquierda con el título */}
            <div className='flex flex-col justify-end'>
                <h1 className="text-6xl font-bold leading-tight text-gray-900">
                    A-VENTUREROS<br /> VAMOS A GANAR
                </h1>
                <p className="mt-4 text-lg text-gray-500">
                    Never forget a password again with the most secure and powerful KeePass password manager on iPhone, iPad and Mac.
                    <br />
                    Strongbox provides an unprecedented amount of control over your data and security, combined with an intuitive, beautiful user interface.
                </p>
            </div>
            
            {/* Segunda caja para la imagen */}
            <div className='bg-cover bg-center h-72 rounded-lg' style={{ backgroundImage: "url('')" }}>
                {/* Aquí puedes poner la imagen */}
            </div>
        </div>
    );
}
