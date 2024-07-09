import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import BarChart from '../atoms/BarChart';
import { colors } from '../../theme/constants';

const DifferencesBarChart: React.FC = () => {
    const kioscosData = useSelector((state: RootState) => state.kioscos);

    const nombres = kioscosData.map(kiosco => kiosco.nombre);
    const diffs = kioscosData.map(kiosco => kiosco.diferencias);

    const data = {
        labels: nombres,
        datasets: [
            {
                label: 'Diferencias (Clerk - SAP)',
                data: diffs,
                backgroundColor: diffs.map(diff => (diff === 0 ? colors.chartPrimary : colors.secondary)),
                borderColor: diffs.map(diff => (diff === 0 ? colors.chartPrimary : colors.secondary)),
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

export default DifferencesBarChart;
