import React from 'react';
import InfoItems from './InfoItems';

const InfoList = ({infoList}) => {
    console.log(infoList)
    return (
        <div className="container">
            <ul className='info-table d-flex flex-wrap justify-content-between align-items-center'>
                {infoList.map((item, index) => <InfoItems key={index} item={item} />)}
            </ul>
        </div>
        
    );
};

export default InfoList;