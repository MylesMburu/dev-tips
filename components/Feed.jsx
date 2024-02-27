'use client'

import {useState, useEffect} from 'react';
import TipCard from './TipCard.jsx';

export const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [tips, setTips] = useState([]);

  const handleSearchChange = (e) => {

  };

    useEffect(() => {
      const getPosts = async () => {
        const response = await fetch('/api/tips');
        const data = await response.json();
        setTips(data);
      }

      getPosts();
    })

  return (
    <section className='feed'>
      <form action="" className='realtive w-full flex center'>
        <input 
        type="text" 
        placeholder='What do you want to learn?'
        // className='w-full h-10 px-5 pr-16 rounded-lg z-0 focus:shadow focus:outline-none'
        required
        value={searchText}
        onChange={handleSearchChange}
        className='search_input peer'
        />
      </form>

      <div>
      {tips.map((tip) => (
        <div key={tip._id} className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 my-4">
          <div>
            <div className="text-xl font-medium text-black">{tip.tag}</div>
            <p className="text-gray-500">{tip.tip}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
    )
}
