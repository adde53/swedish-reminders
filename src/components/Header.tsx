import { CalendarCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="gradient-header text-primary-foreground py-12 px-4 sm:py-16">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
          <CalendarCheck className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
          Missa aldrig en svensk deadline
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-balance">
          Välj dina livssituationer och få en översikt över viktiga datum – deklaration, besiktning, VAB och mer.
        </p>
      </div>
    </header>
  );
}
