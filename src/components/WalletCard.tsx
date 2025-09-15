import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, DollarSign, Bitcoin, Percent } from "lucide-react";

interface WalletCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: React.ReactNode;
  className?: string;
  variant?: "default" | "crypto" | "cashback" | "yield";
}

const variantStyles = {
  default: "glass-card",
  crypto: "bg-gradient-primary text-primary-foreground shadow-glow",
  cashback: "bg-gradient-success text-success-foreground shadow-success",
  yield: "bg-gradient-accent text-accent-foreground",
};

const getChangeIcon = (type?: "positive" | "negative" | "neutral") => {
  switch (type) {
    case "positive":
      return <TrendingUp className="h-4 w-4 text-success" />;
    case "negative":
      return <TrendingDown className="h-4 w-4 text-destructive" />;
    default:
      return null;
  }
};

export function WalletCard({
  title,
  value,
  change,
  changeType,
  icon,
  className,
  variant = "default",
}: WalletCardProps) {
  return (
    <Card
      className={cn(
        "p-6 transition-all duration-300 hover:scale-[1.02] animate-slide-up",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-sm opacity-90">{title}</h3>
        {icon && <div className="opacity-80">{icon}</div>}
      </div>
      
      <div className="space-y-2">
        <div className="text-2xl font-bold">{value}</div>
        
        {change && (
          <div className="flex items-center gap-1">
            {getChangeIcon(changeType)}
            <span
              className={cn(
                "text-sm font-medium",
                changeType === "positive" && "text-success",
                changeType === "negative" && "text-destructive",
                changeType === "neutral" && "text-muted-foreground"
              )}
            >
              {change}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}