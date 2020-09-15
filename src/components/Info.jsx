import React from 'react';
import {CloudOutlined} from '@ant-design/icons'
import cloud from "../img/cloud.png";

export const Info = () => {
    return (
        <>
            <h1><CloudOutlined/> Weather</h1>

            <img src={cloud} className='cloud01'/>
            <img src={cloud} className='cloud02'/>
            <img src={cloud} className='cloud03'/>
        </>
    )
}