interface CoinData {
  coin: string;
  symbol: string;
  price: number;
  changePercent: string;
  minPrice: number;
  maxPrice: number;
  chatData: {
    name: string;
    value: number;
  }[];
}

interface MockData {
  data: CoinData[];
}

export type { CoinData, MockData };
