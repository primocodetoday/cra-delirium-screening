import { IForm } from './forms.interface';
import { InputType } from 'components/InputSelector';

export const treatForm: IForm[] = [
  {
    id: 1,
    name: 'czashosp',
    label: 'Czas hospitalizacji (dni)',
    type: InputType.NUMBER,
  },
  {
    id: 2,
    name: 'sedacja',
    label: 'Przedłużona sedacja ',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: InputType.RADIO,
  },
  {
    id: 3,
    name: 'lekppsych',
    label: 'Zastosowanie leków p/psychotycznych',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: InputType.RADIO,
  },
  {
    id: 4,
    name: 'reop',
    label: 'Reoperacja',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: InputType.RADIO,
  },
  {
    id: 5,
    name: 'przymus',
    label: 'Długość stosowania przymusu bezpośredniego (h)',
    type: InputType.NUMBER,
  },
  {
    id: 6,
    name: 'wentyl',
    label: 'Czas stosowania sztucznej wentylacji (h)',
    type: InputType.NUMBER,
  },
  {
    id: 7,
    name: 'intub',
    label: 'Ilość ponownych intubacji',
    type: InputType.NUMBER,
  },
  {
    id: 8,
    name: 'swiadom',
    label: 'Czas występowania zaburzeń świadomości (h)',
    type: InputType.NUMBER,
  },
  {
    id: 9,
    name: 'transfuz',
    label: 'Ilość transfuzji preparatów krwi w OINP',
    type: InputType.NUMBER,
  },
  {
    id: 10,
    name: 'resuscyt',
    label: 'Resuscytacja',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: InputType.RADIO,
  },
  {
    id: 11,
    name: 'tnerkozast',
    label: 'Czas stosowania terapii nerkozastępczej (h)',
    type: InputType.NUMBER,
  },
  {
    id: 12,
    name: 'krazenie',
    label: 'Konieczność mechanicznego wspomagania krążenia',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: InputType.RADIO,
  },
  {
    id: 13,
    name: 'katechol',
    label: 'Czas stosowania katecholamin (h)',
    type: InputType.NUMBER,
  },
  {
    id: 14,
    name: 'ponowprzyj',
    label: 'Ilość ponownych przyjęć na OINP',
    type: InputType.NUMBER,
  },
  {
    id: 15,
    name: 'antybiot',
    label: 'Ilość nowych cykli antybiotykoterapii',
    type: InputType.NUMBER,
  },
  {
    id: 16,
    name: 'zgon30dni',
    label: 'Śmiertelność 30-dniowa ',
    options: [
      { label: 'tak', value: 1 },
      { label: 'nie', value: 0 },
    ],
    type: InputType.RADIO,
  },
];
