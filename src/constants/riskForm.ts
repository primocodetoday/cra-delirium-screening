import { IForm } from './form.interface';

export const riskForm: IForm[] = [
  {
    id: 1,
    name: 'trybostry',
    label: 'Tryb ostry operacji',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: 'select',
  },
  {
    id: 2,
    name: 'wiek',
    label: 'Wiek pacjenta',
    type: 'number',
  },
  {
    id: 3,
    name: 'hipertens',
    label: 'Nadciśnienie tętnicze',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: 'select',
  },
  {
    id: 4,
    name: 'migprzed',
    label: 'Migotanie przedsionków',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: 'select',
  },
  {
    id: 5,
    name: 'bmi',
    label: 'BMI',
    type: 'number',
  },
  {
    id: 6,
    name: 'inhibace',
    label: 'Przyjmowanie Inhibitorów ACE/ARB',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: 'select',
  },
  {
    id: 7,
    name: 'niedos',
    label: 'Niedosłuch',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: 'select',
  },
  {
    id: 8,
    name: 'dement',
    label: 'Demencja',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: 'select',
  },
  {
    id: 9,
    name: 'miazdz',
    label: 'Miażdżyca naczyń obwodowych',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: 'select',
  },
  {
    id: 10,
    name: 'zawal',
    label: 'Przebyty zawał serca',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: 'select',
  },
  {
    id: 11,
    name: 'depres',
    label: 'Depresja',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: 'select',
  },
  {
    id: 12,
    name: 'diabet',
    label: 'Cukrzyca',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: 'select',
  },
];
