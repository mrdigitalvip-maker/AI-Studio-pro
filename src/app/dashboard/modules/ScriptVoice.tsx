"use client";

import { useState } from "react";
import { Mic, FileText, Play, Download, Sparkles, Volume2, Globe, Wand2 } from "lucide-react";

interface ScriptVoiceProps {
  credits: number;
  setCredits: (credits: number) => void;
}

export default function ScriptVoice({ credits, setCredits }: ScriptVoiceProps) {
  const [topic, setTopic] = useState("");
  const [scriptType, setScriptType] = useState("video");
  const [voiceGender, setVoiceGender] = useState("feminina");
  const [language, setLanguage] = useState("pt-BR");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedScript, setGeneratedScript] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const scriptTypes = [
    { id: "video", name: "Vídeo", icon: "🎬", description: "Roteiro para vídeo" },
    { id: "podcast", name: "Podcast", icon: "🎙️", description: "Episódio de podcast" },
    { id: "apresentacao", name: "Apresentação", icon: "📊", description: "Pitch ou palestra" },
    { id: "comercial", name: "Comercial", icon: "📺", description: "Anúncio publicitário" }
  ];

  const voices = [
    { id: "feminina", name: "Feminina", icon: "👩" },
    { id: "masculina", name: "Masculina", icon: "👨" }
  ];

  const languages = [
    { id: "pt-BR", name: "Português (BR)", flag: "🇧🇷" },
    { id: "en-US", name: "Inglês (US)", flag: "🇺🇸" },
    { id: "es-ES", name: "Espanhol", flag: "🇪🇸" },
    { id: "fr-FR", name: "Francês", flag: "🇫🇷" },
    { id: "de-DE", name: "Alemão", flag: "🇩🇪" },
    { id: "it-IT", name: "Italiano", flag: "🇮🇹" }
  ];

  const handleGenerate = async () => {
    if (!topic.trim() || credits < 8) return;

    setIsGenerating(true);
    setCredits(credits - 8);

    // Simulação de geração
    setTimeout(() => {
      setGeneratedScript(`# Roteiro: ${topic}

## Introdução
Olá! Hoje vamos falar sobre ${topic}. Este é um tema fascinante que merece nossa atenção.

## Desenvolvimento
Vamos explorar os principais pontos sobre este assunto de forma clara e objetiva.

Primeiro ponto: A importância de entender o contexto...
Segundo ponto: Como aplicar na prática...
Terceiro ponto: Resultados esperados...

## Conclusão
Espero que este conteúdo tenha sido útil para você. Não esqueça de compartilhar!

---
Duração estimada: 2-3 minutos
Palavras: 250`);
      setAudioUrl("https://example.com/audio.mp3");
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Criador de Roteiros e Voz IA</h2>
            <p className="text-gray-400">
              Crie roteiros completos com narração profissional. Cada geração consome 8 créditos.
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
          {/* Topic Input */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-green-400" />
              <span>Tema do Roteiro</span>
            </label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: Como aumentar produtividade no trabalho..."
              className="w-full h-24 bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none resize-none"
            />
          </div>

          {/* Script Type */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <Wand2 className="w-4 h-4 text-green-400" />
              <span>Tipo de Roteiro</span>
            </label>
            <div className="space-y-2">
              {scriptTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setScriptType(type.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    scriptType === type.id
                      ? "border-green-500 bg-green-500/20"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{type.icon}</span>
                    <div>
                      <div className="font-semibold">{type.name}</div>
                      <div className="text-xs text-gray-400">{type.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Voice Selection */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <Mic className="w-4 h-4 text-green-400" />
              <span>Voz</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {voices.map((voice) => (
                <button
                  key={voice.id}
                  onClick={() => setVoiceGender(voice.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    voiceGender === voice.id
                      ? "border-green-500 bg-green-500/20"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="text-2xl mb-2">{voice.icon}</div>
                  <div className="text-sm font-medium">{voice.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <label className="block text-sm font-semibold mb-3 flex items-center space-x-2">
              <Globe className="w-4 h-4 text-green-400" />
              <span>Idioma</span>
            </label>
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setLanguage(lang.id)}
                  className={`w-full p-3 rounded-xl border-2 transition-all text-left ${
                    language === lang.id
                      ? "border-green-500 bg-green-500/20"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!topic.trim() || credits < 8 || isGenerating}
            className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Gerando...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Gerar Roteiro + Voz</span>
              </>
            )}
          </button>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Script Output */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Roteiro Gerado</h3>
              {generatedScript && (
                <button className="text-sm text-green-400 hover:text-green-300 transition-colors flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>Baixar</span>
                </button>
              )}
            </div>

            {generatedScript ? (
              <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                  {generatedScript}
                </pre>
              </div>
            ) : (
              <div className="bg-black/30 rounded-xl p-12 border border-white/10 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">Seu roteiro aparecerá aqui</p>
                </div>
              </div>
            )}
          </div>

          {/* Audio Player */}
          {audioUrl && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold flex items-center space-x-2">
                  <Volume2 className="w-5 h-5 text-green-400" />
                  <span>Narração em Áudio</span>
                </h3>
                <button className="text-sm text-green-400 hover:text-green-300 transition-colors flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>Baixar MP3</span>
                </button>
              </div>

              <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-4">
                  <button className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-green-500/50 transition-all">
                    <Play className="w-6 h-6" />
                  </button>
                  <div className="flex-1">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>0:45</span>
                      <span>2:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold">89</div>
              <div className="text-sm text-gray-400">Roteiros criados</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold">12h</div>
              <div className="text-sm text-gray-400">Áudio gerado</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl font-bold">6</div>
              <div className="text-sm text-gray-400">Idiomas usados</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
