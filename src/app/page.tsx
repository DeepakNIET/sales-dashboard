"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/atoms/Card";
import { ChartTypeSelector } from "@/components/molecules/ChartTypeSelector";
import { YearSelector } from "@/components/molecules/YearSelector";
import { ThresholdFilter } from "@/components/molecules/ThresholdFilter";
import { SalesMetricsChart } from "@/components/organisms/SalesMetricsChart";
import { DashboardHeader } from "@/components/organisms/DashboardHeader";
import { ChartType, YearlySales } from "@/types";

export default function Home() {
  const [data, setData] = useState<YearlySales[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState<number>(0);

  useEffect(() => {
    async function fetchSalesData() {
      try {
        const res = await fetch("/api/sales");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSalesData();
  }, []);

  const years = data.map((d) => d.year).sort((a, b) => b - a);
  const currentYearData = data.find((d) => d.year === selectedYear)?.data || [];

  return (
    <div className="min-h-screen bg-transparent pt-20 pb-12 font-sans flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col px-4 md:px-6 lg:px-8 gap-6">
        <DashboardHeader />

        {isLoading ? (
          <Card className="flex-1 flex items-center justify-center min-h-0">
            <div className="flex flex-col items-center gap-4 text-muted-foreground">
              <span className="w-8 h-8 rounded-full border-4 border-accent border-t-transparent animate-spin" />
              <p>Loading market intelligence...</p>
            </div>
          </Card>
        ) : (
          <div className="flex flex-col flex-1 gap-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shrink-0">
              <YearSelector
                years={years}
                selectedYear={selectedYear}
                onYearSelect={setSelectedYear}
              />
              <ThresholdFilter
                threshold={threshold}
                onThresholdChange={setThreshold}
              />
            </div>

            <Card className="w-full flex-1 flex flex-col min-h-[450px] lg:min-h-[600px] p-2">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0 relative z-10 shrink-0 pb-4">
                <div>
                  <CardTitle className="text-xl md:text-2xl font-bold">Revenue Projections</CardTitle>
                  <CardDescription className="text-sm md:text-base mt-1 text-muted-foreground hidden sm:block">
                    Monthly sales distribution for {selectedYear}
                  </CardDescription>
                </div>
                <ChartTypeSelector
                  selectedType={chartType}
                  onTypeChange={setChartType}
                />
              </CardHeader>
              <CardContent className="flex-1 w-full pt-0 pb-4">
                <SalesMetricsChart
                  data={currentYearData}
                  type={chartType}
                  threshold={threshold}
                />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shrink-0 pr-2 md:pr-0 pb-4 md:pb-0">
              <Card className="bg-gradient-to-br from-card to-accent/5 overflow-hidden relative border-none ring-1 ring-border shadow-sm">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent to-purple-500" />
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-sm md:text-lg">Total Operations</CardTitle>
                  <p className="text-xl md:text-3xl font-black text-foreground mt-1 tracking-tighter">
                    ${currentYearData.reduce((acc, sum) => acc + sum.sales, 0).toLocaleString()}
                  </p>
                </CardHeader>
              </Card>
              <Card className="shadow-sm">
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-sm md:text-lg flex items-center gap-2">Highest Value</CardTitle>
                  <p className="text-xl md:text-3xl font-black text-green-400 mt-1 tracking-tighter">
                    ${Math.max(...currentYearData.map(d => d.sales), 0).toLocaleString()}
                  </p>
                </CardHeader>
              </Card>
              <Card className="shadow-sm">
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="text-sm md:text-lg flex items-center gap-2">Lowest Period</CardTitle>
                  <p className="text-xl md:text-3xl font-black text-red-500 mt-1 tracking-tighter">
                    ${Math.min(...currentYearData.map(d => d.sales), 0).toLocaleString()}
                  </p>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
