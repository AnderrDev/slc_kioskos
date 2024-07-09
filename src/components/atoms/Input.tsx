import React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ type, placeholder, value, onChange }) => (
    <Form.Control type={type} placeholder={placeholder} value={value} onChange={onChange} className='mx-2' />
);

export default Input;
