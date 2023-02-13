import React, { useState , useEffect } from 'react';

// API
import { getData } from '../services/api';

// Components
import Card from './Card';

const Landing = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect( () =>{
        const fetchApi = async () => {
            setData( await getData());
        }
        fetchApi()
    },[])

    const searchHandler = event => {
        setSearch(event.target.value);
    }

    const searchCoins = data.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <input type='text'
                    placeholder='Search...' 
                    value={search} 
                    onChange={searchHandler}
                    className='px-4 py-2 w-1/2 md:w-1/3 mt-3 mb-6 border border-slate-100 rounded focus:outline-pink-400/[.55]' />
            <div className='max-w-screen-md mx-auto rounded-lg overflow-hidden my-5 shadow-md divide-y'>
                {
                    searchCoins.map(coin => <Card key={coin.id} data={coin} />)
                }
            </div>
        </>
    );
};

export default Landing;