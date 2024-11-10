"use client";
import { useState, useEffect } from 'react';
import { Droplet, Eye, Thermometer, Percent } from 'lucide-react';
import { StatusCard } from './StatusCard';
import { SensorChart } from './SensorChart';
import { AlertsList } from './AlertsList';
import { THRESHOLDS, type SensorData, type Alert } from '@/lib/types';

const initialData: SensorData = {
  timestamp: new Date().toISOString(),
  tds: 250,
  turbidity: 1.5,
  temperature: 25,
  humidity: 60,
  latitude: 40.7128,
  longitude: -74.0060
};

export function WaterQualityDashboard() {
  const [currentData, setCurrentData] = useState<SensorData>(initialData);
  const [historicalData, setHistoricalData] = useState<SensorData[]>([initialData]);
  const [alerts, setAlerts] = useState<Alert[]>([]);

  // Simulate real-time data updates (replace with actual WebSocket connection)
  useEffect(() => {
    const interval = setInterval(() => {
      const newData: SensorData = {
        timestamp: new Date().toISOString(),
        tds: currentData.tds + Math.random() * 20 - 10,
        turbidity: currentData.turbidity + Math.random() * 0.5 - 0.25,
        temperature: currentData.temperature + Math.random() * 2 - 1,
        humidity: currentData.humidity + Math.random() * 4 - 2,
        latitude: currentData.latitude + (Math.random() * 0.001 - 0.0005),
        longitude: currentData.longitude + (Math.random() * 0.001 - 0.0005)
      };

      // Check for alerts
      if (newData.tds > THRESHOLDS.tds.warning) {
        setAlerts(prev => [...prev, {
          id: Date.now(),
          type: 'warning',
          message: `High TDS levels detected: ${newData.tds.toFixed(1)} ppm`
        }]);
      }

      setCurrentData(newData);
      setHistoricalData(prev => [...prev.slice(-50), newData]);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentData]);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-100">H2Oh No! - Water Quality Monitor</h1>
        
        {/* Status Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatusCard
            title="TDS Level"
            value={currentData.tds}
            unit="ppm"
            icon={Droplet}
          />
          <StatusCard
            title="Turbidity"
            value={currentData.turbidity}
            unit="NTU"
            icon={Eye}
          />
          <StatusCard
            title="Temperature"
            value={currentData.temperature}
            unit="°C"
            icon={Thermometer}
          />
          <StatusCard
            title="Humidity"
            value={currentData.humidity}
            unit="%"
            icon={Percent}
          />
        </div>

        {/* Charts */}
        <div className="mb-8 grid gap-8">
          <div className="rounded-lg bg-gray-800/50 p-4">
            <h2 className="mb-4 text-lg font-semibold text-gray-100">TDS Levels</h2>
            <SensorChart
              data={historicalData}
              dataKey="tds"
              label="TDS (ppm)"
              color="#3b82f6"
            />
          </div>
          <div className="rounded-lg bg-gray-800/50 p-4">
            <h2 className="mb-4 text-lg font-semibold text-gray-100">Turbidity</h2>
            <SensorChart
              data={historicalData}
              dataKey="turbidity"
              label="Turbidity (NTU)"
              color="#10b981"
            />
          </div>
        </div>

        {/* Alerts */}
        <div className="rounded-lg bg-gray-800/50 p-4">
          <h2 className="mb-4 text-lg font-semibold text-gray-100">Recent Alerts</h2>
          <AlertsList alerts={alerts} />
        </div>
      </div>
    </div>
  );
}