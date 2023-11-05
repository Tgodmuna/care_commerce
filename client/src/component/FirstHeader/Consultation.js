import React,{useState} from 'react'
function Consultation() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Add state variables for form inputs
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

// Handle input changes
const handleNameChange = (event) => {
  setName(event.target.value);
};

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handleMessageChange = (event) => {
  setMessage(event.target.value);
};

// Handle form submission

const handleSubmit = () => {
    // Prepare the data to send to your server
    const formData = {
      name: name,
      email: email,
      message: message,
    }
    fetch('http://localhost:4000/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Server data:', data);
    // Handle the response from your server
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

      
  };

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
      };

      const closeModal = () => {
        setIsModalOpen(false);
      };
    return(
        <section>
    <div>
    <div>
    <div
        onClick={openModal}
        className="cursor-pointer flex items-center bg-red-300 hover:bg-black-700 text-white rounded-full py-3 px-6 space-x-2 text-blue-500"
      >
        <p className="text-xl font-semibold">Consultation</p>
      </div>    </div>
    </div>

    {/* <div> */}
        
     <div>
     {isModalOpen && (
  <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
    <div className="bg-gray-100 text-white-900 p-8 rounded-lg shadow-lg relative">
      <button
        className="absolute top-2 right-2 text-2xl text-white-600 cursor-pointer"
        onClick={closeModal}
      >
        Close
      </button>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Contact Form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <span className="text-sm text-gray-600 font-bold">Full Name</span>
          <input
            onChange={handleNameChange}
            name="fullName"
            className="w-full bg-white-900 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="mt-4">
          <span className="text-sm text-gray-600 font-bold">Email</span>
          <input
            onChange={handleEmailChange}
            name="email"
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email@gmail.com"
          />
        </div>
        <div className="mt-4">
          <span className="text-sm text-gray-600 font-bold">Message</span>
          <textarea
            onChange={handleMessageChange}
            name="message"
            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            placeholder="Leave a message for us"
          />
        </div>
        <div className="mt-4">
          <button
            onClick={handleSubmit}
            className="text-sm font-bold bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
          >
            Send Message & close Message
          </button>
        </div>
      </form>
    </div>
  </div>
)}



      </div>
    </section>
  )
}

export default Consultation;