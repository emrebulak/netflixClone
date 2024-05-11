import { baseImgUrl } from "../constants"

const DetailDisplay = ({ title, data }) => {
    return (
        <div className="mb-3">
            <h1 className="text-xl font-semibold">{title}</h1>

            <div className="flex gap-5 my-3">

                {
                    data?.map((item, index) => item.logo_path ? (
                        <div key={`${title}_${index}`} className="bg-white py-1 px-2 rounded-md">
                            <img
                                className="w-[100px] h-[40px] object-contain"
                                src={baseImgUrl + item.logo_path}
                            />
                        </div>
                    ) : (
                        <span key={`${title}_${index}`} className="border py-1 px-2 rounded-md">{item.name}</span>
                    ))

                }

            </div>
        </div>
    )
}

export default DetailDisplay