
const features=[
    {
    id:1,
    img: 'https://themebing.com/wp/prolancer/wp-content/uploads/elementor/thumbs/s-3-pgwx0igrflcw8bh33ew6prwbfkfg82t027tk1j0zbk.jpg',
    heading: 'Reliable Dealings',
    paragraph: 'Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore'
},
    {
    id:2,
    img: 'https://themebing.com/wp/prolancer/wp-content/uploads/elementor/thumbs/s-1-pgwx03fce8sb2k2xj8e5lvoxxehksx5ao5dsd3na34.jpg',
    heading: 'Data Secured',
    paragraph: 'Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore'
},
    {
    id:3,
    img: 'https://themebing.com/wp/prolancer/wp-content/uploads/elementor/thumbs/s-2-pgwx0gl31xabl3jtee2xksde8sopsoljdyil2z3ro0.jpg',
    heading: 'Live Chat Supprt 24',
    paragraph: 'Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore'
},
]

export default function Features(){
    return(
        <div className="h-screen max-lg:h-auto py-5 w-full bg-white text-black">
            <div className="w-[80%] max-lg:w-[90%] h-[80%] m-auto flex flex-wrap max-md:gap-5 justify-between items-center">
                {features.map((feature)=>(
                    <div key={feature.id} className="flex flex-col gap-3 w-[30%] max-lg:w-[50%] max-md:w-[90%] max-md:m-auto justify-center items-center">
                        <img className="w-[200px] h-[200px]" src={feature.img} alt="" />
                        <div className="w-[80%] max-md:w-full flex flex-col gap-4" >
                            <h1 className="font-semibold text-center text-2xl text-[#333]"> {feature.heading} </h1>
                            <p className="text-center font-light text-lg "> {feature.paragraph} </p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}