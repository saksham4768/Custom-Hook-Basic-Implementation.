
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';
export const Tag = () => {
  
    const[tag, settag] = useState('car');
    const{gif, loading, fetchData} = useGif(tag);
    
    function clickHandler(){
        fetchData();
    }
    function ChangeHandler(event){
        settag(event.target.value);
    }
  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border-black border flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className="text-2xl underline uppercase font-bold mt-[15px]">Random {tag} Gif</h1>

        {
            loading ? (<Spinner/>) :(<img src={gif} width = "450px"/>)
        }
        <input
            className='w-10/12 text-lg py-1 rounded-lg font-bold mb-[3px] text-center'
            onChange={ChangeHandler}
            value={tag}
        />
        <button onClick={clickHandler} className='mb-[20px] w-10/12 bg-[#def8ac] text-lg py-1 rounded-lg font-bold uppercase'>Generate</button>
    </div>
    )
}
