import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [FormData, setFormData] = useState({
    fullName: "",
    Email: "",
    UserName: "",
    password: "",
    country: "",
    occupation: "",
    Marital_status: "",
  });
  let error = { errorText: "", errorStatus: "" };
  let Navigate = useNavigate();
  const formHandler = (e) => {
    //destructure the name and value of the input or html Object that trigger the event
    const { name, value } = e.target;
    //update the formData state by computed value using the destructured values from the event object
    setFormData((prevState) => ({
      //this prevState parameter has access to old state
      //we can now copy all them to the new state obeject and update the needed state property.
      //this ensures that the each state property do not override each other.
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      FormData.Email !== "" &&
      FormData.Marital_status !== "" &&
      FormData.UserName !== "" &&
      FormData.country !== "" &&
      FormData.fullName !== "" &&
      FormData.occupation !== "" &&
      FormData.password !== ""
    ) {
      axios.post("jkkjnsjkns", FormData).then((response) => {
        error.errorStatus = response.status;
        error.errorText = response.statusText;
        console.log(FormData);
        if (response.status === 200) Navigate("/login");
        return;
      });
    }
  };

  const hidelabel = (index) => {
    const input = document.getElementsByClassName("inputs")[index];
    const label = document.querySelectorAll(".InputlabelStyle")[index];
    console.log(input, label);
    input.value !== ""
      ? (label.style.visibility = "hidden")
      : (label.style.visibility = "visible");
    console.log("helo");
  };

  return (
    <div className='w-[90vw]'>
      <div className='flex w-full ml-[25rem] '>
        <div className='child1'>
          {/* full name wrapper */}
          <div className='fUllname flex flex-col mt-[3rem] mb-[1rem] w-full mx-4'>
            <input
              type='text'
              name='fullName'
              id='fullName'
              value={FormData.fullName}
              onChange={formHandler}
              onInput={() => hidelabel(0)}
              className='w-[35rem] py-4 rounded-xl focus:ring-2 peer inputs border-[2px] border-blue-950  '
            />
            <label htmlFor='fullName' className='InputlabelStyle'>
              FullName
            </label>
          </div>
          {/* Email wrapper */}
          <div className='fUllname flex flex-col mt-[3rem] mb-[1rem] w-full mx-4'>
            <input
              type='email'
              name='Email'
              id='email'
              value={FormData.Email}
              onChange={formHandler}
              onBlur={() => hidelabel(1)}
              className='w-[35rem] py-4 rounded-xl focus:ring-2 peer inputs border-[2px] border-blue-950 '
            />
            <label htmlFor='email' className='InputlabelStyle'>
              Email
            </label>
          </div>
          {/* userName wrapper */}
          <div className='fUllname flex flex-col mt-[3rem] mb-[1rem] w-full mx-4'>
            <input
              type='text'
              name='UserName'
              id='UserName'
              value={FormData.UserName}
              onChange={(e) => {
                formHandler(e);
                hidelabel(2);
              }}
              onInput={() => hidelabel(2)}
              className='w-[35rem] py-4 rounded-xl focus:ring-2 peer inputs border-[2px] border-blue-950  '
            />
            <label htmlFor='UserName' className='InputlabelStyle'>
              UserName
            </label>
          </div>
          {/* password wrapper */}
          <div className='fUllname flex flex-col mt-[3rem] mb-[1rem] w-full mx-4 relative translate-x-[20rem]'>
            <input
              type='password'
              name='password'
              id='password'
              value={FormData.password}
              onChange={formHandler}
              onInput={() => hidelabel(3)}
              className='w-[35rem] py-4 rounded-xl focus:ring-2 peer inputs border-[2px] border-blue-950  '
            />
            <label htmlFor='password' className='InputlabelStyle'>
              password
            </label>
          </div>
          <button
            onClick={() => handleSubmit()}
            type='submit'
            className='w-[6rem] px-2 py-2 rounded-lg uppercase  relative border border-slate-500 translate-x-[35rem] bg-blue-950 text-white text-xl text-center hover:bg-blue-700'>
            Submit
          </button>
        </div>
        <div className='child2 '>
          {/* country wrapper */}
          <div className='fUllname flex flex-col mt-[3rem] mb-[1rem] w-full mx-4'>
            <input
              type='text'
              name='country'
              id='country'
              value={FormData.country}
              onChange={formHandler}
              onInput={() => hidelabel(4)}
              className='w-[35rem] py-4 rounded-xl focus:ring-2 peer inputs border-[2px] border-blue-950 '
            />
            <label htmlFor='country' className='InputlabelStyle'>
              Country
            </label>
          </div>

          {/* occupation wrapper */}
          <div className='fUllname flex flex-col mt-[3rem] mb-[1rem] w-full mx-4'>
            <input
              type='text'
              name='occupation'
              id='occupation'
              value={FormData.occupation}
              onChange={formHandler}
              onInput={() => hidelabel(5)}
              className='w-[35rem] py-4 rounded-xl focus:ring-2 peer inputs border-[2px] border-blue-950 '
            />
            <label htmlFor='occupation' className='InputlabelStyle'>
              occupation
            </label>
          </div>
          {/* Marital_status wrapper */}
          <div className='fUllname flex flex-col mt-[3rem] mb-[1rem] w-full mx-4'>
            <input
              type='text'
              name='Marital_status'
              id='Marital_status'
              value={FormData.Marital_status}
              onChange={formHandler}
              onInput={() => hidelabel(6)}
              className='w-[35rem] py-4 rounded-xl focus:ring-2 peer inputs border-[2px] border-blue-950 '
            />
            <label htmlFor='Marital_status' className='InputlabelStyle'>
              Marital_status
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
