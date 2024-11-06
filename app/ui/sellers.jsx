'use client'
import { FaCheckCircle, FaUserShield, FaGlobeAsia } from "react-icons/fa";
import StarRatings from 'react-star-ratings'; 

export default function Seller() {
    const bestSellers = [
        {
            
            id: 1,
            sellerImg: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-pixabay-220453-300x300.jpg',
            sellerName: 'Harry Olson',
            userType: 'Student',
            location: 'Australia',
            rating: 4.5,  
            price: '35.00',
            verified: true,
        },
        {
            id: 2,
            sellerImg: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-300x300.jpg',
            sellerName: 'David Parker',
            userType: 'Individual',
            location: 'Qatar',
            rating: 4.8,  
            price: '35.00',
            verified: true,
        },
        {
            id: 3,
            sellerImg: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-874158-300x300.jpg',
            sellerName: 'Chenai Simon',
            userType: 'Group',
            location: 'Australia',
            rating: 4.49,  
            price: '35.00',
            verified: true,
        },
        {
            id: 4,
            sellerImg: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-mentatdgt-1138903-300x300.jpg',
            sellerName: 'Bayley Robert',
            userType: 'Student',
            location: 'Germany',
            rating: 4.6,  
            price: '35.00',
            verified: true,
        },
    ];

    return (
        <div className="w-full h-full p-5 my-10 text-white">
            <div className="flex flex-col w-[80%] h-full m-auto justify-center items-center ">
                <div className="flex flex-col w-[60%] max-md:w-full justify-center items-center mb-20 ">
                    <h1 className="text-6xl font-bold text-center mb-5 ">Most popular services</h1>
                    <p className="text-lg font-light leading-6 text-center">
                        Uniquely promote adaptive quality vectors rather than stand-alone e-markets. Pontificate alternative architectures whereas iterate.
                    </p>
                </div>
                <div className="flex w-full h-[60%] max-lg:h-[30%] max-lg:flex-wrap justify-around items-center text-black gap-5">
                    {bestSellers.map((seller) => (
                        <div key={seller.id} className="w-[25%] max-lg:w-[40%] max-md:w-[70%]  h-full flex flex-col justify-center items-center shadow-container-shadow rounded-2xl p-2 max-lg:p-5 bg-white gap-5">
                            <div className="rounded-full w-full  max-lg:h-[100px] max-lg:mt-5 flex justify-center items-center p-3">
                                <img className="rounded-full w-[150px] h-[150px]" src={seller.sellerImg} alt="" />
                            </div>
                            <div className="flex flex-col justify-center items-center w-auto max-lg:mt-5 h-[200px]">
                                <div className="flex gap-2 justify-center items-center mb-2">
                                    <h2 className="font-bold text-2xl text-[#333]">{seller.sellerName}</h2>
                                    <FaCheckCircle className={`${seller.verified ? 'block' : 'hidden'} text-[#6787FE] mt-1`} />
                                </div>
                                <h4 className="text-center font-normal text-base mb-4">Hourly Rate: ${seller.price}</h4>
                                <div className=" w-[90%] h-[30px] mb-4">
                                    <StarRatings
                                        numberOfStars={5}
                                        rating={seller.rating}
                                        starRatedColor="#fd7e14"
                                        starEmptyColor="#ccc"
                                        starDimension='24px'
                                        starSpacing='3px'
                                    />
                                </div>
                                <div className="flex justify-between">
                                    <span className="flex gap-2 rounded-full py-2 px-3 text-xs text-[#4d4c4c] bg-[#6787fe1a]"><FaUserShield/> {seller.userType} </span>
                                    <span className="flex gap-2 rounded-full py-2 px-3 text-xs text-[#333] bg-[#6787fe1a]"><FaGlobeAsia/> {seller.location} </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
