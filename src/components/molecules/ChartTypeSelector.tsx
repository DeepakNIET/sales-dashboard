import * as React from "react";
import { Button } from "@/components/atoms/Button";
import { ChartType } from "@/types";
import { BarChart, LineChart, PieChart } from "lucide-react";

interface ChartTypeSelectorProps {
    selectedType: ChartType;
    onTypeChange: (type: ChartType) => void;
}

export function ChartTypeSelector({ selectedType, onTypeChange }: ChartTypeSelectorProps) {
    return (
        <div className="flex gap-2">
            <Button
                variant={selectedType === "bar" ? "default" : "outline"}
                size="sm"
                onClick={() => onTypeChange("bar")}
            >
                <BarChart className="w-4 h-4 mr-2" />
                Bar
            </Button>
            <Button
                variant={selectedType === "line" ? "default" : "outline"}
                size="sm"
                onClick={() => onTypeChange("line")}
            >
                <LineChart className="w-4 h-4 mr-2" />
                Line
            </Button>
            <Button
                variant={selectedType === "pie" ? "default" : "outline"}
                size="sm"
                onClick={() => onTypeChange("pie")}
            >
                <PieChart className="w-4 h-4 mr-2" />
                Pie
            </Button>
        </div>
    );
}
