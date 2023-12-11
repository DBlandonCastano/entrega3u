import axios from 'axios';
import React, { useEffect, useState } from 'react';




const ResidenCard = ({ residentUrl }) => {
    const [residentInfo, setResidentInfo] = useState(null);
    const bgStyleStatus={
        Alive:"bg-green-500",
        Dead:"bg-red-500",
        unknown:"bg-slate-500"
    }

    useEffect(() => {
        axios
            .get(residentUrl)
            .then(({ data }) => setResidentInfo(data))
            .catch((err) => console.log(err));
    }, []);


    return (
        <div className=''>
            <article className='text-white text-[16px] border-2 border-[#8EFF8B] '>
                <header  >
                    <img src={residentInfo?.image} alt="" />
                    <div className='absolute w-[120px] ml-[60px] mt-[-70px] flex justify-center gap-2 border-2 border-[#8EFF8B] bg-black/80 ' >
                        <div className={`h-4 aspect-square rounded-full ${bgStyleStatus[residentInfo?.status]}`}></div>
                        <span>{residentInfo?.status} </span>
                    </div>
                </header>
                <section className='p-4'>
                    <h5>{residentInfo?.name} </h5>
                    <ul>
                        <li><span>Species </span>{residentInfo?.species} </li>
                        <li><span>Origin </span>{residentInfo?.origin.name} </li>
                        <li><span>Times Appears </span>{residentInfo?.episode.length} </li>
                    </ul>
                </section>
            </article>
        </div >

    )
}

export default ResidenCard