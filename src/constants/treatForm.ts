interface TreatForm {
  id: number;
  label: string;
  options?: string[];
  type: 'select' | 'text' | 'number';
}

export const treatForm: TreatForm[] = [
  {
    id: 1,
    label: 'Czas hospitalizacji (dni)',
    type: 'number',
  },
  {
    id: 2,
    label: 'Przedłużona sedacja ',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 3,
    label: 'Zastosowanie leków p/psychotycznych',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 4,
    label: 'Reoperacja',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 5,
    label: 'Długość stosowania przymusu bezpośredniego (h)',
    type: 'number',
  },
  {
    id: 6,
    label: 'Czas stosowania sztucznej wentylacji (h)',
    type: 'number',
  },
  {
    id: 7,
    label: 'Ilość ponownych intubacji',
    type: 'number',
  },
  {
    id: 8,
    label: 'Czas występowania zaburzeń świadomości (h)',
    type: 'number',
  },
  {
    id: 9,
    label: 'Ilość transfuzji preparatów krwi w OINP',
    type: 'number',
  },
  {
    id: 10,
    label: 'Resuscytacja',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 11,
    label: 'Czas stosowania terapii nerkozastępczej (h)',
    type: 'number',
  },
  {
    id: 12,
    label: 'Konieczność mechanicznego wspomagania krążenia',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 13,
    label: 'Czas stosowania katecholamin (h)',
    type: 'number',
  },
  {
    id: 14,
    label: 'Ilość ponownych przyjęć na OINP',
    type: 'number',
  },
  {
    id: 15,
    label: 'Ilość nowych cykli antybiotykoterapii',
    type: 'number',
  },
  {
    id: 16,
    label: 'Śmiertelność 30-dniowa ',
    options: ['tak', 'nie'],
    type: 'select',
  },
];
