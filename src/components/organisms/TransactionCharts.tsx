import React from 'react';
import ClerkVsSapBarChart from '../molecules/ClerkVsSapBarChart';
import DifferencesBarChart from '../molecules/DifferencesBarChart';

const TransactionCharts: React.FC = () => {
    return (
        <section className="charts-section">
            <h2>Gráficos de Transacciones</h2>
            <div className="chart-container">
                <h3>Gráfico de Barras Apiladas</h3>
                <ClerkVsSapBarChart />
            </div>
            <div className="chart-container">
                <h3>Gráfico de Barras de Diferencias</h3>
                <DifferencesBarChart />
            </div>
        </section>
    );
};

export default TransactionCharts;
