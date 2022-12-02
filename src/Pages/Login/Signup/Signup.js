import React from 'react';
import banner from '../../../assets/banner.png'
import logo from '../../../assets/logo.png'
import Form from './Form';

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

        <Form/>

    </div>
    );
};

export default Signup;