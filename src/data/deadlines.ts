export type LifeSituation = 
  | 'working' 
  | 'studying' 
  | 'hasChildren' 
  | 'hasCar' 
  | 'renting' 
  | 'business';

export interface Deadline {
  id: string;
  icon: string;
  title: string;
  date: string;
  description: string;
  officialUrl: string;
  officialName: string;
  situations: LifeSituation[];
  category: 'tax' | 'vehicle' | 'family' | 'id' | 'health' | 'housing' | 'business' | 'education';
}

export const lifeSituations: { id: LifeSituation; label: string; icon: string }[] = [
  { id: 'working', label: 'Jobbar', icon: '💼' },
  { id: 'studying', label: 'Studerar', icon: '📚' },
  { id: 'hasChildren', label: 'Har barn', icon: '👶' },
  { id: 'hasCar', label: 'Har bil', icon: '🚗' },
  { id: 'renting', label: 'Bor i hyresrätt / BRF', icon: '🏠' },
  { id: 'business', label: 'Driver företag', icon: '🏢' },
];

export const deadlines: Deadline[] = [
  {
    id: 'tax-declaration',
    icon: '📅',
    title: 'Deklaration',
    date: 'Senast 2 maj',
    description: 'Inkomstdeklarationen ska vara inlämnad senast 2 maj. Har du kompletterat med nya uppgifter? Lämna in digitalt för snabbare återbetalning.',
    officialUrl: 'https://www.skatteverket.se/privat/deklaration.html',
    officialName: 'Skatteverket',
    situations: ['working', 'business'],
    category: 'tax',
  },
  {
    id: 'car-inspection',
    icon: '🚗',
    title: 'Bilbesiktning',
    date: 'Beroende på slutsiffra i regnr',
    description: 'Din bil ska besiktigas senast den månad som motsvarar slutsiffran i registreringsnumret. Boka tid i förväg för att slippa köer.',
    officialUrl: 'https://www.transportstyrelsen.se/besiktning',
    officialName: 'Transportstyrelsen',
    situations: ['hasCar'],
    category: 'vehicle',
  },
  {
    id: 'vab-certificate',
    icon: '👶',
    title: 'VAB-intyg',
    date: 'Vid dag 8 av VAB',
    description: 'Om ditt barn är sjukt mer än 7 dagar behöver du ett läkarintyg från dag 8. Kontakta vårdcentralen i tid.',
    officialUrl: 'https://www.forsakringskassan.se/privatpers/foralder/vard-av-sjukt-barn-vab',
    officialName: 'Försäkringskassan',
    situations: ['hasChildren'],
    category: 'family',
  },
  {
    id: 'id-renewal',
    icon: '🪪',
    title: 'ID-handling',
    date: 'Kontrollera giltighet',
    description: 'Kontrollera att ditt ID-kort och pass är giltigt. Förnya minst 6 månader innan det går ut, speciellt inför utlandsresor.',
    officialUrl: 'https://polisen.se/tjanster-tillstand/pass-och-nationellt-id-kort/',
    officialName: 'Polisen',
    situations: ['working', 'studying', 'hasChildren', 'hasCar', 'renting', 'business'],
    category: 'id',
  },
  {
    id: 'healthcare-ceiling',
    icon: '🏥',
    title: 'Högkostnadsskydd',
    date: '12 månader från första besöket',
    description: 'Efter att du betalat 1 400 kr i patientavgifter under 12 månader får du ett frikort. Spara kvitton!',
    officialUrl: 'https://www.1177.se/sa-fungerar-varden/kostnader-och-ersattningar/hogkostnadsskydd/',
    officialName: '1177 Vårdguiden',
    situations: ['working', 'studying', 'hasChildren', 'hasCar', 'renting', 'business'],
    category: 'health',
  },
  {
    id: 'csn-application',
    icon: '📚',
    title: 'CSN-ansökan',
    date: 'Innan terminsstart',
    description: 'Ansök om studiemedel senast 15:e månaden innan du vill börja få pengar. Försenad ansökan kan innebära försenad utbetalning.',
    officialUrl: 'https://www.csn.se/studier.html',
    officialName: 'CSN',
    situations: ['studying'],
    category: 'education',
  },
  {
    id: 'moms-declaration',
    icon: '💰',
    title: 'Momsdeklaration',
    date: 'Månadsvis eller kvartalsvis',
    description: 'Momsdeklarationen ska lämnas in månadsvis eller kvartalsvis beroende på företagets omsättning. Glöm inte arbetsgivardeklarationen!',
    officialUrl: 'https://www.skatteverket.se/foretag/moms.html',
    officialName: 'Skatteverket',
    situations: ['business'],
    category: 'business',
  },
  {
    id: 'arsredovisning',
    icon: '📊',
    title: 'Årsredovisning',
    date: '7 månader efter räkenskapsårets slut',
    description: 'Aktiebolag ska lämna in årsredovisning till Bolagsverket senast 7 månader efter räkenskapsårets slut.',
    officialUrl: 'https://bolagsverket.se/ff/foretagsformer/aktiebolag/arsredovisning',
    officialName: 'Bolagsverket',
    situations: ['business'],
    category: 'business',
  },
  {
    id: 'rent-payment',
    icon: '🏠',
    title: 'Hyra/Avgift',
    date: 'Sista vardagen varje månad',
    description: 'Hyran eller bostadsrättsavgiften ska normalt betalas sista vardagen innan månaden börjar. Sätt upp autogiro för att slippa missa.',
    officialUrl: 'https://www.hyresnamnden.se/',
    officialName: 'Hyresnämnden',
    situations: ['renting'],
    category: 'housing',
  },
  {
    id: 'barnbidrag',
    icon: '👨‍👩‍👧',
    title: 'Barnbidrag',
    date: 'Automatiskt varje månad',
    description: 'Barnbidraget betalas ut automatiskt runt den 20:e varje månad. Kontrollera att rätt person är mottagare vid delad vårdnad.',
    officialUrl: 'https://www.forsakringskassan.se/privatpers/foralder/barnbidrag',
    officialName: 'Försäkringskassan',
    situations: ['hasChildren'],
    category: 'family',
  },
  {
    id: 'foraldrapenning',
    icon: '👶',
    title: 'Föräldrapenning',
    date: 'Ansök senast 90 dagar efter',
    description: 'Du måste ansöka om föräldrapenning senast 90 dagar efter den dag du vill ha ersättning för. Ansök gärna i förväg!',
    officialUrl: 'https://www.forsakringskassan.se/privatpers/foralder/foraldrapenning',
    officialName: 'Försäkringskassan',
    situations: ['hasChildren'],
    category: 'family',
  },
  {
    id: 'forsakring-bil',
    icon: '🛡️',
    title: 'Bilförsäkring',
    date: 'Årlig förnyelse',
    description: 'Trafikförsäkring är obligatorisk. Se över ditt försäkringsskydd årligen – jämför priser för att spara pengar.',
    officialUrl: 'https://www.konsumenternas.se/forsakring/bilforsakring/',
    officialName: 'Konsumenternas',
    situations: ['hasCar'],
    category: 'vehicle',
  },
];

export function getDeadlinesForSituations(selectedSituations: LifeSituation[]): Deadline[] {
  if (selectedSituations.length === 0) return [];
  
  return deadlines.filter(deadline => 
    deadline.situations.some(situation => selectedSituations.includes(situation))
  );
}
