import React from 'react'
import banner1 from '../assets/images/banner.jpg'
const Banner = () => {
  return (
    <>
    <div className='py-[70px] max-w-screen-2xl container mx-auto  md:px-20 px-4 flex flex-col md:flex-row  items-center'>
        {/* left */}
        <div className=" w-full md:w-1/2  space-y-8">
         <h1 className='text-3xl md:text-2xl lg:text-4xl font-bold'>Hello welcome here to learn somthing <span className=' text-pink-500 '>new everydays!!!</span></h1>
         <p className=' text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quos quia tempore at voluptas vitae aspernatur error eveniet autem doloribus.</p>
        <div ><label className="input input-bordered flex items-center gap-2  ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-2 h-2 opacity-70  dark:bg-slate-900"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
        <input type="text" className="grow " placeholder="Email" />
        </label>
        </div>
        <button className="btn btn-secondary ">Learn More</button>
        </div>

        {/* right */}
        <div className=" w-full md:w-1/2 ">
        <img src={banner1} alt='banner ' />
        </div>
    </div>
    </> 
  )
}

export default Banner