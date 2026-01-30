import { useState } from 'react';
import { Deadline } from '@/data/deadlines';
import { Bell, Mail, Phone, X, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';

interface ReminderDialogProps {
  deadline: Deadline | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type ReminderTiming = '1day' | '1week' | '1month';

const timingOptions: { id: ReminderTiming; label: string }[] = [
  { id: '1day', label: '1 dag innan' },
  { id: '1week', label: '1 vecka innan' },
  { id: '1month', label: '1 månad innan' },
];

export function ReminderDialog({ deadline, open, onOpenChange }: ReminderDialogProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [useEmail, setUseEmail] = useState(true);
  const [usePhone, setUsePhone] = useState(false);
  const [selectedTimings, setSelectedTimings] = useState<ReminderTiming[]>(['1week']);

  const handleTimingToggle = (timing: ReminderTiming) => {
    setSelectedTimings(prev =>
      prev.includes(timing)
        ? prev.filter(t => t !== timing)
        : [...prev, timing]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!useEmail && !usePhone) {
      toast({
        title: "Välj minst ett sätt",
        description: "Du måste välja e-post eller telefon för att få påminnelser.",
        variant: "destructive",
      });
      return;
    }

    if (useEmail && !email) {
      toast({
        title: "E-post saknas",
        description: "Fyll i din e-postadress för att få påminnelser via e-post.",
        variant: "destructive",
      });
      return;
    }

    if (usePhone && !phone) {
      toast({
        title: "Telefonnummer saknas",
        description: "Fyll i ditt telefonnummer för att få påminnelser via SMS.",
        variant: "destructive",
      });
      return;
    }

    if (selectedTimings.length === 0) {
      toast({
        title: "Välj tidpunkt",
        description: "Du måste välja minst en tidpunkt för påminnelsen.",
        variant: "destructive",
      });
      return;
    }

    // Mock success - would send to backend in real implementation
    toast({
      title: "Påminnelse sparad!",
      description: `Du kommer få en påminnelse om "${deadline?.title}".`,
    });
    
    onOpenChange(false);
    // Reset form
    setEmail('');
    setPhone('');
    setUseEmail(true);
    setUsePhone(false);
    setSelectedTimings(['1week']);
  };

  if (!deadline) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-w-[calc(100vw-2rem)] mx-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg">
            <Bell className="w-5 h-5 text-primary" />
            Påminn mig
          </DialogTitle>
          <DialogDescription className="text-left">
            Få en påminnelse om <span className="font-medium text-foreground">{deadline.title}</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-2">
          {/* Contact Method Selection */}
          <div className="space-y-4">
            <Label className="text-sm font-medium">Hur vill du bli påmind?</Label>
            
            {/* Email Option */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="use-email"
                  checked={useEmail}
                  onCheckedChange={(checked) => setUseEmail(checked === true)}
                />
                <label
                  htmlFor="use-email"
                  className="flex items-center gap-2 text-sm font-medium cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  E-post
                </label>
              </div>
              {useEmail && (
                <Input
                  type="email"
                  placeholder="din@email.se"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ml-7"
                />
              )}
            </div>

            {/* Phone Option */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="use-phone"
                  checked={usePhone}
                  onCheckedChange={(checked) => setUsePhone(checked === true)}
                />
                <label
                  htmlFor="use-phone"
                  className="flex items-center gap-2 text-sm font-medium cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  SMS
                </label>
              </div>
              {usePhone && (
                <Input
                  type="tel"
                  placeholder="070-123 45 67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="ml-7"
                />
              )}
            </div>
          </div>

          {/* Timing Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">När vill du bli påmind?</Label>
            <div className="flex flex-wrap gap-2">
              {timingOptions.map((option) => {
                const isSelected = selectedTimings.includes(option.id);
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleTimingToggle(option.id)}
                    className={`
                      inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium
                      transition-all duration-200 border
                      ${isSelected
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                      }
                    `}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Avbryt
            </Button>
            <Button type="submit" className="flex-1">
              <Bell className="w-4 h-4 mr-2" />
              Spara påminnelse
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
