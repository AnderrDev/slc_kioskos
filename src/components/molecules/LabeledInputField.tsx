import React from 'react';
import InputField from '../atoms/InputField';

interface LabeledInputFieldProps {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledInputField: React.FC<LabeledInputFieldProps> = ({ label, type, placeholder, value, onChange }) => {
    return (
        <div className="labeled-input-field">
            <label>{label}</label>
            <InputField type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default LabeledInputField;
