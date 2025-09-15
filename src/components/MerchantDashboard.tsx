import { Card } from "@/components/ui/card";
import { WalletCard } from "./WalletCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Coins, 
  CreditCard, 
  Gift, 
  PiggyBank, 
  QrCode,
  Users,
  TrendingUp,
  Calendar,
  Bitcoin
} from "lucide-react";

const mockMerchantData = {
  pixTocrypto: {
    value: "₿ 2.847",
    fiatValue: "R$ 847.230,00",
    dailyVolume: "+R$ 23.450,00",
    transactions: 247
  },
  customerCashback: {
    totalAllocated: "R$ 12.340,00", 
    activeCustomers: 89,
    averagePerCustomer: "R$ 138,65"
  },
  creditReceivables: {
    total: "R$ 45.680,00",
    nextPayment: "R$ 8.920,00",
    dueDate: "15/10/2024"
  },
  yieldFarming: {
    totalInvested: "R$ 156.000,00",
    monthlyYield: "5.2%",
    expectedReturn: "R$ 8.112,00"
  }
};

export function MerchantDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
          <Coins className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold gradient-text">Carteira do Comerciante</h1>
          <p className="text-muted-foreground">Gerencie suas vendas e investimentos DeFi</p>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <WalletCard
          title="Vendas PIX → Crypto"
          value={mockMerchantData.pixTocrypto.value}
          change={`+${mockMerchantData.pixTocrypto.dailyVolume} hoje`}
          changeType="positive"
          icon={<Bitcoin className="h-5 w-5" />}
          variant="crypto"
        />
        
        <WalletCard
          title="Cashback dos Clientes"
          value={mockMerchantData.customerCashback.totalAllocated}
          change={`${mockMerchantData.customerCashback.activeCustomers} clientes ativos`}
          changeType="neutral"
          icon={<Gift className="h-5 w-5" />}
          variant="cashback"
        />
        
        <WalletCard
          title="A Receber (Crediário)"
          value={mockMerchantData.creditReceivables.total}
          change={`Próximo: ${mockMerchantData.creditReceivables.nextPayment}`}
          changeType="neutral"
          icon={<CreditCard className="h-5 w-5" />}
        />
        
        <WalletCard
          title="Rendimento DeFi"
          value={mockMerchantData.yieldFarming.expectedReturn}
          change={`${mockMerchantData.yieldFarming.monthlyYield} ao mês`}
          changeType="positive"
          icon={<PiggyBank className="h-5 w-5" />}
          variant="yield"
        />
      </div>

      {/* Detailed Tabs */}
      <Tabs defaultValue="pix-crypto" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-secondary">
          <TabsTrigger value="pix-crypto">PIX → Crypto</TabsTrigger>
          <TabsTrigger value="cashback">Cashback</TabsTrigger>
          <TabsTrigger value="crediario">Crediário</TabsTrigger>
          <TabsTrigger value="defi">DeFi</TabsTrigger>
        </TabsList>

        <TabsContent value="pix-crypto" className="space-y-4">
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <QrCode className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Conversões PIX → Crypto</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-secondary">
                <div className="text-2xl font-bold text-primary">{mockMerchantData.pixTocrypto.transactions}</div>
                <div className="text-sm text-muted-foreground">Transações hoje</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary">
                <div className="text-2xl font-bold">{mockMerchantData.pixTocrypto.fiatValue}</div>
                <div className="text-sm text-muted-foreground">Valor em BRL</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary">
                <div className="text-2xl font-bold text-success">Ativo</div>
                <div className="text-sm text-muted-foreground">QR Code PIX</div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="cashback" className="space-y-4">
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Gift className="h-6 w-6 text-success" />
              <h3 className="text-xl font-semibold">Gestão de Cashback</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-secondary">
                <div className="text-2xl font-bold text-success">{mockMerchantData.customerCashback.activeCustomers}</div>
                <div className="text-sm text-muted-foreground">Clientes Ativos</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary">
                <div className="text-2xl font-bold">{mockMerchantData.customerCashback.averagePerCustomer}</div>
                <div className="text-sm text-muted-foreground">Média por Cliente</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary">
                <div className="text-2xl font-bold">{mockMerchantData.customerCashback.totalAllocated}</div>
                <div className="text-sm text-muted-foreground">Total Alocado</div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="crediario" className="space-y-4">
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-6 w-6 text-warning" />
              <h3 className="text-xl font-semibold">Valores a Receber</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 rounded-lg bg-secondary">
                <div>
                  <div className="font-semibold">Próximo Vencimento</div>
                  <div className="text-sm text-muted-foreground">{mockMerchantData.creditReceivables.dueDate}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-warning">{mockMerchantData.creditReceivables.nextPayment}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <div className="text-xl font-bold">{mockMerchantData.creditReceivables.total}</div>
                  <div className="text-sm text-muted-foreground">Total a Receber</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary">
                  <div className="text-xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Contratos Ativos</div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="defi" className="space-y-4">
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <PiggyBank className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Rendimentos DeFi</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-accent text-accent-foreground">
                  <div className="text-sm opacity-90">Capital Investido</div>
                  <div className="text-2xl font-bold">{mockMerchantData.yieldFarming.totalInvested}</div>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="text-sm text-muted-foreground">Rendimento Mensal</div>
                  <div className="text-xl font-bold text-success">{mockMerchantData.yieldFarming.monthlyYield}</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="text-sm text-muted-foreground">Retorno Esperado</div>
                  <div className="text-xl font-bold text-primary">{mockMerchantData.yieldFarming.expectedReturn}</div>
                </div>
                
                <Badge variant="outline" className="w-full justify-center p-2">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Estratégia Ativa
                </Badge>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}