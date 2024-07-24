import React from 'react'
import  list  from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='pt-28  text-center '>
            <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'> Here:)</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas asperiores quos adipisci in. Consectetur quaerat assumenda vero quidem accusantium reprehenderit totam neque eum consequuntur molestiae dolore laudantium sunt, voluptates alias, perferendis animi pariatur corrupti quisquam! Assumenda, delectus dolore asperiores explicabo libero eius beatae officiis quis. Obcaecati, maxime voluptates iusto fugiat nemo sit quam tempore molestiae necessitatibus dignissimos. Iste, nulla ipsa!</p>
       <Link to='/'> <button className=' bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700  my-6'>Back</button></Link>
        </div>

        {/* datalis */}
        <div className='mt-12 flex flex-wrap justify-center' >
       {list.map((item)=>{
            return(
               <Cards item={item} key={item.id}/>
            )
        })}

    </div>
    </div>
    </>
  )
}

export default Course