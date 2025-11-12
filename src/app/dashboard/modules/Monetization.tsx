"use client";

import { useState } from "react";
import { DollarSign, TrendingUp, Link as LinkIcon, BarChart3, Users, Eye, MousePointerClick, Share2, Download } from "lucide-react";

export default function Monetization() {
  const [activeTab, setActiveTab] = useState<"overview" | "campaigns" | "analytics">("overview");

  const stats = [
    { label: "Receita Total", value: "R$ 12.450", change: "+24%", icon: DollarSign, color: "from-green-500 to-emerald-500" },
    { label: "Vendas este Mês", value: "89", change: "+12%", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
    { label: "Taxa de Conversão", value: "3.2%", change: "+0.8%", icon: MousePointerClick, color: "from-purple-500 to-pink-500" },
    { label: "Visualizações", value: "45.2K", change: "+18%", icon: Eye, color: "from-orange-500 to-red-500" }
  ];

  const campaigns = [
    {
      name: "Campanha de Vídeos Motivacionais",
      status: "Ativa",
      revenue: "R$ 3.240",
      clicks: "1.2K",
      conversion: "4.1%"
    },
    {
      name: "Curso de IA para Iniciantes",
      status: "Ativa",
      revenue: "R$ 5.890",
      clicks: "2.8K",
      conversion: "5.3%"
    },
    {
      name: "Templates Premium",
      status: "Pausada",
      revenue: "R$ 1.120",
      clicks: "450",
      conversion: "2.8%"
    }
  ];

  const affiliateLinks = [
    { product: "Mind AI Pro", commission: "30%", earnings: "R$ 2.340" },
    { product: "Ferramentas Premium", commission: "25%", earnings: "R$ 1.890" },
    { product: "Curso Avançado", commission: "40%", earnings: "R$ 4.560" }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-6 border border-yellow-500/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Monetização e Renda</h2>
            <p className="text-gray-400">
              Acompanhe seus ganhos, campanhas e performance de vendas em tempo real.
            </p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition-all flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Exportar Relatório</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-white/10">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === "overview"
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Visão Geral
        </button>
        <button
          onClick={() => setActiveTab("campaigns")}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === "campaigns"
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Campanhas
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={`px-6 py-3 font-semibold transition-all ${
            activeTab === "analytics"
              ? "text-yellow-400 border-b-2 border-yellow-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Analytics
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-yellow-400" />
              <span>Receita dos Últimos 7 Dias</span>
            </h3>
            <div className="space-y-3">
              {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day, index) => {
                const height = Math.random() * 100 + 50;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-sm text-gray-400 w-12">{day}</span>
                    <div className="flex-1 bg-white/5 rounded-full h-8 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-end pr-3"
                        style={{ width: `${height}%` }}
                      >
                        <span className="text-xs font-bold">R$ {(height * 10).toFixed(0)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span>Produtos Mais Vendidos</span>
            </h3>
            <div className="space-y-4">
              {[
                { name: "Vídeo Motivacional Premium", sales: 45, revenue: "R$ 2.250" },
                { name: "Pack de Templates", sales: 32, revenue: "R$ 1.920" },
                { name: "Curso Completo IA", sales: 28, revenue: "R$ 5.600" },
                { name: "Consultoria 1:1", sales: 12, revenue: "R$ 3.600" }
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/10">
                  <div>
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-sm text-gray-400">{product.sales} vendas</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-400">{product.revenue}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "campaigns" && (
        <div className="space-y-6">
          {/* Create Campaign Button */}
          <div className="flex justify-end">
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-yellow-500/50 transition-all">
              + Nova Campanha
            </button>
          </div>

          {/* Campaigns List */}
          <div className="grid grid-cols-1 gap-6">
            {campaigns.map((campaign, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{campaign.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        campaign.status === "Ativa"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </div>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-black/30 rounded-xl border border-white/10">
                    <div className="text-sm text-gray-400 mb-1">Receita</div>
                    <div className="text-2xl font-bold text-green-400">{campaign.revenue}</div>
                  </div>
                  <div className="p-4 bg-black/30 rounded-xl border border-white/10">
                    <div className="text-sm text-gray-400 mb-1">Cliques</div>
                    <div className="text-2xl font-bold">{campaign.clicks}</div>
                  </div>
                  <div className="p-4 bg-black/30 rounded-xl border border-white/10">
                    <div className="text-sm text-gray-400 mb-1">Conversão</div>
                    <div className="text-2xl font-bold text-purple-400">{campaign.conversion}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Affiliate Links */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
              <LinkIcon className="w-5 h-5 text-yellow-400" />
              <span>Links de Afiliado</span>
            </h3>
            <div className="space-y-3">
              {affiliateLinks.map((link, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/10">
                  <div>
                    <div className="font-semibold">{link.product}</div>
                    <div className="text-sm text-gray-400">Comissão: {link.commission}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-400">{link.earnings}</div>
                    <button className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors">
                      Copiar Link
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "analytics" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Traffic Sources */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
              <Users className="w-5 h-5 text-yellow-400" />
              <span>Fontes de Tráfego</span>
            </h3>
            <div className="space-y-4">
              {[
                { source: "Instagram", percentage: 45, color: "from-pink-500 to-purple-500" },
                { source: "YouTube", percentage: 30, color: "from-red-500 to-orange-500" },
                { source: "TikTok", percentage: 15, color: "from-cyan-500 to-blue-500" },
                { source: "Direto", percentage: 10, color: "from-green-500 to-emerald-500" }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">{item.source}</span>
                    <span className="text-sm text-gray-400">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion Funnel */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-yellow-400" />
              <span>Funil de Conversão</span>
            </h3>
            <div className="space-y-3">
              {[
                { stage: "Visualizações", count: "45.2K", percentage: 100 },
                { stage: "Cliques", count: "12.8K", percentage: 28 },
                { stage: "Interesse", count: "3.4K", percentage: 7.5 },
                { stage: "Compras", count: "1.2K", percentage: 2.7 }
              ].map((stage, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold">{stage.stage}</span>
                    <span className="text-sm text-gray-400">{stage.count}</span>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30 flex items-center px-4">
                    <div
                      className="h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded"
                      style={{ width: `${stage.percentage}%` }}
                    ></div>
                    <span className="ml-3 text-sm font-bold">{stage.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
