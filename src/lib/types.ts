export interface SensorData {
    timestamp: string;
    tds: number;
    turbidity: number;
    temperature: number;
    humidity: number;
    latitude: number;
    longitude: number;
  }
  
  export interface Alert {
    id: number;
    type: 'warning' | 'critical' | 'info';
    message: string;
  }
  
  export const THRESHOLDS = {
    tds: { warning: 500, critical: 1000 },
    turbidity: { warning: 5, critical: 10 },
    temperature: { warning: 30, critical: 35 }
  } as const;