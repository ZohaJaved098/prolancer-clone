"use client"

import { FaRegHeart, FaTag, FaBolt, FaCheck, FaCheckCircle } from "react-icons/fa"
import { useState } from "react";

export default function Services(){
    const service=[
        {
            id: 1,
            sellerImg: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-mentatdgt-1138903-80x80.jpg',
            seller: 'Bayley Robertson',
            deliveryTime: '1-3 Days',
            service: 'I will translate english to japanese or japanese to e..',
            tag: 'Translation',
            price: '5.00',
            featured: true,
            verified: false,
            images: [
                { id: 1, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/translate-600x399.jpg"},
                { id: 2, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/ads-600x399.jpg"},
                { id: 3, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/comunity-600x399.jpg"},
                { id: 4, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/app-dev-600x399.jpg"},
            ]
        },
        {
            id: 2,
            sellerImg: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-80x80.jpg',
            seller: 'David Parker',
            deliveryTime: '1-3 Weeks',
            service: 'I will do shopify SEO for 1st page ranking on google',
            tag: 'SEO',
            price: '10.00',
            featured: false,
            verified: true,
            images: [
                { id: 1, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-13-600x399.jpg"},
                { id: 2, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/seo2-600x399.jpg"},
                { id: 3, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/app-dev-600x399.jpg"},
                { id: 4, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-14-600x399.jpg"},
            ]
        },
        {
            id: 3,
            sellerImg: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-pixabay-220453-80x80.jpg',
            seller: 'Harry Olson',
            deliveryTime: '1-3 Weeks',
            service: 'I will be your android app developer for android app ..',
            tag: 'Mobile APP Development',
            price: '20.00',
            featured: false,
            verified: true,
            images: [
                { id: 1, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-6-600x399.jpg"},
                { id: 2, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/app-dev-600x399.jpg"},
                { id: 3, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-10-600x399.jpg"},
                { id: 4, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-9-600x399.jpg"},
            ]
        },
        {
            id: 4,
            sellerImg: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-mentatdgt-1138903-80x80.jpg',
            seller: 'Bayley Robertson',
            deliveryTime: '1-3 Weeks',
            service: 'I will teach google ads adwords over zoom, live sessi..',
            tag: 'Marketing',
            price: '20.00',
            featured: false,
            verified: false,
            images: [
                { id: 1, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-11-600x399.jpg"},
                { id: 2, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/ads-600x399.jpg"},
                { id: 3, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-13-600x399.jpg"},
                { id: 4, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-12-600x399.jpg"},
            ]
        },
        {
            id: 5,
            sellerImg: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-874158-80x80.jpg',
            seller: 'Chenai Simon',
            deliveryTime: '2-3 Months',
            service: 'I will be your community manager in english or spanish',
            tag: 'Management',
            price: '80.00',
            featured: false,
            verified: true,
            images: [
                { id: 1, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-11-600x399.jpg"},
                { id: 2, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/comunity-600x399.jpg"},
                { id: 3, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-5-600x399.jpg"},
                { id: 4, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-1-600x399.jpg"},
            ]
        },
        {
            id: 6,
            sellerImg: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-andrea-piacquadio-3777566-80x80.jpg',
            seller: 'David Parker',
            deliveryTime: '6 Months',
            service: 'I will do SEO backlinks with blogger outreach for hig..',
            tag: 'Link Building',
            price: '40.00',
            featured: true,
            verified: true,
            images: [
                { id: 1, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-4-600x399.jpg"},
                { id: 2, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/seo-600x399.jpg"},
                { id: 3, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-2-600x399.jpg"},
                { id: 4, img: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-3-600x399.jpg"},
            ]
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(Array(service.length).fill(0)); 
    
    const handleDotClick = (serviceIndex, imageIndex) => {
        const newIndices = [...currentIndex];
        newIndices[serviceIndex] = imageIndex; 
        setCurrentIndex(newIndices);
    };

    return(
        <div className="w-full h-auto py-5 bg-white">
            <div className="flex flex-col w-[80%] m-auto justify-center items-center ">
                <div className="flex flex-col w-[60%] max-lg:w-full justify-center items-center mb-20 ">
                    <h1 className="text-[#333] text-6xl font-bold text-center mb-5" >Most popular services</h1>
                    <p className="text-[#333] text-lg font-light leading-6 text-center">Uniquely promote adaptive quality vectors rather than stand-alone e-markets. pontificate alternative architectures whereas iterate.</p>
                </div>
                <div className="flex flex-wrap w-full justify-around items-center text-black gap-2">
                    {service.map((serviceItem, serviceIndex)=>(
                        <div key={serviceItem.id} className="w-[30%] max-lg:w-[40%] max-md:w-[80%] h-auto flex flex-col relative shadow-container-shadow rounded-2xl mb-10">
                            <div className="rounded-t-2xl w-full h-[50%] relative overflow-hidden">
                                <div className="w-full flex h-full transition-transform duration-500"
                                    style={{transform: `translateX(-${currentIndex[serviceIndex] * 100}%)`}}>
                                    {serviceItem.images.map((imageItem) => (
                                        <img key={imageItem.id} className="w-[210px] rounded-t-2xl" src={imageItem.img} alt="" style={{ flex: "0 0 100%" }}/>
                                    ))}
                                </div>
                                <div className="absolute bottom-3 -right-2 transform -translate-x-1/2 flex gap-2">
                                    {serviceItem.images.map((_, imageIndex) => (
                                        <div key={imageIndex} onClick={() => handleDotClick(serviceIndex,imageIndex)} className={`w-2 h-2 rounded-full bg-white ${imageIndex === currentIndex[serviceIndex] ? "" : "opacity-60"} cursor-pointer`}></div>
                                    ))}
                                </div>
                                <div className={`${serviceItem.featured? `absolute`: `hidden`} bg-[#6787FE] w-[40%]  top-4 -left-9 p-1 overflow-hidden -rotate-45`}>
                                    <span className="text-white text-center flex justify-center  text-xs">
                                        Featured 
                                        <FaBolt className="ml-1 mt-1" />
                                    </span>
                                </div>
                            </div>
                            <div className="absolute top-52 max-2xl:top-48 max-xl:top-36 max-lg:top-40 max-md:top-64 left-4 rounded-full border-white border-4" >
                                <img className="rounded-full w-[50px]" src={serviceItem.sellerImg} alt="" />
                            </div>
                            <div className="flex flex-col h-[50%] p-5 gap-4 mt-3 ">
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <div className="flex gap-2">  
                                            <h6 className="font-bold" >{serviceItem.seller}</h6> 
                                            <FaCheckCircle className={`${serviceItem.verified? `block`: `hidden`} text-[#6787FE] mt-1`}/>
                                        </div>
                                        <span className="text-[#333] text-[13px]" >Delivery: <b className="ml-2"> {serviceItem.deliveryTime} </b></span>
                                    </div>
                                    <div>
                                        <FaRegHeart/>
                                    </div>
                                </div>
                                <div className="w-[90%]">
                                    <h3 className="text-xl text-[#333] leading-8 font-semibold"> {serviceItem.service} </h3>
                                </div>
                                <div className="flex justify-between w-full">
                                    <div className="flex justify-center items-start text-[#656464]" >
                                        <FaTag className="mt-1"/>
                                        <span className="ml-3">{serviceItem.tag}</span>
                                    </div>
                                    <div className="flex items-end">
                                        <span className="text-[#6787FE]" >$ {serviceItem.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}