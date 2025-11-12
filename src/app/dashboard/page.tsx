"use client";

import { useState } from "react";
import { 
  Video, 
  MessageSquare, 
  Image, 
  Mic, 
  Edit, 
  DollarSign, 
  Sparkles, 
  Crown, 
  Zap,
  Settings,
  LogOut,
  Menu,
  X,
  TrendingUp,
  Clock,
  Award
} from "lucide-react";
import VideoCreator from "./modules/VideoCreator";
import ChatModule from "./modules/ChatModule";
import ImageGenerator from "./modules/ImageGenerator";
import ScriptVoice from "./modules/ScriptVoice";
import ContentEditor from "./modules/ContentEditor";
import Monetization from "./modules/Monetization";

type Module = "video" | "chat" | "image" | "script" | "editor" | "monetization";

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState<Module>("video");
  const [credits, setCredits] = useState(200);
  const [plan, setPlan] = useState("Pro");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const modules = [
    { id: "video" as Module, name: "Criador de Vídeos", icon: Video, color: "from-purple-500 to-pink-500" },
    { id: "chat" as Module, name: "Chat IA", icon: MessageSquare, color: "from-blue-500 to-cyan-500" },
    { id: "image" as Module, name: "Gerador de Imagens", icon: Image, color: "from-orange-500 to-red-500" },
    { id: "script" as Module, name: "Roteiros & Voz", icon: Mic, color: "from-green-500 to-emerald-500" },
    { id: "editor" as Module, name: "Editor de Conteúdo", icon: Edit, color: "from-indigo-500 to-purple-500" },
    { id: "monetization" as Module, name: "Monetização", icon: DollarSign, color: "from-yellow-500 to-orange-500" }
  ];

  const renderModule = () => {
    switch (activeModule) {
      case "video":
        return <VideoCreator credits={credits} setCredits={setCredits} />;
      case "chat":
        return <ChatModule credits={credits} setCredits={setCredits} />;
      case "image":
        return <ImageGenerator credits={credits} setCredits={setCredits} />;
      case "script":
        return <ScriptVoice credits={credits} setCredits={setCredits} />;
      case "editor":
        return <ContentEditor credits={credits} setCredits={setCredits} />;
      case "monetization":
        return <Monetization />;
      default:
        return <VideoCreator credits={credits} setCredits={setCredits} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/20">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            <span className="text-lg font-bold">Mind AI</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-black/50 backdrop-blur-xl border-r border-purple-500/20 z-40 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="hidden lg:flex items-center space-x-3 p-6 border-b border-white/10">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <div className="absolute inset-0 blur-xl bg-purple-500/50"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mind AI
            </span>
          </div>

          {/* User Info */}
          <div className="p-6 border-b border-white/10 mt-16 lg:mt-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-lg font-bold">U</span>
              </div>
              <div>
                <div className="font-semibold">Usuário</div>
                <div className="flex items-center space-x-1 text-sm">
                  <Crown className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400">Plano {plan}</span>
                </div>
              </div>
            </div>

            {/* Credits */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-4 border border-purple-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Créditos</span>
                <Zap className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold">{credits}</div>
              <button className="w-full mt-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Recarregar Créditos
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {modules.map((module) => {
              const Icon = module.icon;
              const isActive = activeModule === module.id;
              return (
                <button
                  key={module.id}
                  onClick={() => {
                    setActiveModule(module.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${module.color} shadow-lg`
                      : "hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{module.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-white/10 space-y-2">
            <button className="w-full flex items-center space-x-3 p-3 hover:bg-white/5 rounded-xl transition-all">
              <Settings className="w-5 h-5" />
              <span>Configurações</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 hover:bg-white/5 rounded-xl transition-all text-red-400">
              <LogOut className="w-5 h-5" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-black/50 backdrop-blur-xl border-b border-purple-500/20 mt-16 lg:mt-0">
          <div className="flex items-center justify-between p-4 lg:p-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">
                {modules.find((m) => m.id === activeModule)?.name}
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                Crie conteúdo incrível com inteligência artificial
              </p>
            </div>

            {/* Quick Stats */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm">+24% este mês</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm">156h economizadas</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-lg">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Nível 12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Module Content */}
        <div className="p-4 lg:p-8">
          {renderModule()}
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
