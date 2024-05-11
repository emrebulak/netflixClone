const Error = ({ message, event }) => {
    return (
        <div className='bg-[#0000007e] w-full h-screen absolute inset-0 flex flex-col gap-3 justify-center items-center'>
            <div className="bg-red-500 text-white p-4 rounded flex flex-col gap-3">
                <p>Bir hata oluştu</p>
                <h1 className="font-semibold">{message}</h1>
            </div>

            <button onClick={event} className="p-2 text-black bg-gray-200 rounded hover:bg-gray-300 transition">Tekrar Deneyin</button>
        </div>
    )
}

export default Error