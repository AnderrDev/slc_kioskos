import React from 'react';
import { Kiosco } from '../../data/models/Kiosco';


interface Props {
    filteredData: Kiosco[];
}

const TransactionTableContent: React.FC<Props> = ({ filteredData }) => (
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
);

export default TransactionTableContent;
