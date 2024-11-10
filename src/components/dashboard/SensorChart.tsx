import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { SensorData } from '@/lib/types';

interface SensorChartProps {
  data: SensorData[];
  dataKey: keyof SensorData;
  label: string;
  color: string;
}

export function SensorChart({ data, dataKey, label, color }: SensorChartProps) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            dataKey="timestamp"
            tickFormatter={(time: string) => new Date(time).toLocaleTimeString()}
            stroke="#94a3b8"
          />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1e293b', border: 'none' }}
            labelStyle={{ color: '#94a3b8' }}
          />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            dot={false}
            name={label}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}