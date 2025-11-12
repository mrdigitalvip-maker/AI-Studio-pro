"use client";

import { useState } from "react";
import { Image as ImageIcon, Sparkles, Download, RefreshCw, Wand2, Palette, Zap } from "lucide-react";

interface ImageGeneratorProps {
  credits: number;
  setCredits: (credits: number) => void;
}

export default function ImageGenerator({ credits, setCredits }: ImageGeneratorProps) {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("realista");
  const [size, setSize] = useState("1024x1024");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const styles = [
    { id: "realista", name: "Realista", icon: "📸", description: "Fotos ultra-realistas" },
    { id: "cartoon", name: "Cartoon", icon: "🎨", description: "Estilo desenho animado" },
    { id: "3d", name: "3D", icon: "🎭", description: "Renderização 3D" },
    { id: "futurista", name: "Futurista", icon: "🚀", description: "Sci-fi e tecnologia" },
    { id: "luxo", name: "Luxo", icon: "💎", description: "Elegante e premium" },
    { id: "minimalista", name: "Minimalista", icon: "⚪", description: "Simples e clean" }
  ];

  const sizes = [
    { id: "1024x1024", name: "Quadrado", aspect: "1:1", credits: 5 },
    { id: "1024x1792", name: "Retrato", aspect: "9:16", credits: 7 },
    { id: "1792x1024", name: "Paisagem", aspect: "16:9", credits: 7 }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim() || credits < 5) return;

    setIsGenerating(true);
    const selectedSize = sizes.find((s) => s.id === size);
    setCredits(credits - (selectedSize?.credits || 5));

    // Simulação de geração de imagem
    setTimeout(() => {
      const mockImages = [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1024&h=1024&fit=crop",
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1024&h=1024&fit=crop",
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1024&h=1024&fit=crop",
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1024&h=1024&fit=crop"
      ];
      setGeneratedImages(mockImages);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-6 border border-orange-500/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Gerador de Imagens com IA</h2>
            <p className="text-gray-400">
              Crie imagens, logos e ilustrações profissionais. Cada imagem consome 5-7 créditos.
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
          {/* Prompt Input */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <Wand2 className="w-4 h-4 text-orange-400" />
              <span>Descreva a imagem</span>
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Um logo moderno para empresa de tecnologia, com cores azul e roxo, estilo minimalista..."
              className="w-full h-32 bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none resize-none"
            />
          </div>

          {/* Style Selection */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <Palette className="w-4 h-4 text-orange-400" />
              <span>Estilo Artístico</span>
            </label>
            <div className="space-y-2">
              {styles.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    style === s.id
                      ? "border-orange-500 bg-orange-500/20"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-xs text-gray-400">{s.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3">Tamanho e Proporção</label>
            <div className="space-y-2">
              {sizes.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSize(s.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all ${
                    size === s.id
                      ? "border-orange-500 bg-orange-500/20"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-xs text-gray-400">{s.aspect}</div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span>{s.credits}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || credits < 5 || isGenerating}
            className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Gerando...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Gerar Imagens</span>
              </>
            )}
          </button>

          {/* Tips */}
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl p-6 border border-orange-500/30">
            <h3 className="text-lg font-bold mb-3 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span>Dicas</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-orange-400">•</span>
                <span>Seja detalhado na descrição</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400">•</span>
                <span>Mencione cores e estilo desejado</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-400">•</span>
                <span>Use referências visuais</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div className="lg:col-span-2 space-y-6">
          {/* Generated Images */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Imagens Geradas</h3>
              {generatedImages.length > 0 && (
                <button className="text-sm text-orange-400 hover:text-orange-300 transition-colors flex items-center space-x-1">
                  <RefreshCw className="w-4 h-4" />
                  <span>Gerar Variações</span>
                </button>
              )}
            </div>

            {generatedImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {generatedImages.map((img, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square bg-black/50 rounded-xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all"
                  >
                    <img
                      src={img}
                      alt={`Generated ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                      <button className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all">
                        <Sparkles className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center border border-white/10">
                <div className="text-center text-gray-500">
                  <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Suas imagens aparecerão aqui</p>
                  <p className="text-xs mt-2">Descreva o que você quer criar</p>
                </div>
              </div>
            )}
          </div>

          {/* History */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-4">Histórico Recente</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg border border-white/10 hover:border-orange-500/50 transition-all cursor-pointer"
                ></div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold">234</div>
              <div className="text-sm text-gray-400">Imagens criadas</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold">89%</div>
              <div className="text-sm text-gray-400">Taxa de sucesso</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold">4.8</div>
              <div className="text-sm text-gray-400">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
