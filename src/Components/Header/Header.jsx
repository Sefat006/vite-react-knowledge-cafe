import React from 'react';
import profile from '../../assets/Images/profile.png'

const Header = () => {
    return (
        <div className=' border-b-2 max-w-7xl mx-auto'>
            <nav className='flex justify-between item-center p-4 mx-4'>
                <h1 className='text-4xl font-bold'>Welcome to Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </nav>
            
        </div>
    );
};

export default Header;