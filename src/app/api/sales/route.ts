import { NextResponse } from "next/server";
import { YearlySales } from "@/types";

// Random sales from Kaggle-like dataset context
const mockData: YearlySales[] = [
    {
        year: 2022,
        data: [
            { month: "Jan", sales: 12000 },
            { month: "Feb", sales: 19000 },
            { month: "Mar", sales: 15500 },
            { month: "Apr", sales: 22000 },
            { month: "May", sales: 28000 },
            { month: "Jun", sales: 34500 },
            { month: "Jul", sales: 31000 },
            { month: "Aug", sales: 28900 },
            { month: "Sep", sales: 36000 },
            { month: "Oct", sales: 42000 },
            { month: "Nov", sales: 48000 },
            { month: "Dec", sales: 55000 },
        ],
    },
    {
        year: 2023,
        data: [
            { month: "Jan", sales: 25000 },
            { month: "Feb", sales: 28000 },
            { month: "Mar", sales: 23000 },
            { month: "Apr", sales: 35000 },
            { month: "May", sales: 39000 },
            { month: "Jun", sales: 48000 },
            { month: "Jul", sales: 42000 },
            { month: "Aug", sales: 45000 },
            { month: "Sep", sales: 51000 },
            { month: "Oct", sales: 58000 },
            { month: "Nov", sales: 62000 },
            { month: "Dec", sales: 75000 },
        ],
    },
    {
        year: 2024,
        data: [
            { month: "Jan", sales: 32000 },
            { month: "Feb", sales: 36000 },
            { month: "Mar", sales: 34000 },
            { month: "Apr", sales: 45000 },
            { month: "May", sales: 52000 },
            { month: "Jun", sales: 61000 },
            { month: "Jul", sales: 58000 },
            { month: "Aug", sales: 64000 },
            { month: "Sep", sales: 70000 },
            { month: "Oct", sales: 76000 },
            { month: "Nov", sales: 88000 },
            { month: "Dec", sales: 105000 },
        ],
    },
];

export async function GET() {
    // Simulate network latency (200ms)
    await new Promise((resolve) => setTimeout(resolve, 200));

    return NextResponse.json(mockData);
}
