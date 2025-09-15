import { Card } from "@/components/ui/card";
import { WalletCard } from "./WalletCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Wallet, 
  CreditCard, 
  Gift, 
  TrendingUp, 
  AlertCircle,
  Calendar,
  Bitcoin,
  DollarSign,
  Percent
} from "lucide-react";

const mockUserData = {
  cryptoBalance: {
    value: "₿ 0.156",
    fiatValue: "R$ 28.450,00",
    change: "+12.5%",
    changeType: "positive" as const
  },
  creditDebt: {
    total: "R$ 3.240,00",
    nextPayment: "R$ 540,00",
    dueDate: "25/10/2024",
    installments: "6/12"
  },
  cashback: {
    available: "R$ 287,50",
    pending: "R$ 145,30", 
    totalEarned: "R$ 1.456,80"
  },
  fixedIncome: {
    invested: "R$ 15.000,00",
    yield: "5.0%",
    monthlyReturn: "R$ 750,00",
    totalReturn: "R$ 2.250,00"
  }
};

export function UserDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
          <Wallet className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold gradient-text">Carteira do Usuário</h1>
          <p className="text-muted-foreground">Seus investimentos e cashback em DeFi</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <WalletCard
          title="Saldo Crypto"
          value={mockUserData.cryptoBalance.value}
          change={mockUserData.cryptoBalance.change}
          changeType={mockUserData.cryptoBalance.changeType}
          icon={<Bitcoin className="h-5 w-5" />}
          variant="crypto"
        />
        
        <WalletCard
          title="Dívida Crediário"
          value={mockUserData.creditDebt.total}
          change={`Próx: ${mockUserData.creditDebt.nextPayment}`}
          changeType="neutral"
          icon={<CreditCard className="h-5 w-5" />}
        />
        
        <WalletCard
          title="Cashback Disponível"
          value={mockUserData.cashback.available}
          change={`+${mockUserData.cashback.pending} pendente`}
          changeType="positive"
          icon={<Gift className="h-5 w-5" />}
          variant="cashback"
        />
        
        <WalletCard
          title="Renda Fixa"
          value={mockUserData.fixedIncome.monthlyReturn}
          change={`${mockUserData.fixedIncome.yield} ao mês`}
          changeType="positive"
          icon={<TrendingUp className="h-5 w-5" />}
          variant="yield"
        />
      </div>

      <Tabs defaultValue="crypto" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-secondary">
          <TabsTrigger value="crypto">Crypto</TabsTrigger>
          <TabsTrigger value="crediario">Crediário</TabsTrigger>
          <TabsTrigger value="cashback">Cashback</TabsTrigger>
          <TabsTrigger value="renda-fixa">Renda Fixa</TabsTrigger>
        </TabsList>

        <TabsContent value="crypto" className="space-y-4">
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bitcoin className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Portfólio Crypto</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-primary text-primary-foreground">
                  <div className="text-sm opacity-90">Saldo Total</div>
                  <div className="text-2xl font-bold">{mockUserData.cryptoBalance.value}</div>
                  <div className="text-sm opacity-80">{mockUserData.cryptoBalance.fiatValue}</div>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="text-sm text-muted-foreground">Variação 24h</div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span className="text-xl font-bold text-success">{mockUserData.cryptoBalance.change}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="text-sm text-muted-foreground">Origem dos Recursos</div>
                  <div className="space-y-2 mt-2">
                    <div className="flex justify-between">
                      <span>Vendas PIX</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                    <div className="flex justify-between">
                      <span>Cashback</span>
                      <span>25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                    <div className="flex justify-between">
                      <span>Investimentos</span>
                      <span>15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="crediario" className="space-y-4">
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-6 w-6 text-warning" />
              <h3 className="text-xl font-semibold">Contratos de Crediário</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  <div>
                    <div className="font-semibold">Próximo Vencimento</div>
                    <div className="text-sm text-muted-foreground">{mockUserData.creditDebt.dueDate}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-warning">{mockUserData.creditDebt.nextPayment}</div>
                  <div className="text-sm text-muted-foreground">{mockUserData.creditDebt.installments} parcelas</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <div className="text-xl font-bold">{mockUserData.creditDebt.total}</div>
                  <div className="text-sm text-muted-foreground">Saldo Devedor</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <div className="text-xl font-bold text-success">Em Dia</div>
                  <div className="text-sm text-muted-foreground">Status</div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary">
                <div className="text-sm text-muted-foreground mb-2">Progresso do Pagamento</div>
                <Progress value={50} className="h-3" />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>6 de 12 pagas</span>
                  <span>50%</span>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="cashback" className="space-y-4">
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="h-6 w-6 text-success" />
              <h3 className="text-xl font-semibold">Programa de Cashback</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-gradient-success text-success-foreground">
                <div className="text-sm opacity-90">Disponível</div>
                <div className="text-2xl font-bold">{mockUserData.cashback.available}</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-secondary">
                <div className="text-sm text-muted-foreground">Pendente</div>
                <div className="text-xl font-bold text-warning">{mockUserData.cashback.pending}</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-secondary">
                <div className="text-sm text-muted-foreground">Total Acumulado</div>
                <div className="text-xl font-bold">{mockUserData.cashback.totalEarned}</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-secondary">
              <div className="text-sm text-muted-foreground mb-2">Próximo Nível de Cashback</div>
              <Progress value={75} className="h-3" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>R$ 1.456 / R$ 2.000</span>
                <span>+0.5% de cashback</span>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="renda-fixa" className="space-y-4">
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Investimentos Renda Fixa</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-accent text-accent-foreground">
                  <div className="text-sm opacity-90">Capital Investido</div>
                  <div className="text-2xl font-bold">{mockUserData.fixedIncome.invested}</div>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="text-sm text-muted-foreground">Rendimento</div>
                  <div className="flex items-center gap-2">
                    <Percent className="h-4 w-4 text-success" />
                    <span className="text-xl font-bold text-success">{mockUserData.fixedIncome.yield}</span>
                    <span className="text-sm text-muted-foreground">ao mês</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="text-sm text-muted-foreground">Retorno Mensal</div>
                  <div className="text-xl font-bold text-primary">{mockUserData.fixedIncome.monthlyReturn}</div>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="text-sm text-muted-foreground">Total Acumulado</div>
                  <div className="text-xl font-bold text-success">{mockUserData.fixedIncome.totalReturn}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Badge variant="outline" className="w-full justify-center p-2">
                <DollarSign className="h-4 w-4 mr-2" />
                Próximo Aporte: R$ 1.000,00 em 5 dias
              </Badge>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}