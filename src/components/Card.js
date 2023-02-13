import React from 'react';

const Card = ({data}) => {
    const {name , image , symbol , current_price , price_change_percentage_24h , market_cap} = data;
    return (
        <div className='flex justify-between items-center bg-white hover:bg-gray-50 px-5 py-4 text-xs sm:text-sm md:text-base'>
            <img src={image} alt={name} className='w-10 md:w-14'/>
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span> $ {current_price.toLocaleString()} </span>
            <span className={price_change_percentage_24h > 0 ? 'text-lime-500' : 'text-red-500'}>{price_change_percentage_24h} %</span>
            <span> $ {market_cap.toLocaleString()} </span>
        </div>
    );
};

export default Card;