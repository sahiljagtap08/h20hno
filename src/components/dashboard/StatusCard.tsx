import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatusCardProps {
  title: string;
  value: number | string;
  unit: string;
  icon: LucideIcon;
}

export function StatusCard({ title, value, unit, icon: Icon }: StatusCardProps) {
  return (
    <Card className="bg-white/10 backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-200">{title}</CardTitle>
        <Icon className="h-4 w-4 text-gray-400" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-100">
          {typeof value === 'number' ? value.toFixed(1) : value} {unit}
        </div>
      </CardContent>
    </Card>
  );
}