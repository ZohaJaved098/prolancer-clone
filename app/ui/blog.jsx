
export default function Blog(){
    const blogs=[
        {
            id: 1,
            sellerImg: 'https://themebing.com/wp/prolancer/wp-content/uploads/2021/04/pexels-pixabay-220453-80x80.jpg',
            seller: ' - Bayley Robertson',
            type: 'Interview',
            title: 'What are the advantages of being a freelancer?',
            images: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-4-600x399.jpg",
        },
        {
            id: 2,
            sellerImg: 'https://secure.gravatar.com/avatar/48dc418ef002957c6c867cb40aa191cc?s=96&d=mm&r=g',
            seller: ' - David Parker',
            type: 'Information',
            title: 'Tips for Answering the Top 5 Freelance Job Interview...',
            images: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-15-600x399.jpg",
        },
        {
            id: 3,
            sellerImg: 'https://secure.gravatar.com/avatar/acdbf3fcda4c1f108221a12844f087f0?s=96&d=mm&r=g',
            seller: ' - Harry Olson',
            type: 'Education',
            title: 'Hire The Best Freelancers From Around The World',
            images: "https://themebing.com/wp/prolancer/wp-content/uploads/2021/09/img-14-600x399.jpg",
        },
    ];
    return(
        <div className="w-full h-auto py-5 bg-white">
            <div className="flex flex-col gap-5 w-[80%] h-full m-auto justify-center items-center">
                <div className="flex flex-col w-[60%] max-lg:w-full justify-center items-center mb-20 ">
                    <h1 className="text-[#333] text-6xl font-bold text-center mb-5" >Most popular services</h1>
                    <p className="text-[#333] text-lg font-light leading-6 text-center">Uniquely promote adaptive quality vectors rather than stand-alone e-markets. pontificate alternative architectures whereas iterate.</p>
                </div>
                <div className="flex flex-wrap gap-5 max-lg:gap-10 max-md:gap-14 justify-center">
                    {blogs.map((blog)=>(
                        <div key={blog.id} className="flex flex-col justify-between w-[30%] max-lg:w-[40%] max-md:w-[60%] h-full">
                            <img className="w-full h-[200px] rounded-t-lg" src={blog.images} alt="" />
                            <div className="flex flex-col justify-between gap-3" >
                                <div className="flex mt-2 justify-evenly items-center">
                                    <div className="flex justify-between items-center">
                                        <img className="rounded-full w-[50px] mr-2" src={blog.sellerImg} alt="" />
                                        <p className=" text-blue-600"> {blog.seller} </p>
                                    </div>
                                    <span className="text-[#333]"> | {blog.type} </span>
                                </div>
                                <p className="text-black font-medium mt-5 text-lg"> {blog.title} </p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}