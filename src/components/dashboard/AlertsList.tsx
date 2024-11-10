import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import type { Alert as AlertType } from '@/lib/types';

interface AlertsListProps {
  alerts: AlertType[];
}

export function AlertsList({ alerts }: AlertsListProps) {
  return (
    <div className="space-y-4">
      {alerts.slice(-5).map((alert) => (
        <Alert 
          key={alert.id}
          variant={alert.type === 'critical' ? 'destructive' : 'default'}
          className="bg-white/10 backdrop-blur"
        >
          <AlertTitle>Water Quality Alert</AlertTitle>
          <AlertDescription>{alert.message}</AlertDescription>
        </Alert>
      ))}
    </div>
  );
}