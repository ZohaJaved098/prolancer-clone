
export default function Head() {

    return (
        <div className="w-full h-screen max-sm:h-auto flex justify-center items-center text-white">
            <div className="w-[85%] p-5 m-auto flex gap-2">
                <div className="flex flex-col w-[60%] max-xl:w-full justify-center items-centers ">
                    <div className="flex flex-col mb-10">
                        <h1 className="font-bold text-6xl mb-10 max-lg:text-[52px] max-md:text-5xl">The Easiest Way to Get Your New Job </h1>
                        <p className="font-light text-2xl">Work with talented people at the most affordable price to get the most out of your time and cost</p>
                    </div>
                    <div className="w-full h-[90px] p-3 max-sm:h-auto bg-white rounded-full max-sm:rounded-3xl">
                        <form id="search-form" className="flex max-sm:flex-col justify-between items-center gap-3 ">
                            <label htmlFor="search-input" className="h-full w-[40%] max-sm:w-full p-5 border border-solid border-[#dfdfdf] rounded-full">
                                <input 
                                    id="search-input" 
                                    type="text"
                                    placeholder="Search for..." 
                                    className="w-full outline-none text-[#212529]  "    
                                />
                            </label>
                            <label htmlFor="search-option" className="h-full w-[40%] max-sm:w-full border rounded-full border-solid border-[#dfdfdf]  ">
                                <select name="search-option" id="search-option" className="w-full h-full p-5 rounded-full outline-none text-[#212529] focus:border-[#86b7fe] focus:border-2 focus:shadow-select-shadow" >
                                    <option value="Services">Services</option>
                                    <option value="Projects">Projects</option>
                                    <option value="Talent">Talent</option>
                                </select>
                            </label>
                            <input value='Search' type="submit" name="search-btn" id="search-btn" className="w-[25%] bg-[#6787FE] rounded-full h-full py-5 px-10 cursor-pointer max-sm:self-start text-center max-sm:w-[40%]" />
                        </form>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 max-xl:hidden">
                    <img className="w-[700px] h-[610px]" src="https://themebing.com/wp/prolancer/wp-content/uploads/2021/10/job.png" alt="" />
                </div>
            </div>
        </div>
    );
}
