import { BsFillPlusCircleFill } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import React, { useState } from "react";

const New_arrival = () => {
  const [Selected, setSelected] = useState();
  const [ShowSelected, setShowSelected] = useState(false);
  const Store = [
    {
      model: "Toyota Camry",
      year: 2022,
      price: 35000,
      image: "/NewArrivalCarImage/car2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt reprehender" +
        "it voluptates itaque perferendis placeat nisi quia odio rem recusandae perspic" +
        "iatis velit sint, dolorum illo excepturi commodi quod eius laboriosam aperiam.",
      rating: "⭐⭐⭐⭐🌟",
      percentage_rating: "3.7%",
    },
    {
      model: "Honda Accord",
      year: 2023,
      price: 38000,
      image: "/NewArrivalCarImage/car3.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt reprehender" +
        "it voluptates itaque perferendis placeat nisi quia odio rem recusandae perspic" +
        "iatis velit sint, dolorum illo excepturi commodi quod eius laboriosam aperiam",
      rating: "⭐⭐⭐⭐🌟",
      percentage_rating: "3.7%",
    },
    {
      model: "Ford Mustang",
      year: 2022,
      price: 45000,
      image: "/NewArrivalCarImage/car4.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt reprehender" +
        "it voluptates itaque perferendis placeat nisi quia odio rem recusandae perspic" +
        "iatis velit sint, dolorum illo excepturi commodi quod eius laboriosam aperiam.",
      rating: "⭐⭐⭐⭐🌟",
      percentage_rating: "3.7%",
    },
    {
      model: "Chevrolet Malibu",
      year: 2021,
      price: 32000,
      image: "/NewArrivalCarImage/car5.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt reprehender" +
        "it voluptates itaque perferendis placeat nisi quia odio rem recusandae perspic" +
        "iatis velit sint, dolorum illo excepturi commodi quod eius laboriosam aperiam.",
      rating: "⭐⭐⭐⭐🌟",
      percentage_rating: "3.8%",
    },
    {
      model: "Nissan Altima",
      year: 2022,
      price: 36000,
      image: "/NewArrivalCarImage/car6.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt reprehender" +
        "it voluptates itaque perferendis placeat nisi quia odio rem recusandae perspic" +
        "iatis velit sint, dolorum illo excepturi commodi quod eius laboriosam aperiam.",
      rating: "⭐⭐⭐⭐🌟",
      percentage_rating: "3.7%",
    },
    {
      model: "bugatti Veron",
      year: 2022,
      price: 36000,
      image: "/NewArrivalCarImage/car10.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt reprehender" +
        "it voluptates itaque perferendis placeat nisi quia odio rem recusandae perspic" +
        "iatis velit sint, dolorum illo excepturi commodi quod eius laboriosam aperiam.",
      rating: "⭐⭐⭐⭐🌟",
      percentage_rating: "5.7%",
    },
    {
      model: "bugatti Veron",
      year: 2022,
      price: 36000,
      image: "/NewArrivalCarImage/car9.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt reprehender" +
        "it voluptates itaque perferendis placeat nisi quia odio rem recusandae perspic" +
        "iatis velit sint, dolorum illo excepturi commodi quod eius laboriosam aperiam.",
      rating: "⭐⭐⭐🌟",
      percentage_rating: "3.7%",
    },
    {
      model: "bugatti Veron",
      year: 2022,
      price: 36000,
      image: "/NewArrivalCarImage/car8.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt reprehender" +
        "it voluptates itaque perferendis placeat nisi quia odio rem recusandae perspic" +
        "iatis velit sint, dolorum illo excepturi commodi quod eius laboriosam aperiam.",
      rating: "⭐⭐⭐⭐🌟",
      percentage_rating: "4.7%",
    },
  ];
  const [isBuy, setIsBuy] = useState(Array(Store.length).fill(false));

  //  handler to manage viewing cards
  const Choose = (index) => {
    if (Store.length > 0) {
      const select = Store.find((item, i) => index === i);
      if (select) setSelected(select);
    }
  };

  //toggle Off view component
  const Toggle = () => {
    setShowSelected(false);
  };
  //buy icon handler
  const handleIconClick = (index) => {
    //spin the icon
    const icon = document.querySelectorAll(".plus");
    icon[index].classList.add("BuyBtn_Animation");
    setTimeout(() => {
      icon[index].classList.remove("BuyBtn_Animation");
      // show marked in some seconds
      setIsBuy((prev) => {
        prev[index] = true;
        return [...prev];
      });
    }, 1000);
    //show back the plus icon
    setTimeout(() => {
      setIsBuy((prev) => {
        prev[index] = false;
        return [...prev];
      });
    }, 3000);
  };
  const cards = Store.map((item, index) => {
    return (
      <li
        key={index}
        className=' cards group p-2 m-3 h-auto w-[20rem] rounded flex flex-col hover:transition-all duration-500 hover:scale-95 hover:shadow-slate-700 shadow-md '>
        <button
          onClick={() => {
            Choose(index);
            setShowSelected(true);
          }}
          className='hidden text-xl font-bold  p-3 w-[6rem] m-auto group-hover:ring-1 ring-sky-400 uppercase group-hover:block rounded-lg relative '>
          about
        </button>
        <img
          src={item.image}
          alt={`car ${index}`}
          className=' w-[20rem] h-[20rem] object-contain rounded-md m-auto my-2 p-1 '
        />
        <div className='Details flex flex-col w-full h-[auto] gap-1 bg-white'>
          <p className='font-semibold text-2xl text-neutral-800'>
            {item.model}
          </p>
          <h4 className='description w-[15rem] text-xl font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis  text-neutral-900'>
            {item.description}
          </h4>
          <span className='rating flex '>
            {item.rating}
            {item.percentage_rating}
          </span>

          <div className='price flex justify-between items-center w-full'>
            <p className='text-black font-bold font-sans text-3xl'>
              ${item.price}
            </p>
            <p className='text-black uppercase text-2xl'>buy now</p>
            {isBuy[index] ? (
              <GiCheckMark color='green' size={42} />
            ) : (
              <BsFillPlusCircleFill
                onClick={() => handleIconClick(index)}
                className={` plus text-[2.3rem] hover:cursor-pointer text-yellow-600 -ml-9 `}
              />
            )}
          </div>
        </div>
      </li>
    );
  });
  return (
    <>
      {ShowSelected ? (
        <ViewCard Selected={Selected} close={Toggle} />
      ) : (
        <div className='flex flex-col'>
          <div className='flex justify-between items-center w-full px-6 my-5 '>
            <h1 className='uppercase text-neutral-900 font-bold  text-5xl'>
              new arrival
            </h1>
            <button className='h-[65px] bg-slate-100 text-xl uppercase text-black w-[10rem] border-1b border-black border-[2px] rounded-lg hover:bg-slate-50 hover:cursor-pointer'>
              View all
            </button>
          </div>
          <div className='flex flex-wrap gap-2'>{cards}</div>
        </div>
      )}
    </>
  );
};

