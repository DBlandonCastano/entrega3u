import axios from 'axios';
import React from 'react'

const Location = ({ locationInfo, setLocationInfo }) => {
  // console.log(locationInfo);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocationId = e.target.newlocation.value;
   
    axios
      .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((err) => console.log(err));
  };
  return (
    <section className='w-screen bg-[url(/images/backgroundheader.png)] text-center pb-10'>
      <div>
        <img class src="/images/frame.png" alt="" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mb-10 '>
          <input 
            name='newlocation' 
            type="number" 
            placeholder='Type a location ID...'
            required
            className=' flex-shrink-0  border-2 solid border-[rgba(0, 0, 0, 0.30)] bg-transparent text-slate-100'
         />
          <button className='text-stone-300 w-[20px]' type='submit'>Search</button>
        </div>
      </form>
      <article className='w-[90%] border-2 m-[0_auto] h-[150px] border-[#8EFF8B] text-[#8EFF8B]'>
        <span className='inline-block mb-[10px] mt-0 text-[20px]   p-2'>¡Wellcome to {locationInfo?.name} !</span>
        <ul className='grid grid-cols-3 gap-2 text-[#938686] text-[18px]'>
          <li>type: {locationInfo?.type}  </li>
          <li>Dimension: {locationInfo?.dimension} </li>
          <li>population: {locationInfo?.residents.length}  </li>
        </ul>
      </article>
    </section>
  );
};

export default Location