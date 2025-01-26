import React from 'react';
import userIcon from '../../images/icons/user.svg';
import locationIcon from '../../images/icons/location.svg';
import serverIcon from '../../images/icons/server.svg';
import InfoList from './InfoList';


const TableInform = () => {
    const infoList =[
        {
            icon: userIcon,
            count: 90,
            title: 'Users'
        },
        {
            icon: locationIcon,
            count: 30,
            title: 'Locations'
        },
        {
            icon: serverIcon,
            count: 50,
            title: 'Servers'
        }
    ]

    return (
        <div>
            <InfoList infoList={infoList}/>
        </div>
    );
};

export default TableInform;