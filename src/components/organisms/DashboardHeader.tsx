import * as React from "react";
import { TrendingUp } from "lucide-react";

export function DashboardHeader() {
    return (
        <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between pb-2 shrink-0">
            <div>
                <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    Dashboard Overview
                </h2>
                <p className="text-muted-foreground mt-0.5 text-xs md:text-sm">
                    Analyze and track your performance history instantly.
                </p>
            </div>
            <div className="flex items-center space-x-2 bg-muted/50 px-3 py-1.5 rounded-lg text-xs font-medium border border-border mt-2 md:mt-0 shadow-inner">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-muted-foreground">System Online</span>
            </div>
        </div>
    );
}
