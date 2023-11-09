import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Search() {
  const [SearchData, setSearchData] = useState("");
  const [Error, setError] = useState("");
  const handleSearchSubmit = (data) => {
    fetch("jhkjhjsh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SearchData),
    }).catch((resp) => (!resp ? setError(resp) : console.log("serch")));
  };

  return (
    <div className='flex items-center md:flex-row'>
      <div className='relative flex'>
        <input
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
          value={SearchData}
          type='text'
          placeholder='Search'
          className='w-full md:w-96 border-indigo-200 text-center font-sm px-4 py-2 outline-none hover:bg-gray-200 rounded hover:text-black-500 pl-8'
        />
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <span className='bg-white-500 font-bold text-gray-500'>category</span>
          <ExpandMoreIcon />
        </div>
      </div>
      <button
        type='submit'
        className='bg-black-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        style={{ backgroundColor: "black" }}>
        Send
      </button>
    </div>
  );
}

export default Search;
