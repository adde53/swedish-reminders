import { Deadline } from '@/data/deadlines';
import { ExternalLink, Calendar, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DeadlineCardProps {
  deadline: Deadline;
  index: number;
  onRemindMe: (deadline: Deadline) => void;
}

export function DeadlineCard({ deadline, index, onRemindMe }: DeadlineCardProps) {
  return (
    <article
      className="deadline-card opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
        <span className="text-2xl sm:text-3xl" role="img" aria-label={deadline.title}>
          {deadline.icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-2">
            <h3 className="font-semibold text-base sm:text-lg text-foreground">
              {deadline.title}
            </h3>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-warning/10 text-warning-foreground text-xs sm:text-sm font-medium whitespace-nowrap self-start">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {deadline.date}
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {deadline.description}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <a
              href={deadline.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
            >
              <span>Läs mer på {deadline.officialName}</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onRemindMe(deadline)}
              className="inline-flex items-center gap-2 self-start sm:ml-auto border-primary/30 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary/50"
            >
              <Bell className="w-4 h-4" />
              Påminn mig
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
