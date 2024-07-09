import React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<Props> = ({ label, checked, onChange }) => (
    <Form.Check type="checkbox" label={label} checked={checked} onChange={onChange} className='my-3 mx-2' />
);

export default Checkbox;
