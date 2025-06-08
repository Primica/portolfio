import { ReactNode } from 'react';
import { icons } from './icons';

interface CalloutProps {
  type: string;
  children: ReactNode;
  className?: string;
}

export function Callout({ type = 'note', children, className = '' }: CalloutProps) {
  const getCalloutStyle = (type: string) => {
    switch (type.toLowerCase()) {
      case 'note':
        return 'bg-blue-50/80 dark:bg-blue-950/30 border-blue-500/70';
      case 'tip':
        return 'bg-green-50/80 dark:bg-green-950/30 border-green-500/70';
      case 'warning':
        return 'bg-yellow-50/80 dark:bg-yellow-950/30 border-yellow-500/70';
      case 'danger':
        return 'bg-red-50/80 dark:bg-red-950/30 border-red-500/70';
      case 'info':
        return 'bg-purple-50/80 dark:bg-purple-950/30 border-purple-500/70';
      default:
        return 'bg-gray-50/80 dark:bg-gray-950/30 border-gray-500/70';
    }
  };

  const Icon = icons[type.toLowerCase() as keyof typeof icons] || icons.note;

  return (
    <div className={`my-3 rounded-md border-l-[3px] ${getCalloutStyle(type)} ${className}`}>
      <div className="px-3 py-2">
        <div className="flex items-center gap-1.5 text-sm font-medium mb-0.5">
          <Icon size={14} className="flex-shrink-0" />
          <span className="capitalize">{type}</span>
        </div>
        <div className="pl-5 text-sm">{children}</div>
      </div>
    </div>
  );
}
