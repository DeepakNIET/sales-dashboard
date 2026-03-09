import * as React from "react";
import { Input } from "@/components/atoms/Input";
import { Filter } from "lucide-react";

interface ThresholdFilterProps {
    threshold: number;
    onThresholdChange: (value: number) => void;
}

export function ThresholdFilter({ threshold, onThresholdChange }: ThresholdFilterProps) {
    return (
        <div className="flex items-center gap-2 max-w-xs bg-muted/50 p-1.5 rounded-lg border border-border">
            <Filter className="w-4 h-4 text-muted-foreground ml-2" />
            <Input
                type="number"
                value={threshold || ""}
                onChange={(e) => onThresholdChange(Number(e.target.value))}
                placeholder="Set sales threshold..."
                className="h-8 bg-transparent border-none md:w-[150px] lg:w-[180px] focus-visible:ring-0 shadow-none px-2"
            />
        </div>
    );
}
