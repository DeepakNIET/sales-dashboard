"use client";

import * as React from "react";
import { Package, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/atoms/Button";

export function Navbar() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="fixed top-0 inset-x-0 h-16 z-50 flex items-center justify-between px-6 lg:px-12 bg-card/60 dark:bg-card/40 backdrop-blur-2xl backdrop-saturate-150 border-b border-border shadow-sm safe-area-padding">
            <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-accent" />
                <span className="font-semibold text-foreground tracking-tight hidden sm:block">
                    Sales Intelligence
                </span>
            </div>

            <div className="flex items-center gap-4">
                {mounted && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        className="w-9 h-9 rounded-full bg-background/50 hover:bg-muted"
                        aria-label="Toggle theme"
                    >
                        {resolvedTheme === "dark" ? (
                            <Sun className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                        ) : (
                            <Moon className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                        )}
                    </Button>
                )}
            </div>
        </nav>
    );
}
