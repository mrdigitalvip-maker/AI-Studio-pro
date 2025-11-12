"use client";

import { useState } from "react";
import { Video, Play, Download, Sparkles, Wand2, Globe, Mic2, Type, Instagram, Youtube, Music } from "lucide-react";

interface VideoCreatorProps {
  credits: number;
  setCredits: (credits: number) => void;
}

export default function VideoCreator({ credits, setCredits }: VideoCreatorProps) {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("motivacional");
  const [voice, setVoice] = useState("feminina-pt");
  const [duration, setDuration] = useState("30");
  const [format, setFormat] = useState("youtube");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const styles = [
    { id: "motivacional", name: "Motivacional", icon: "🔥" },
    { id: "corporativo", name: "Corporativo", icon: "💼" },
    { id: "futurista", name: "Futurista", icon: "🚀" },
    { id: "educacional", name: "Educacional", icon: "📚" },
    { id: "comercial", name: "Comercial", icon: "🛍️" }
  ];

  const voices = [
    { id: "feminina-pt", name: "Feminina - Português", flag: "🇧🇷" },
    { id: "masculina-pt", name: "Masculina - Português", flag: "🇧🇷" },
    { id: "feminina-en", name: "Feminina - Inglês", flag: "🇺🇸" },
    { id: "masculina-en", name: "Masculina - Inglês", flag: "🇺🇸" },
    { id: "feminina-es", name: "Feminina - Espanhol", flag: "🇪🇸" },
    { id: "masculina-es", name: "Masculina - Espanhol", flag: "🇪🇸" }
  ];

  const formats = [
    { id: "youtube", name: "YouTube", icon: Youtube, aspect: "16:9" },
    { id: "tiktok", name: "TikTok", icon: Video, aspect: "9:16" },
    { id: "instagram", name: "Instagram", icon: Instagram, aspect: "1:1" }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim() || credits < 10) return;

    setIsGenerating(true);
    setCredits(credits - 10);

    // Simulação de geração de vídeo
    setTimeout(() => {
      setGeneratedVideo("https://example.com/video.mp4");
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Criador de Vídeos com IA</h2>
            <p className="text-gray-400">
              Transforme suas ideias em vídeos profissionais em segundos. Cada vídeo consome 10 créditos.
            </p>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-black/30 rounded-lg">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="font-bold">{credits} créditos</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Prompt Input */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <Type className="w-4 h-4 text-purple-400" />
              <span>Descreva seu vídeo</span>
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Um vídeo motivacional sobre superação, com imagens inspiradoras de pessoas alcançando seus objetivos..."
              className="w-full h-32 bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none resize-none"
            />
          </div>

          {/* Style Selection */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <Wand2 className="w-4 h-4 text-purple-400" />
              <span>Estilo do Vídeo</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {styles.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    style === s.id
                      ? "border-purple-500 bg-purple-500/20"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className="text-sm font-medium">{s.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Voice Selection */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <Mic2 className="w-4 h-4 text-purple-400" />
              <span>Voz e Idioma</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {voices.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVoice(v.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    voice === v.id
                      ? "border-purple-500 bg-purple-500/20"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{v.flag}</span>
                    <span className="text-sm font-medium">{v.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Format & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
                <Globe className="w-4 h-4 text-purple-400" />
                <span>Formato de Exportação</span>
              </label>
              <div className="space-y-2">
                {formats.map((f) => {
                  const Icon = f.icon;
                  return (
                    <button
                      key={f.id}
                      onClick={() => setFormat(f.id)}
                      className={`w-full p-3 rounded-xl border-2 transition-all flex items-center justify-between ${
                        format === f.id
                          ? "border-purple-500 bg-purple-500/20"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{f.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{f.aspect}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <label className="block text-sm font-semibold mb-3">Duração (segundos)</label>
              <input
                type="range"
                min="15"
                max="60"
                step="15"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>15s</span>
                <span className="text-purple-400 font-bold">{duration}s</span>
                <span>60s</span>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || credits < 10 || isGenerating}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Gerando vídeo...</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                <span>Gerar Vídeo (10 créditos)</span>
              </>
            )}
          </button>
        </div>

        {/* Preview Panel */}
        <div className="space-y-6">
          {/* Preview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-4">Preview</h3>
            <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center border border-white/10">
              {generatedVideo ? (
                <div className="text-center space-y-4">
                  <Video className="w-16 h-16 text-purple-400 mx-auto" />
                  <p className="text-sm text-gray-400">Vídeo gerado com sucesso!</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center space-x-2 mx-auto">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <Video className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Seu vídeo aparecerá aqui</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/30">
            <h3 className="text-lg font-bold mb-3 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>Dicas Rápidas</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">•</span>
                <span>Seja específico na descrição para melhores resultados</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">•</span>
                <span>Escolha o formato ideal para sua plataforma</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">•</span>
                <span>Vídeos mais curtos geram mais engajamento</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400">•</span>
                <span>Use vozes nativas para cada idioma</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-4">Suas Estatísticas</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Vídeos criados</span>
                <span className="font-bold">47</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Tempo economizado</span>
                <span className="font-bold">156h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Taxa de sucesso</span>
                <span className="font-bold text-green-400">98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
