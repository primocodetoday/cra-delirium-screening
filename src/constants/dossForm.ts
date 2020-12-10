import { IForm } from './form.interface';

export const dossForm: IForm[] = [
  {
    id: 1,
    name: 'doss01',
    label: '1.Pacjent podsypia podczas rozmowy lub czynności?',
    options: [
      { label: 'nigdy', value: 0 },
      { label: 'czasem/zawsze', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 2,
    name: 'doss02',
    label: '2.Ulega łatwo rozproszeniu na bodźce z otoczenia?',
    options: [
      { label: 'nigdy', value: 0 },
      { label: 'czasem/zawsze', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 3,
    name: 'doss03',
    label: '3.Nie kończy pytania lub zdania?',
    options: [
      { label: 'nigdy', value: 0 },
      { label: 'czasem/zawsze', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 4,
    name: 'doss04',
    label: '4.Odpowiada nie na temat?',
    options: [
      { label: 'nigdy', value: 0 },
      { label: 'czasem/zawsze', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 5,
    name: 'doss05',
    label: '5.Reaguje z opóźnieniem na polecenia?',
    options: [
      { label: 'nigdy', value: 0 },
      { label: 'czasem/zawsze', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 6,
    name: 'doss06',
    label: 'Myśli, że znajduje się gdzie indziej?',
    options: [
      { label: 'nigdy', value: 0 },
      { label: 'czasem/zawsze', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 7,
    name: 'doss07',
    label: 'Podnosi przedmioty, wykonuje bezładne ruchy, niespokojny?',
    options: [
      { label: 'nigdy', value: 0 },
      { label: 'czasem/zawsze', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 8,
    name: 'doss08',
    label: 'Ciągnie za linie naczyniowe, sondy, dreny, cewniki itp.?',
    options: [
      { label: 'nigdy', value: 0 },
      { label: 'czasem/zawsze', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 9,
    name: 'doss09',
    label: 'Łatwo ulega emocjom (lękowi, złości, zdenerwowaniu)?',
    options: [
      { label: 'nigdy', value: 0 },
      { label: 'czasem/zawsze', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 10,
    name: 'doss10',
    label: 'Widzi osoby/przedmioty jako kogoś/coś innego?',
    options: [
      { label: 'nigdy', value: 0 },
      { label: 'czasem/zawsze', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 11,
    name: 'doss11',
    label: 'Zachowuje uwagę w trakcie rozmowy lub czynności?',
    options: [
      { label: 'zawsze', value: 0 },
      { label: 'czasem/nigdy', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 12,
    name: 'doss12',
    label: 'Rozpoznaje porę dnia?',
    options: [
      { label: 'zawsze', value: 0 },
      { label: 'czasem/nigdy', value: 1 },
    ],
    type: 'select',
  },
  {
    id: 13,
    name: 'doss13',
    label: 'Pamięta świeże zdarzenia?',
    options: [
      { label: 'zawsze', value: 0 },
      { label: 'czasem/nigdy', value: 1 },
    ],
    type: 'select',
  },
];
