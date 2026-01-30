import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4 mt-16">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
          Byggd med <Heart className="w-4 h-4 text-destructive" /> i Sverige
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          Informationen är vägledande. Kontrollera alltid officiella källor för exakta datum.
        </p>
      </div>
    </footer>
  );
}
