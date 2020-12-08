interface RiskForm {
  id: number;
  label: string;
  options?: string[];
  type: 'select' | 'text' | 'number';
}

export const riskForm: RiskForm[] = [
  {
    id: 1,
    label: 'Tryb ostry operacji',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 2,
    label: 'Wiek pacjenta',
    type: 'number',
  },
  {
    id: 3,
    label: 'Nadciśnienie tętnicze',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 4,
    label: 'Migotanie przedsionków',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 5,
    label: 'BMI',
    type: 'number',
  },
  {
    id: 6,
    label: 'Przyjmowanie Inhibitorów ACE/ARB',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 7,
    label: 'Niedosłuch',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 8,
    label: 'Demencja',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 9,
    label: 'Miażdżyca naczyń obwodowych',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 10,
    label: 'Przebyty zawał serca',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 11,
    label: 'Depresja',
    options: ['tak', 'nie'],
    type: 'select',
  },
  {
    id: 12,
    label: 'Cukrzyca',
    options: ['tak', 'nie'],
    type: 'select',
  },
];
