import React, { use, useEffect, useState } from 'react';

const InfoItems = (item) => {
    const {icon, count, title} = item.item;
    const [value, setValue] = useState(0)

    const setTime = (time)=>{
        const zeroTime = 10;
        if(time > 50){
            return zeroTime;
        }
        else if( time == 50){
            return zeroTime * 2;
        }
        else if( time < 50){
            return zeroTime * 3;
        }
    }

    useEffect(() => {
        if(value >= count) return;
        else{
            setTimeout(() => {
                setValue(value + 1)
            }, setTime(count))
        }
        
    })
    return (
        <li className='d-flex bd-highlight info-item align-items-center justify-content-center'>
            <div className='icon-circle'><img src={icon} alt="icon" /></div>
            <div className='ml-2 info-text'>
                <h4>{value}+</h4>
                <p>{title}</p>
            </div>
        </li>
    );
};

export default InfoItems;