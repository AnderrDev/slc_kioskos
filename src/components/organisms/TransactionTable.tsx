import React, { useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Button from '../atoms/Button';
import FilterForm from '../molecules/FilterForm';
import TransactionTableContent from '../organisms/TransactionTableContent';
import { Collapse } from 'react-bootstrap';
import { Kiosco } from '../../data/models/Kiosco';

const TransactionTable: React.FC = () => {
    const kioscosData = useSelector((state: RootState) => state.kioscos);
    const [isOpen, setIsOpen] = useState(false);
    const [nameFilter, setNameFilter] = useState('');
    const [showDifferencesOnly, setShowDifferencesOnly] = useState(false);

    const toggleTable = useCallback(() => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }, []);

    const handleNameFilterChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setNameFilter(event.target.value);
    }, []);

    const handleShowDifferencesOnlyChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setShowDifferencesOnly(event.target.checked);
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const filteredData = useMemo(() => {
        return kioscosData.filter((kiosco: Kiosco) => {
            return (
                (nameFilter === '' || kiosco.nombre.toLowerCase().includes(nameFilter.toLowerCase())) &&
                (!showDifferencesOnly || kiosco.diferencias !== 0)
            );
        });
    }, [kioscosData, nameFilter, showDifferencesOnly]);

    return (
        <section className="table-section">
            <Button
                label={`Tabla de Transacciones ${isOpen ? '▲' : '▼'}`}
                onClick={toggleTable}
                aria-controls="transaction-table-collapse"
                aria-expanded={isOpen}
                className="dropdown-title"
            />
            <Collapse in={isOpen}>
                <div id="transaction-table-collapse">
                    <FilterForm
                        nameFilter={nameFilter}
                        onNameFilterChange={handleNameFilterChange}
                        showDifferencesOnly={showDifferencesOnly}
                        onShowDifferencesOnlyChange={handleShowDifferencesOnlyChange}
                        onSubmit={handleSubmit}
                    />
                    <TransactionTableContent filteredData={filteredData} />
                </div>
            </Collapse>
        </section>
    );
};

export default TransactionTable;
