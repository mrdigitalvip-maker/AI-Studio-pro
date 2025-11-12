"use client";

import { useState } from "react";
import { Sparkles, Video, MessageSquare, Image, Mic, Edit, DollarSign, Zap, Globe, Crown, Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Video,
      title: "Criação de Vídeos Realistas",
      description: "Gere vídeos profissionais em alta qualidade com IA. Escolha estilos, vozes e idiomas.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Chat Inteligente",
      description: "Converse com IA avançada. Gere textos, roteiros e ideias criativas instantaneamente.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Image,
      title: "Gerador de Imagens",
      description: "Crie imagens, logos e avatares personalizados em diversos estilos artísticos.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Mic,
      title: "Roteiros e Voz IA",
      description: "Roteiros completos com narração humana realista em múltiplos idiomas.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Edit,
      title: "Editor de Conteúdo",
      description: "Transforme textos em vídeos com música, legendas e efeitos automáticos.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: DollarSign,
      title: "Monetização",
      description: "Gere renda com seus conteúdos. Campanhas, afiliados e analytics integrados.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "3 vídeos por mês",
        "10 imagens por mês",
        "Chat IA limitado",
        "Vozes básicas",
        "Exportação HD"
      ],
      cta: "Começar Grátis",
      popular: false,
      gradient: "from-gray-700 to-gray-800"
    },
    {
      name: "Pro",
      price: "R$ 97",
      period: "/mês",
      description: "Para criadores profissionais",
      features: [
        "Vídeos ilimitados",
        "Imagens ilimitadas",
        "Chat IA avançado",
        "Vozes premium",
        "Exportação 4K",
        "Suporte 24/7",
        "Sem marca d'água",
        "API acesso"
      ],
      cta: "Assinar Plano Pro",
      popular: true,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "Empresarial",
      price: "R$ 297",
      period: "/mês",
      description: "Para equipes e empresas",
      features: [
        "Tudo do Pro",
        "Geração em lote",
        "API completa",
        "Customização de marca",
        "Usuários ilimitados",
        "Gerente dedicado",
        "Treinamento exclusivo",
        "SLA garantido"
      ],
      cta: "Falar com Vendas",
      popular: false,
      gradient: "from-yellow-600 to-orange-600"
    }
  ];

  const stats = [
    { value: "1M+", label: "Usuários Ativos" },
    { value: "50M+", label: "Vídeos Criados" },
    { value: "150+", label: "Países" },
    { value: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-purple-500" />
                <div className="absolute inset-0 blur-xl bg-purple-500/50"></div>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mind AI
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Recursos</a>
              <a href="#plans" className="hover:text-purple-400 transition-colors">Planos</a>
              <Link 
                href="/dashboard"
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Entrar
              </Link>
            </nav>
            <Link 
              href="/dashboard"
              className="md:hidden px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold"
            >
              Entrar
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-xs sm:text-sm text-purple-300">Powered by Advanced AI</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Crie. Inove. Lucre.
              </span>
              <br />
              <span className="text-white">Tudo com a força da</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Inteligência Artificial
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              A plataforma mais completa de IA do mundo. Crie vídeos realistas, converse com IA avançada, 
              gere imagens profissionais e monetize seu conteúdo. Tudo em um só lugar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Começar Agora</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
                Testar Grátis
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-black"></div>
                ))}
              </div>
              <span className="text-sm text-gray-400">+1M criadores usando Mind AI</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tudo que você precisa
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">6 ferramentas poderosas em uma única plataforma</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>

                <div className="mt-4 sm:mt-6 flex items-center text-purple-400 group-hover:text-pink-400 transition-colors">
                  <span className="text-sm font-semibold">Explorar</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Escolha seu plano
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400">Comece grátis. Escale quando precisar.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 sm:p-8 rounded-3xl border-2 transition-all hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500"
                    : "bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Crown className="w-4 h-4" />
                    <span>Mais Popular</span>
                  </div>
                )}

                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center">
                    <span className="text-4xl sm:text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/dashboard"
                  className={`block w-full py-3 sm:py-4 rounded-full text-center font-bold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/50"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="p-8 sm:p-12 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
            <Star className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Pronto para revolucionar sua criação de conteúdo?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Junte-se a mais de 1 milhão de criadores que já estão usando Mind AI para transformar ideias em realidade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Começar Gratuitamente</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-lg font-bold hover:bg-white/20 transition-all">
                Ver Demonstração
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              🎁 Ganhe 200 créditos grátis ao se cadastrar
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Ajuda</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Sparkles className="w-6 h-6 text-purple-500" />
              <span className="text-lg font-bold">Mind AI</span>
            </div>
            <p className="text-sm text-gray-400">© 2024 Mind AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
