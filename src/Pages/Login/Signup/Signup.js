import React from 'react';
import banner from '../../../assets/banner.png'
import logo from '../../../assets/logo.png'

const Signup = () => {
    return (
        <div className='flex justify-between gap-20'>

        <div>
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
            <img src={banner} alt="" />
        </div>
        </div>


    </div>
    );
};

export default Signup;