export interface SalesData {
    month: string;
    sales: number;
}

export interface YearlySales {
    year: number;
    data: SalesData[];
}

export type ChartType = "bar" | "line" | "pie";
