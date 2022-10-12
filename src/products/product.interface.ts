export interface Product {
  readonly name: string;
  readonly price: number;
  readonly image: string;
  readonly category?: string;
  readonly description?: string;
  readonly isAvailable?: boolean;
  readonly quantity?: number;
  readonly rating?: number;
  readonly discount?: number;
}
