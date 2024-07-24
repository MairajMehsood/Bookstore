import React from "react";
// import slide1 from '../assets/images/slide-1.jpg'
const Cards = ({item}) => {
   
//    const [name,Category,image,price]=item;
  return (
    <>
      <div className="py-[30px] p-3 w-full max-w-[338px]" >
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 cursor-pointer dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image}
              alt="Shoes" className=" w-full h-[300px] object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.Category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-4 duration-200 ease-out cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
