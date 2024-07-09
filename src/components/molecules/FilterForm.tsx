import React from 'react';
import { Form } from 'react-bootstrap';
import Input from '../atoms/Input';
import Checkbox from '../atoms/Checkbox';

interface Props {
    nameFilter: string;
    onNameFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    showDifferencesOnly: boolean;
    onShowDifferencesOnlyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FilterForm: React.FC<Props> = ({
    nameFilter,
    onNameFilterChange,
    showDifferencesOnly,
    onShowDifferencesOnlyChange,
    onSubmit,
}) => (
    <Form className="filter-form" onSubmit={onSubmit}>
        <Form.Group controlId="nameFilter">
            <Form.Label className='mx-2 my-3'>Filtrar por Nombre de Kiosco</Form.Label>
            <Input type="text" placeholder="Nombre de Kiosco" value={nameFilter} onChange={onNameFilterChange} />
        </Form.Group>
        <Form.Group controlId="showDifferencesOnly" className='my-3 mx-2'>
            <Checkbox label="Mostrar Solo Kioscos con Diferencias" checked={showDifferencesOnly} onChange={onShowDifferencesOnlyChange} />
        </Form.Group>
    </Form>
);

export default FilterForm;