export default New_arrival;

// view card component
export const ViewCard = ({ Selected, close }) => {
  return (
    <div className='flex flex-col bg-gray-600 w-full'>
      {/* close button */}
      <div className='absolute left-[120rem] top-[6rem]'>
        <IoMdClose
          className='hover:cursor-pointer bg'
          color='white'
          size={50}
          onClick={() => {
            close();
          }}
        />
      </div>

      {/* product image */}
      <a className=' mt-4' href={Selected.image}>
        <img
          src={Selected.image}
          alt='img'
          className=' w-[50%] h-[50rem] object-cover shadow-md m-auto hover:cursor-pointer'
        />
        <FaAngleRight className='arrow right-[25rem] ' />
        <FaAngleLeft className='arrow left-[25rem]' />
      </a>
      {/* details */}
      <div className='flex flex-col w-[50%] m-auto mb-4'>
        <h1 className='font-bold text-4xl text-neutral-500 uppercase text-center'>
          Description and Rating
        </h1>
        <p className='ViewCard_P'>
          model:{" "}
          <span className='text-slate-400 text-xl '>{Selected.model}</span>{" "}
        </p>
        <p className='ViewCard_P'>
          engine type:
          <span className='text-slate-400 text-xl '>{"TBA"}</span>
        </p>
        <p className='ViewCard_P'>
          year:<span className='text-slate-400 text-xl '>{Selected.year}</span>
        </p>
        <p className='ViewCard_P'>
          Brand:<span className='text-slate-400 text-xl '>{"TBA"}</span>
        </p>
        <p className='ViewCard_P flex'>
          rating:
          <span className='text-slate-400 text-xl flex '>
            {Selected.rating}
            {Selected.percentage_rating}
          </span>
        </p>
        <p className='ViewCard_P flex flex-col text-center'>
          Description:
          <span className='text-slate-400 text-xl  w-[30rem] capitalize '>
            {Selected.description}
          </span>
        </p>
      </div>
    </div>
  );
};
