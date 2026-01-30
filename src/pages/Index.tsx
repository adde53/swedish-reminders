import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SituationSelector } from '@/components/SituationSelector';
import { DeadlineList } from '@/components/DeadlineList';
import { LifeSituation, getDeadlinesForSituations } from '@/data/deadlines';

const Index = () => {
  const [selectedSituations, setSelectedSituations] = useState<LifeSituation[]>([]);

  const handleToggle = (situation: LifeSituation) => {
    setSelectedSituations(prev =>
      prev.includes(situation)
        ? prev.filter(s => s !== situation)
        : [...prev, situation]
    );
  };

  const relevantDeadlines = getDeadlinesForSituations(selectedSituations);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-10 sm:py-14">
        {/* Step 1: Life Situation Selection */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              1
            </span>
            <h2 className="text-xl font-semibold text-foreground">
              Välj dina livssituationer
            </h2>
          </div>
          <SituationSelector 
            selected={selectedSituations} 
            onToggle={handleToggle} 
          />
        </section>

        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-sm text-muted-foreground">
              {selectedSituations.length > 0 
                ? `${selectedSituations.length} situation${selectedSituations.length > 1 ? 'er' : ''} vald${selectedSituations.length > 1 ? 'a' : ''}`
                : 'Välj minst en situation'}
            </span>
          </div>
        </div>

        {/* Step 2: Results */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              2
            </span>
            <h2 className="text-xl font-semibold text-foreground">
              Dina viktiga deadlines
            </h2>
          </div>
          <DeadlineList 
            deadlines={relevantDeadlines} 
            hasSelections={selectedSituations.length > 0}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
