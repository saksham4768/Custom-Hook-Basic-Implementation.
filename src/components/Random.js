import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export const Random = () => {

    const{gif, loading, fetchData} = useGif();
    function clickHandler(){
        fetchData();
    }
  return (
    <div className='w-1/2 bg-green-500 rounded-lg border-black border flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className="text-2xl underline uppercase font-bold mt-[15px]">A Random Gif</h1>

        {
            loading ? (<Spinner/>) :(<img src={gif} width = "450px"/>)
        }

        <button onClick={clickHandler} className='mb-[20px] w-10/12 bg-[#def8ac] text-lg py-1 rounded-lg font-bold uppercase'>Generate</button>
    </div>
  )
}
