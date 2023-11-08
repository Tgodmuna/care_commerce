import React, { useState } from "react";
function Consultation() {
  // Add state variables for form inputs
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  // Handle input changes

  //   const handleNameChange = (event) => {
  //     setName(event.target.value);
  //   };

  //   const handleEmailChange = (event) => {
  //     setEmail(event.target.value);
  //   };

  //   const handleMessageChange = (event) => {
    //     setMessage(event.target.value);
    

  const [form, setform] = useState({ name: "", email: "", message: "" });
  //single formHandler
  const formHandler = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setform({ ...form, [name]: value });
  };

  //submit handler
  const handleSubmit = () => {
    // Prepare the data to send to your server
    const formData = {
      name: form.name,
      email: form.email,
      message: form.message,
    };
    if (formData.email !== '' && formData.name !== '' && formData.message !== '') {
      fetch("http://localhost:4000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Server data:", data);
          // Handle the response from your server
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="w-full bg-black p-4 h-screen bg-opacity-80 absolute ">
        <div className='bg-gray-500 m-auto mt-[15rem] w-[50vw] text-white-900 p-8 rounded-lg shadow-lg '>
            <h1 className='text-2xl text-center uppercase m-auto font-bold'>consultation Form</h1>
          <form onSubmit={handleSubmit}>
            <div className='mt-4'>
              <span className='labelStyle'>Full Name</span>
              <input
                onChange={formHandler}
                name='fullName'
                className='w-full bg-white-900 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Full Name'
              />
            </div>
            <div className='mt-4'>
              <span className='labelStyle'>Email</span>
              <input
                onChange={formHandler}
                name='email'
                className='w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Email@gmail.com'
              />
            </div>
            <div className='mt-4'>
              <span className='labelStyle'>Message</span>
              <textarea
                onChange={formHandler}
                name='message'
                className='w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                placeholder='Leave a message for us or discuss you problem'
              />
            </div>
            <div className='mt-4 m-auto w-[12rem]'>
              <button
                onClick={handleSubmit}
                className=' hover:bg-indigo-300 text-sm font-bold bg-indigo-500 text-gray-100 p-3 rounded-lg w-[10rem] focus:outline-none focus:shadow-outline'>
                Send Message 
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}

export default Consultation;
