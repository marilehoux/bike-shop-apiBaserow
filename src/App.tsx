import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { LoadingSpinner } from './components/loading/LoadingSpinner';
import { ErrorMessage } from './components/error/ErrorMessage';
import { BikeGrid } from './components/bikes/BikeGrid';
import { BikeDetails } from './components/BikeDetails';
import { useBikes } from './hooks/useBikes';
import { Bike } from './types/types';

function App() {
  const { bikes, loading, error } = useBikes();
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <BikeGrid 
          bikes={bikes} 
          onViewDetails={setSelectedBike} 
        />
      </main>

      {selectedBike && (
        <BikeDetails
          bike={selectedBike}
          onClose={() => setSelectedBike(null)}
        />
      )}
    </div>
  );
}

export default App;