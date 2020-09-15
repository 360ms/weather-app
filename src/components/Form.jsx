import React from 'react';
import {Button, Input} from "antd";

export const Form = ({ onSubmit }) => (
    <>
        <form className='form' onSubmit={e => onSubmit(e)}>
            <Input type='text' name='city' placeholder='Your city' />
            <button type='submit'>Search</button>
        </form>
    </>
)