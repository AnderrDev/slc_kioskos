import React from 'react';
import { Button as BootstrapButton, ButtonProps } from 'react-bootstrap';

interface Props extends ButtonProps {
    label: string;
}

const Button: React.FC<Props> = ({ label, ...rest }) => (
    <BootstrapButton {...rest} style={{ backgroundColor: 'var(--primary-color)', border: 'none' }}>
        {label}
    </BootstrapButton>
);

export default Button;
