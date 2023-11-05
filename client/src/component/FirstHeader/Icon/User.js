import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';

function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='flex mr-4'>
      <div className="relative">
       {/*  */}
      </div>
      <div>
      <PersonIcon onClick={openModal} />
      </div>

      {isModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-80">
          <div className="bg-black-900 p-4 rounded-md relative">
            <h2 className="text-xl font-bold mb-4  text-center">company wish message</h2>
           <i>
  <div className="text-center p-4">
    Welcome to our car rental company, where your car dreams come true. We offer:
  </div>
  <h2 className="text-2xl font-semibold mb-2">Diverse Inventory:</h2>
  <p className="text-center">
    Explore the latest car models, new and pre-owned, from top manufacturers, tailored to your style.
  </p>
  <h2 className="text-2xl font-semibold mb-2">Quality Pre-Owned:</h2>
  <p className="text-center">
    Trust in our rigorously inspected and reconditioned used cars for excellent value.
  </p>
  <h2 className="text-2xl font-semibold mb-2">Expert Assistance:</h2>
  <p className="text-center">
    Our knowledgeable team provides hassle-free, informed guidance throughout your car-buying journey.
  </p>
  <h2 className="text-2xl font-semibold mb-2">Flexible Financing:</h2>
  <p className="text-center">
    Enjoy competitive rates and flexible terms to drive home your dream car.
  </p>
  <h2 className="text-2xl font-semibold mb-2">Service Excellence:</h2>
  <p className="text-center">
    Our certified technicians keep your car in peak condition with routine maintenance and repairs.
  </p>
  <h2 className="text-2xl font-semibold mb-2">Online Tools:</h2>
  <p className="text-center">
    Browse our website for inventory, promotions, and financing options. Contact us to schedule a test drive. 
  </p>
  <div className='flex space-x-4 justify-between py-2 px-4'>
  <b className=" font-sm text-center mt-4">Discover your dream car at [Your Dealership Name] today.</b>
  <CloseIcon className="absolute top-2 bg-gray-400 rounded-lg font-bold text-white right-2 cursor-pointer" onClick={closeModal} />
  </div>
</i>

          </div>
        </div>
      )}
    </div>
  );
}

export default User;
