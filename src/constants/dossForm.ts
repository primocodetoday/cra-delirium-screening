﻿interface DossForm {
  id: number;
  label: string;
  options: string[];
  type: 'select' | 'text';
}

export const dossForm: DossForm[] = [
  {
    id: 1,
    label: '1.Pacjent podsypia podczas rozmowy lub czynności?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 2,
    label: '2.Ulega łatwo rozproszeniu na bodźce z otoczenia?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 3,
    label: '3.Nie kończy pytania lub zdania?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 4,
    label: '4.Odpowiada nie na temat?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 5,
    label: '5.Reaguje z opóźnieniem na polecenia?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
  {
    id: 6,
    label: 'Myśli, że znajduje się gdzie indziej?',
    options: ['nigdy', 'czasem/zawsze'],
    type: 'select',
  },
];
