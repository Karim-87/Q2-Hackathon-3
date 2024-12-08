export default function AboutSignup() {
    return(
        
       
                <div className=" flex justify-center items-center bg-[#F9F9F9] ">
                    {/* Background Image */}
                   
                    {/* Content Section */}
                    <div className="text-center px-6 py-10 lg:py-20 max-w-[1200px] w-full">
                        <div className="mx-auto max-w-[600px]">
                            {/* Heading */}
                            <h1 className="text-[24px] lg:text-[32px] font-bold mb-4">
                                Join the club and get the benefits
                            </h1>
                            {/* Subheading */}
                            <p className="text-[16px] lg:text-[18px] mb-6">
                                Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
                            </p>
                        </div>
                        {/* Benefits Section */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            
                        </div>
                        {/* Signup Form */}
                        <div className="flex flex-wrap justify-center items-center gap-2 w-full max-w-[600px] mx-auto">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="flex-1 h-[48px] px-4 rounded border border-gray-300 focus:outline-none text-black"
                            />
                            <button className="h-[48px] px-6 bg-[#2A254B] text-[16px] rounded text-white hover:bg-gray-700 transition">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            )
        };
        