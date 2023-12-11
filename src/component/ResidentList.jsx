import React, { useState } from 'react'
import ResidenCard from './ResidenCard';
import { paginationLogic } from '../utils/pagination';
import { list } from 'postcss';

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { pages, residentsInCurrenPages } = paginationLogic(currentPage, residents)

  return (
    <section className='w-screen bg-[url(/images/backgroundpage.png)] bg-cover bg-no-repeat'>
      <section className=' grid  grid-cols-[repeat(auto-fill,_280px)] justify-center justify-items-center gap-[10px]'>
        {residents.map((resident) => (
          <ResidenCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <ul className=' text-white flex justify-center p-4 gap-10'>
        {pages.map((page)=>{   
            <li key={page}>
              <button className=' text-white h-3'>{page}</button>
            </li>
          })
        }

      </ul>
    </section>
  );
};

export default ResidentList