import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-xl border-border/70 bg-card/80"
        aria-label="Toggle theme"
        disabled
      />
    );
  }

  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-xl border-border/70 bg-card/80 shadow-sm backdrop-blur transition-colors hover:border-accent/30 hover:bg-accent/10"
          onClick={() => setTheme(nextTheme)}
          aria-label={`Switch to ${nextTheme} mode`}
          aria-pressed={isDark}
        >
          {isDark ? <Sun size={18} aria-hidden /> : <Moon size={18} aria-hidden />}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>{theme === "system" ? `System (${resolvedTheme})` : `Switch to ${nextTheme}`}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;
