"use client";

import * as React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import { SalesData, ChartType } from "@/types";

interface SalesMetricsChartProps {
    data: SalesData[];
    type: ChartType;
    threshold: number;
}

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316"];

export function SalesMetricsChart({ data, type, threshold }: SalesMetricsChartProps) {
    const filteredData = React.useMemo(() => {
        return data.filter((item) => item.sales >= threshold);
    }, [data, threshold]);

    if (filteredData.length === 0) {
        return (
            <div className="flex h-[300px] items-center justify-center text-muted-foreground bg-muted/10 rounded-xl border border-dashed border-border">
                No sales data meets the current threshold.
            </div>
        );
    }

    return (
        <div className="w-full h-[350px] sm:h-[400px] lg:h-[500px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
                {type === "bar" ? (
                    <BarChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)" }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)" }} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--foreground)", borderRadius: "8px", backdropFilter: "blur(4px)" }}
                            itemStyle={{ color: "#3b82f6" }}
                        />
                        <Legend wrapperStyle={{ paddingTop: "20px" }} />
                        <Bar dataKey="sales" name="Total Sales ($)" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                ) : type === "line" ? (
                    <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)" }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "var(--muted-foreground)" }} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--foreground)", borderRadius: "8px", backdropFilter: "blur(4px)" }}
                            itemStyle={{ color: "#10b981" }}
                        />
                        <Legend wrapperStyle={{ paddingTop: "20px" }} />
                        <Line
                            type="monotone"
                            dataKey="sales"
                            name="Total Sales ($)"
                            stroke="#10b981"
                            strokeWidth={3}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                ) : (
                    <PieChart>
                        <Pie
                            data={filteredData}
                            dataKey="sales"
                            nameKey="month"
                            cx="50%"
                            cy="50%"
                            outerRadius={130}
                            innerRadius={70}
                            paddingAngle={2}
                            label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                            labelLine={{ stroke: "var(--muted-foreground)" }}
                        >
                            {filteredData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", color: "var(--foreground)", borderRadius: "8px", backdropFilter: "blur(4px)" }}
                        />
                        <Legend wrapperStyle={{ paddingTop: "20px" }} />
                    </PieChart>
                )}
            </ResponsiveContainer>
        </div>
    );
}
