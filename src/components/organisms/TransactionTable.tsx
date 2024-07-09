import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Button, Collapse, Form } from 'react-bootstrap';

const TransactionTable: React.FC = () => {
    const kioscosData = useSelector((state: RootState) => state.kioscos);
    const [isOpen, setIsOpen] = useState(false);
    const [nameFilter, setNameFilter] = useState('');
    const [showDifferencesOnly, setShowDifferencesOnly] = useState(false);

    const toggleTable = () => {
        setIsOpen(!isOpen);
    };


    const handleNameFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNameFilter(event.target.value);
    };

    const handleShowDifferencesOnlyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowDifferencesOnly(event.target.checked);
    };

    const filteredData = kioscosData.filter(kiosco => {
        return (
            (nameFilter === '' || kiosco.nombre.toLowerCase().includes(nameFilter.toLowerCase())) &&
            (!showDifferencesOnly || kiosco.diferencias !== 0)
        );
    });
    return (
        <section className="table-section">
            <Button
                onClick={toggleTable}
                aria-controls="transaction-table-collapse"
                aria-expanded={isOpen}
                className="dropdown-title"
                style={{ backgroundColor: 'var(--primary-color)', border: 'none' }}
            >
                Tabla de Transacciones {isOpen ? '▲' : '▼'}
            </Button>
            <Collapse in={isOpen}>
                <div id="transaction-table-collapse">
                    <Form className="filter-form">
                        <Form.Group controlId="nameFilter">
                            <Form.Label className='mx-2 my-3'>Filtrar por Nombre de Kiosco</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de Kiosco"
                                value={nameFilter}
                                onChange={handleNameFilterChange}
                                className='mx-2'
                            />
                        </Form.Group>
                        <Form.Group controlId="showDifferencesOnly" className='my-3 mx-2'>
                            <Form.Check
                                type="checkbox"
                                label="Mostrar Solo Kioscos con Diferencias"
                                checked={showDifferencesOnly}
                                onChange={handleShowDifferencesOnlyChange}
                            />
                        </Form.Group>
                    </Form>
                    <table id="kiosco-table" className="table">
                        <thead>
                            <tr>
                                <th>Nombre del Kiosco</th>
                                <th>Clerk</th>
                                <th>SAP</th>
                                <th>Dif</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((kiosco) => (
                                <tr key={kiosco.nombre} className={kiosco.diferencias !== 0 ? 'table-danger' : ''}>
                                    <td>{kiosco.nombre}</td>
                                    <td>{kiosco.qty_clerk}</td>
                                    <td>{kiosco.qty_sap}</td>
                                    <td>{kiosco.diferencias}</td>
                                    <td>{new Date().toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Collapse>
        </section>
    );
};

export default TransactionTable;
