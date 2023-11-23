import React,{useState} from 'react'
// import VideoFiles from '../Pages/VideoFiles'


function TopCategory() {

    const topCategory =[
        {
            image: 'https://cdn.punchng.com/wp-content/uploads/2020/09/04221815/Davido.jpg',
            name: 'Davido',
        },
        
        {
          image:'https://wallpapers.com/images/hd/messi-pictures-jzykf84saw6wbkd6.jpg',
          name:'Messi'
        },
        
        {
          image:'https://thumbs.dreamstime.com/b/tom-hanks-los-angeles-ca-january-people-s-choice-awards-microsoft-theatre-l-live-170568542.jpg',
          name:'Tom Hanky',
        },
        {
          image:'https://st4.depositphotos.com/21607914/24089/i/450/depositphotos_240895602-stock-photo-usain-bolt-jamaica-reacts-winning.jpg',
          name:'Usian Bolt'
        }
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };

      const closeModal = () => {
        setIsModalOpen(false);
      };


    

  return (
    <section className="bg-gray-100 py-8 mt-4 px-4 md:px-8">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="text-2xl font-semibold mb-4 md:mb-0">Top Celebrity patronize our Goods</div>
      <div>
        <button onClick={openModal} className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          View All
        </button>
      </div>
    </div>
    </div>
  
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
    <div class="relative rounded-lg p-4">
        <div class="relative aspect-w-2 aspect-h-3">
            <img src="https://cdn.britannica.com/61/137461-050-BB6C5D80/Brad-Pitt-2008.jpg" alt="Brad Pitt" class="object-cover rounded-lg shadow-lg"/>
        </div>

        <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-lg font-semibold text-white bg-black bg-opacity-50 p-2 rounded-lg">Brad Pitt</p>
        </div>
    </div>

    <div class="relative shadow-xl rounded-lg p-4">
        <div class="relative aspect-w-2 aspect-h-3">
            <img src="https://hips.hearstapps.com/hmg-prod/images/noam-chomsky.jpg" alt="Brad Pitt" class="object-cover rounded-lg shadow-lg"/>
        </div>

        <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-lg font-semibold text-white bg-black bg-opacity-50 p-2 rounded-lg">Naomi Chomsky</p>
        </div>
    </div>

    <div class="relative rounded-lg p-4">
        <div class="relative aspect-w-2 aspect-h-3">
            <img src="https://cdn.britannica.com/55/244255-050-478C8681/Supermodel-Naomi-Campbell-New-York-2021.jpg" alt="Brad Pitt" class="object-cover rounded-lg shadow-lg"/>
        </div>

        <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-lg font-semibold text-white bg-black bg-opacity-50 p-2 rounded-lg">Naomi Campbell</p>
        </div>
    </div>

    <div class="relative rounded-lg p-4">
        <div class="relative aspect-w-2 aspect-h-3">
            <img src="https://i.insider.com/62ea6b00c6987600183c623c?width=1136&format=jpeg" alt="Brad Pitt" class="object-cover rounded-lg shadow-lg"/>
        </div>

        <div class="absolute inset-0 flex items-center justify-center">
        <p class="text-lg font-semibold text-white bg-black bg-opacity-50 p-2 rounded-lg">Richard Bradson</p>
        </div>
    </div>

  </div>

  <div>
  {isModalOpen && (
    <div className="">
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 md:mb-4">Top Celebrities</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topCategory.map((celebrity, index) => (
            <div key={index} className="relative">
              <img src={celebrity.image} alt={celebrity.name} className="object-cover rounded-lg shadow-lg h-48" />
              <p className="text-center absolute inset-x-0 bottom-0 bg-white bg-opacity-75 text-black p-2 rounded-lg">
                {celebrity.name}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Cancel</button>
        </div>
      </div>
    </div>
  )}
</div>

{/* <VideoFiles /> */}
</section>

  )
}

export default TopCategory
