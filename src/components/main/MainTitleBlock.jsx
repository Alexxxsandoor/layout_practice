import React from 'react';
import mainImg from '../../images/big-picture/main-Illustration.svg'


const MainTitleBlock = () => {
    const info = {
        title: `Want anything to be easy with`,
        companyName: 'LaslesVPN',
        subText: `Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.`,
        btn: 'Get Started'
    }

    return (
        <div className='index-title container d-flex align-items-center justify-content-between'>
            <div className='left-text'>
                <h1>{info.title} <b>{info.companyName}</b></h1>
                <p className='mt-4'>{info.subText}</p>
                <a className='btn btn-primary btn-lg btn-shadow mt-5' href='/'>{info.btn}</a>
            </div>
            <div className='right-image'>
                <img className="img-fluid" src={mainImg} alt='image' />
            </div>
        </div>
    );
};

export default MainTitleBlock;