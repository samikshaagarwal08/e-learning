import React from 'react'

const ComingSoon = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
            <div className="text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#aa43f1]">Coming Soon</h1>
                <p className="text-lg md:text-xl mb-8">
                    We are working hard to bring you a new experience. Stay tuned!
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-full bg-gray-200 border-2 border-[#aa43f1] focus:outline-none focus:border-[#aa43f1] text-black w-full md:w-1/2"
                    />
                    <button className="px-6 py-2 rounded-full bg-[#aa43f1] text-black font-semibold hover:bg-[#E74C3C] transition duration-300">
                        Notify Me
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon