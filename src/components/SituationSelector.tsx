import { lifeSituations, LifeSituation } from '@/data/deadlines';
import { Check } from 'lucide-react';

interface SituationSelectorProps {
  selected: LifeSituation[];
  onToggle: (situation: LifeSituation) => void;
}

export function SituationSelector({ selected, onToggle }: SituationSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
      {lifeSituations.map((situation, index) => {
        const isSelected = selected.includes(situation.id);
        return (
          <button
            key={situation.id}
            onClick={() => onToggle(situation.id)}
            className={`situation-checkbox ${isSelected ? 'selected' : ''}`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="text-xl sm:text-2xl" role="img" aria-hidden="true">
              {situation.icon}
            </span>
            <span className="flex-1 text-left text-sm sm:text-base font-medium text-foreground">
              {situation.label}
            </span>
            <div
              className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                isSelected
                  ? 'bg-primary border-primary'
                  : 'border-muted-foreground/30'
              }`}
            >
              {isSelected && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-foreground" />}
            </div>
          </button>
        );
      })}
    </div>
  );
}
