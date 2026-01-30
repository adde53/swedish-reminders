import { Deadline } from '@/data/deadlines';
import { ExternalLink, Calendar } from 'lucide-react';

interface DeadlineCardProps {
  deadline: Deadline;
  index: number;
}

export function DeadlineCard({ deadline, index }: DeadlineCardProps) {
  return (
    <article
      className="deadline-card opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl" role="img" aria-label={deadline.title}>
          {deadline.icon}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-semibold text-lg text-foreground">
              {deadline.title}
            </h3>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-warning/10 text-warning-foreground text-sm font-medium whitespace-nowrap">
              <Calendar className="w-3.5 h-3.5" />
              {deadline.date}
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {deadline.description}
          </p>
          <a
            href={deadline.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            <span>Läs mer på {deadline.officialName}</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
