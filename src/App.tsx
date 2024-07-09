import React from 'react';
import TransactionTable from './components/organisms/TransactionTable';
import TransactionCharts from './components/organisms/TransactionCharts';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Reporte de Transacciones por Kiosco</h1>
        <p>Este reporte muestra las transacciones realizadas por cada kiosco y resalta las discrepancias.</p>
      </header>
      <main>
        <TransactionTable />
        <TransactionCharts />

        {/* Agregar otras secciones como gráficos, resumen, etc. */}
      </main>
      <footer>
        <p>&copy; 2024 Reporte de Transacciones por Kiosco. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
