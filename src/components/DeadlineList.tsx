import { useState } from 'react';
import { Deadline } from '@/data/deadlines';
import { DeadlineCard } from './DeadlineCard';
import { ReminderDialog } from './ReminderDialog';
import { AlertCircle } from 'lucide-react';

interface DeadlineListProps {
  deadlines: Deadline[];
  hasSelections: boolean;
}

export function DeadlineList({ deadlines, hasSelections }: DeadlineListProps) {
  const [reminderDeadline, setReminderDeadline] = useState<Deadline | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleRemindMe = (deadline: Deadline) => {
    setReminderDeadline(deadline);
    setDialogOpen(true);
  };

  if (!hasSelections) {
    return (
      <div className="text-center py-12 sm:py-16 px-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <AlertCircle className="w-7 h-7 sm:w-8 sm:h-8 text-muted-foreground" />
        </div>
        <h3 className="text-base sm:text-lg font-medium text-foreground mb-2">
          Välj dina livssituationer
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
          Markera de situationer som stämmer in på dig ovan så visar vi vilka deadlines du behöver hålla koll på.
        </p>
      </div>
    );
  }

  if (deadlines.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16 px-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
          <span className="text-2xl sm:text-3xl">✨</span>
        </div>
        <h3 className="text-base sm:text-lg font-medium text-foreground mb-2">
          Inga specifika deadlines hittades
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
          Baserat på dina val finns det inga specifika deadlines att visa just nu.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground">
            Saker du inte bör missa
          </h2>
          <span className="px-2 sm:px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
            {deadlines.length} st
          </span>
        </div>
        <div className="grid gap-3 sm:gap-4">
          {deadlines.map((deadline, index) => (
            <DeadlineCard 
              key={deadline.id} 
              deadline={deadline} 
              index={index}
              onRemindMe={handleRemindMe}
            />
          ))}
        </div>
      </div>
      
      <ReminderDialog
        deadline={reminderDeadline}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
