export interface IForm {
  readonly id: number;
  readonly name: string;
  readonly label: string;
  readonly options?: { label: string; value: number }[];
  readonly type: 'select' | 'text' | 'number';
}
