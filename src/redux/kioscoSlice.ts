import { createSlice } from '@reduxjs/toolkit';
import { Kiosco } from '../data/models/Kiosco';


const initialState: Kiosco[] = [
    { nombre: "Naranjo", qty_clerk: 6, qty_sap: 6, diferencias: 0 },
    { nombre: "Portales 1", qty_clerk: 3, qty_sap: 1, diferencias: 2 },
    { nombre: "Portales 2", qty_clerk: 5, qty_sap: 4, diferencias: 1 },
    { nombre: "Cemaco", qty_clerk: 4, qty_sap: 4, diferencias: 0 },
    { nombre: "El Rincón del Kiosco", qty_clerk: 8, qty_sap: 8, diferencias: 0 },
    { nombre: "Kiosco 6", qty_clerk: 7, qty_sap: 5, diferencias: 2 },
    { nombre: "Kiosco 7", qty_clerk: 3, qty_sap: 2, diferencias: 1 },
    { nombre: "Kiosco 8", qty_clerk: 9, qty_sap: 7, diferencias: 2 },
    { nombre: "Kiosco 9", qty_clerk: 5, qty_sap: 5, diferencias: 0 },
    { nombre: "Kiosco 10", qty_clerk: 6, qty_sap: 4, diferencias: 2 },
    { nombre: "Kiosco 11", qty_clerk: 4, qty_sap: 3, diferencias: 1 },
    { nombre: "Kiosco 12", qty_clerk: 8, qty_sap: 6, diferencias: 2 },
    { nombre: "Kiosco 13", qty_clerk: 5, qty_sap: 5, diferencias: 0 },
    { nombre: "Kiosco 14", qty_clerk: 7, qty_sap: 5, diferencias: 2 },
    { nombre: "Kiosco 15", qty_clerk: 3, qty_sap: 2, diferencias: 1 },
    { nombre: "Kiosco 16", qty_clerk: 9, qty_sap: 7, diferencias: 2 },
    { nombre: "Kiosco 17", qty_clerk: 5, qty_sap: 5, diferencias: 0 },
    { nombre: "Kiosco 18", qty_clerk: 6, qty_sap: 4, diferencias: 2 },
    { nombre: "Kiosco 19", qty_clerk: 4, qty_sap: 3, diferencias: 1 },
    { nombre: "Kiosco 20", qty_clerk: 8, qty_sap: 6, diferencias: 2 },
    { nombre: "Kiosco 21", qty_clerk: 5, qty_sap: 5, diferencias: 0 },
    { nombre: "Kiosco 22", qty_clerk: 7, qty_sap: 5, diferencias: 2 },
    { nombre: "Kiosco 23", qty_clerk: 3, qty_sap: 2, diferencias: 1 },
    { nombre: "Kiosco 24", qty_clerk: 9, qty_sap: 7, diferencias: 2 },
    { nombre: "Kiosco 25", qty_clerk: 5, qty_sap: 5, diferencias: 0 },
    { nombre: "Kiosco 26", qty_clerk: 6, qty_sap: 4, diferencias: 2 },
    { nombre: "Kiosco 27", qty_clerk: 4, qty_sap: 3, diferencias: 1 },
    { nombre: "Kiosco 28", qty_clerk: 8, qty_sap: 6, diferencias: 2 },
    { nombre: "Kiosco 29", qty_clerk: 5, qty_sap: 5, diferencias: 0 },
    { nombre: "Kiosco 30", qty_clerk: 7, qty_sap: 5, diferencias: 2 },
];

const kioscoSlice = createSlice({
    name: 'kioscos',
    initialState,
    reducers: {},
});

export default kioscoSlice.reducer;
