import * as React from "react";
import { Button } from "@/components/atoms/Button";

interface YearSelectorProps {
    years: number[];
    selectedYear: number;
    onYearSelect: (year: number) => void;
}

export function YearSelector({ years, selectedYear, onYearSelect }: YearSelectorProps) {
    return (
        <div className="flex gap-2">
            {years.map((year) => (
                <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "secondary"}
                    size="sm"
                    onClick={() => onYearSelect(year)}
                    className="rounded-full"
                >
                    {year}
                </Button>
            ))}
        </div>
    );
}
