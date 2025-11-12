"use client";

import { useState } from "react";
import { Edit, Sparkles, Upload, Download, Wand2, Music, Type, Video } from "lucide-react";

interface ContentEditorProps {
  credits: number;
  setCredits: (credits: number) => void;
}

export default function ContentEditor({ credits, setCredits }: ContentEditorProps) {
  const [text, setText] = useState("");
  const [musicStyle, setMusicStyle] = useState("energetica");
  const [subtitleStyle, setSubtitleStyle] = useState("moderno");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedVideo, setProcessedVideo] = useState<string | null>(null);

  const musicStyles = [
    { id: "energetica", name: "Energética", icon: "⚡", description: "Ritmo acelerado" },
    { id: "calma", name: "Calma", icon: "🌊", description: "Relaxante e suave" },
    { id: "corporativa", name: "Corporativa", icon: "💼", description: "Profissional" },
    { id: "epica", name: "Épica", icon: "🎭", description: "Dramática e impactante" }
  ];

  const subtitleStyles = [
    { id: "moderno", name: "Moderno", preview: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { id: "classico", name: "Clássico", preview: "bg-white text-black" },
    { id: "neon", name: "Neon", preview: "bg-gradient-to-r from-cyan-500 to-blue-500" },
    { id: "elegante", name: "Elegante", preview: "bg-gradient-to-r from-yellow-500 to-orange-500" }
  ];

  const handleProcess = async () => {
    if (!text.trim() || credits < 12) return;

    setIsProcessing(true);
    setCredits(credits - 12);

    // Simulação de processamento
    setTimeout(() => {
      setProcessedVideo("https://example.com/processed-video.mp4");
      setIsProcessing(false);
    }, 4000);
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-6 border border-indigo-500/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Editor IA de Conteúdo</h2>
            <p className="text-gray-400">
              Transforme textos em vídeos com música e legendas automáticas. Cada edição consome 12 créditos.
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
        <div className="lg:col-span-1 space-y-6">
          {/* Text Input */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <Type className="w-4 h-4 text-indigo-400" />
              <span>Texto para Vídeo</span>
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Cole ou digite o texto que será transformado em vídeo com narração e legendas..."
              className="w-full h-40 bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none resize-none"
            />
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-gray-400">{text.length} caracteres</span>
              <button className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center space-x-1">
                <Upload className="w-4 h-4" />
                <span>Importar</span>
              </button>
            </div>
          </div>

          {/* Music Style */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <Music className="w-4 h-4 text-indigo-400" />
              <span>Estilo Musical</span>
            </label>
            <div className="space-y-2">
              {musicStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setMusicStyle(style.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    musicStyle === style.id
                      ? "border-indigo-500 bg-indigo-500/20"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{style.icon}</span>
                    <div>
                      <div className="font-semibold">{style.name}</div>
                      <div className="text-xs text-gray-400">{style.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Subtitle Style */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <Wand2 className="w-4 h-4 text-indigo-400" />
              <span>Estilo de Legenda</span>
            </label>
            <div className="space-y-2">
              {subtitleStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSubtitleStyle(style.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all ${
                    subtitleStyle === style.id
                      ? "border-indigo-500 bg-indigo-500/20"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{style.name}</span>
                    <div className={`px-3 py-1 rounded text-xs font-bold ${style.preview}`}>
                      Aa
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Process Button */}
          <button
            onClick={handleProcess}
            disabled={!text.trim() || credits < 12 || isProcessing}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Processando...</span>
              </>
            ) : (
              <>
                <Edit className="w-5 h-5" />
                <span>Criar Vídeo (12 créditos)</span>
              </>
            )}
          </button>

          {/* Tips */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl p-6 border border-indigo-500/30">
            <h3 className="text-lg font-bold mb-3 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>Dicas</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-indigo-400">•</span>
                <span>Textos curtos geram vídeos mais dinâmicos</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-indigo-400">•</span>
                <span>Escolha música que combine com o tom</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-indigo-400">•</span>
                <span>Legendas melhoram engajamento em 80%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Preview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Preview do Vídeo</h3>
              {processedVideo && (
                <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>Baixar</span>
                </button>
              )}
            </div>

            <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center border border-white/10">
              {processedVideo ? (
                <div className="text-center space-y-4">
                  <Video className="w-16 h-16 text-indigo-400 mx-auto" />
                  <p className="text-sm text-gray-400">Vídeo processado com sucesso!</p>
                  <div className="flex items-center justify-center space-x-3">
                    <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all">
                      Assistir
                    </button>
                    <button className="px-6 py-2 bg-white/10 border border-white/10 rounded-lg font-semibold hover:bg-white/20 transition-all">
                      Editar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <Video className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Seu vídeo editado aparecerá aqui</p>
                </div>
              )}
            </div>
          </div>

          {/* Timeline Preview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-4">Timeline de Edição</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg border border-white/10">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                  <Type className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Texto e Narração</div>
                  <div className="text-xs text-gray-400">0:00 - 0:30</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg border border-white/10">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded flex items-center justify-center">
                  <Music className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Música de Fundo</div>
                  <div className="text-xs text-gray-400">0:00 - 0:30</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg border border-white/10">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded flex items-center justify-center">
                  <Wand2 className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Legendas Animadas</div>
                  <div className="text-xs text-gray-400">Sincronizado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm text-gray-400">Vídeos editados</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold">4.2h</div>
              <div className="text-sm text-gray-400">Tempo economizado</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold">92%</div>
              <div className="text-sm text-gray-400">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
