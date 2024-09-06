import React from 'react'

const Contact = () => {
    return (
        <>
        <div className='bg-[#aa43f120] bg-opacity-50 min-h-screen pt-4 md:pt-20'>
            <div className='md:flex justify-evenly pb-4'>
                <div className='md:w-[36%]'>
                    <div className='bg-[#52525270] bg-opacity-75 rounded-2xl pt-1 md:pt-4 pb-3 md:pb-10 mx-4 px-8 md:px-[60px] text-wrap align-middle text-center'>
                        <div className='text-xl md:text-2xl pb-6 pt-8 font-bold tracking-[5px] text-wh'>CONTACT US</div> 
                        <input type="text" placeholder='Enter Your Name' className='w-full rounded-sm p-3 text-start mb-3'/>
                        <input type="email" placeholder='Enter Your email address' className='w-full rounded-sm p-3 text-start mb-3'/>
                        <input type="textarea" placeholder='Your message' className='w-full rounded-sm p-3 pb-10 md:pb-20 text-start mb-3'/>
                        <button className="text-black bg-[#aa43f1] border border-solid rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25) tracking-[4px] px-2 md:px-6 py-1 md:py-2 text-[20px] ">
                            Submit
                        </button>
                    </div>
                    
                </div>
                
                <div className='px-8 text-wrap md:w-[36%] text-lg md:text-xl pt-8 md:pt-3'>
                    <p className='text-justify'>Follow us on Social media for behind-the-scenes inside, Join the conversation and share your thoughts.</p>
                    <div className='flex w-full justify-between pt-14'>
                        <img src="facebook.png" alt="facebook" className="object-contain"/> 
                        <img src="instagram.png" alt="instagram" className="object-contain"/>     
                        <img src="twitter.png" alt="twitter" className="object-contain"/>   
                        <img src="linkedin.png" alt="linkedin" className="object-contain"/>            
                    </div> 
                    <div className='md:flex justify-between mt-14 bg-[#525252] bg-opacity-40 rounded-2xl px-4 py-2'>
                        <div className='md:w-[45%] px-6 py-4 text-center'>
                            <div className='flex mb-3 justify-center md:justify-start'>
                                <img src="phone.png" alt="" />
                                <h1 className='text-xl px-4 font-bold'>MOBILE</h1>
                            </div>
                            <p>(999) 8468436</p>
                            <p>(844) 5543210</p>
                        </div>
                        <div className='md:w-[45%] py-4 px-2 text-center'>
                            <div className='flex mb-3 justify-center md:justify-start'>
                                <img src="location.png" alt="" />
                                <h1 className='text-xl px-4 font-bold'>LOCATION</h1>
                            </div>
                            <p className='text-lg'>
                             Roorkee, Uttrakhand 24766
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
            
        </>

    )
}

export default Contact