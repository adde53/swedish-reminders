import { CalendarCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="gradient-header text-primary-foreground py-8 px-4 sm:py-12 lg:py-16">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm mb-4 sm:mb-6">
          <CalendarCheck className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance">
          NärMåsteJag.se
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white/95 mb-2">
          Missa aldrig en svensk deadline
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto text-balance">
          Välj dina livssituationer och få en översikt över viktiga datum – deklaration, besiktning, VAB och mer.
        </p>
      </div>
    </header>
  );
}
