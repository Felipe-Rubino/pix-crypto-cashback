import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MerchantDashboard } from "./MerchantDashboard";
import { UserDashboard } from "./UserDashboard";
import { Store, User, ArrowLeftRight } from "lucide-react";

export function DashboardSwitcher() {
  const [activeRole, setActiveRole] = useState<"merchant" | "user">("merchant");

  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Role Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <ArrowLeftRight className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Ecossistema DeFi</h2>
            <p className="text-sm text-muted-foreground">
              Alterne entre visões de comerciante e usuário
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 p-1 rounded-lg bg-secondary">
          <Button
            variant={activeRole === "merchant" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveRole("merchant")}
            className="gap-2"
          >
            <Store className="h-4 w-4" />
            Comerciante
          </Button>
          <Button
            variant={activeRole === "user" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveRole("user")}
            className="gap-2"
          >
            <User className="h-4 w-4" />
            Usuário
          </Button>
        </div>
      </div>

      {/* Active Badge */}
      <div className="flex justify-center">
        <Badge variant="outline" className="gap-2 px-4 py-2">
          {activeRole === "merchant" ? (
            <>
              <Store className="h-4 w-4" />
              Visão do Comerciante
            </>
          ) : (
            <>
              <User className="h-4 w-4" />
              Visão do Usuário
            </>
          )}
        </Badge>
      </div>

      {/* Dashboard Content */}
      {activeRole === "merchant" ? <MerchantDashboard /> : <UserDashboard />}
    </div>
  );
}