import { FaRegUser, FaRegFile, FaRegStar, FaOpencart } from "react-icons/fa"
// import { FaUser } from "react-icons/fa6"
export default function Stats(){
    const stats=[
        {
            id:1,
            stats: '937M',
            title: 'Total Seller',
            icon: <FaRegUser className="w-10 h-10 max-md:w-16 max-md:h-16 text-[#9951d0] "/>,
            bgColor: 'bg-[#9951d01a]',
        },
        {
            id:2,
            stats: '640K',
            title: 'Total Video edit',
            icon: <FaRegFile className="w-10 h-10 max-md:w-16 max-md:h-16 text-[#1abb69] "/>,
            bgColor: 'bg-[#1abb691a]',
        },
        {
            id:3,
            stats: '546M',
            title: 'Positive Review',
            icon: <FaRegStar className="w-10 h-10 max-md:w-16 max-md:h-16 text-[#f78f0e] "/>,
            bgColor: 'bg-[#f78f0e1a]',
        },
        {
            id:4,
            stats: '765K',
            title: 'Order recieved',
            icon: <FaOpencart className="w-10 h-10 max-md:w-16 max-md:h-16 text-[#f5164a] "/>,
            bgColor: 'bg-[#fee7ed]',
        },
    ]
    return(
        <div className="w-full h-[60vh] max-md:h-auto py-10 bg-white">
            <div className="w-[80%] flex max-md:flex-col justify-between items-center m-auto">
                {stats.map((item)=>(
                    <div key={item.id} className="flex flex-col justify-center items-center mt-20">
                        <span className={`p-3 flex justify-center items-center rounded-full ${item.bgColor}`} > {item.icon} </span>
                        <span className="font-bold text-5xl text-black leading-relaxed tracking-wide"> {item.stats} </span>
                        <p className="font-light text-[#333]"> {item.title} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}