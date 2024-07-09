import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import BarChart from '../atoms/BarChart';
import { colors } from '../../theme/constants';

const ClerkVsSapBarChart: React.FC = () => {
    const kioscosData = useSelector((state: RootState) => state.kioscos);

    const nombres = kioscosData.map(kiosco => kiosco.nombre);
    const clerks = kioscosData.map(kiosco => kiosco.qty_clerk);
    const saps = kioscosData.map(kiosco => kiosco.qty_sap);

    const data = {
        labels: nombres,
        datasets: [
            {
                label: 'Clerk',
                data: clerks,
                backgroundColor: colors.chartPrimary,
                borderColor: colors.chartPrimary,
                borderWidth: 1,
            },
            {
                label: 'SAP',
                data: saps,
                backgroundColor: colors.secondary,
                borderColor: colors.secondary,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <BarChart data={data} options={options} />;
};

export default ClerkVsSapBarChart;
