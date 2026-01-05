import { Clock } from 'lucide-react';

interface TimelineItem {
  time: string;
  title: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start">
            <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-primary-600 rounded-full flex-shrink-0 mr-4 md:mr-6">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <span className="text-sm font-medium text-primary-600">{item.time}</span>
              </div>
              {item.description && (
                <p className="text-gray-600">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

