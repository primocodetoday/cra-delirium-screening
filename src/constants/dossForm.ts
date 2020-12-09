interface DossForm {
  id: number;
  name: string;
  label: string;
  options: string[];
  type: 'select' | 'text';
}

export const dossForm: DossForm[] = [
  {
    id: 1,
    name: 'doss01',
    label: '1.Pacjent podsypia podczas rozmowy lub czynności?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 2,
    name: 'doss02',
    label: '2.Ulega łatwo rozproszeniu na bodźce z otoczenia?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 3,
    name: 'doss03',
    label: '3.Nie kończy pytania lub zdania?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 4,
    name: 'doss04',
    label: '4.Odpowiada nie na temat?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 5,
    name: 'doss05',
    label: '5.Reaguje z opóźnieniem na polecenia?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 6,
    name: 'doss06',
    label: 'Myśli, że znajduje się gdzie indziej?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 7,
    name: 'doss07',
    label: 'Podnosi przedmioty, wykonuje bezładne ruchy, niespokojny?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 8,
    name: 'doss08',
    label: 'Ciągnie za linie naczyniowe, sondy, dreny, cewniki itp.?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 9,
    name: 'doss09',
    label: 'Łatwo ulega emocjom (lękowi, złości, zdenerwowaniu)?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 10,
    name: 'doss10',
    label: 'Widzi osoby/przedmioty jako kogoś/coś innego?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 11,
    name: 'doss11',
    label: 'Zachowuje uwagę w trakcie rozmowy lub czynności?',
    options: [' zawsze', 'czasem/nigdy'],
    type: 'select',
  },
  {
    id: 12,
    name: 'doss12',
    label: 'Rozpoznaje porę dnia?',
    options: [' zawsze', 'czasem/nigdy'],
    type: 'select',
  },
  {
    id: 13,
    name: 'doss13',
    label: 'Pamięta świeże zdarzenia?',
    options: [' zawsze', 'czasem/nigdy'],
    type: 'select',
  },
];
