
export default function SearchApp() {

    return (
        <div className="w-full h-full p-5  bg-white">
            <div className="w-[90%] h-full m-auto flex max-md:flex-col justify-between items-center gap-10">
                <div className="w-[60%] max-md:w-[80%] h-full">
                    <img className="w-full h-full" src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/12/app.png" alt="" />
                </div>
                <div className="flex flex-col justify-between gap-5 w-[60%] max-md:w-[80%] m-auto h-full">
                    <h1 className="text-6xl max-xl:text-5xl max-lg:text-3xl text-[#333333] font-bold">Get the Prolancer Job Search App</h1>
                    <p className="text-[#4A6375] font-normal">Search all the open positions on the web. Get your own <br />
                    personalized salary estimate. Read reviews on over 600,000 <br />
                    companies worldwide.</p>
                    <div className="flex max-lg:w-[50%] max-md:flex-col max-md:w-[40%] gap-4">
                        <img className="mr-10 max-lg:mr-5 max-md:mr-0" src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/06/google-app.png" alt="" />
                        <img src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/06/appstore.png" alt="" />
                    </div>

                </div>

            </div>
        </div>
    );
}
