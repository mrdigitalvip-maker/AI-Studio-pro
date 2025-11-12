"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Copy, Download, RefreshCw, Zap, MessageSquare, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatModuleProps {
  credits: number;
  setCredits: (credits: number) => void;
}

export default function ChatModule({ credits, setCredits }: ChatModuleProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Sou a Mind AI, sua assistente inteligente. Posso ajudar você a criar textos, roteiros, posts, descrições e muito mais. Como posso ajudar hoje?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || credits < 1) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    setCredits(credits - 1);

    // Simulação de resposta da IA
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: `Entendi sua solicitação: "${input}". Vou te ajudar com isso! Aqui está uma resposta elaborada e profissional sobre o tema que você mencionou. Posso desenvolver mais detalhes ou criar variações se precisar.`,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const quickPrompts = [
    "Crie um roteiro de vídeo motivacional",
    "Escreva uma descrição para YouTube",
    "Gere ideias de posts para Instagram",
    "Crie um script de vendas persuasivo"
  ];

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col space-y-4">
      {/* Header Info */}
      <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Chat Inteligente com IA</h2>
            <p className="text-gray-400">
              Converse com IA avançada. Cada mensagem consome 1 crédito.
            </p>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-black/30 rounded-lg">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="font-bold">{credits} créditos</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 overflow-hidden">
        {/* Chat Area */}
        <div className="lg:col-span-3 flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600"
                      : "bg-white/10 border border-white/10"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                        <span className="text-xs text-gray-400">
                          {message.timestamp.toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </span>
                        {message.role === "assistant" && (
                          <button
                            onClick={() => handleCopy(message.content)}
                            className="text-xs text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
                          >
                            <Copy className="w-3 h-3" />
                            <span>Copiar</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-white/10">
            <div className="flex items-end space-x-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Digite sua mensagem... (Enter para enviar)"
                className="flex-1 bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none resize-none max-h-32"
                rows={1}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || credits < 1 || isTyping}
                className="px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">Enviar</span>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Pressione Enter para enviar, Shift+Enter para nova linha
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 overflow-y-auto">
          {/* Quick Prompts */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Prompts Rápidos</span>
            </h3>
            <div className="space-y-2">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setInput(prompt)}
                  className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm transition-all border border-white/10 hover:border-purple-500/50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Conversation Stats */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <span>Estatísticas</span>
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Mensagens hoje</span>
                <span className="font-bold">{messages.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Total de conversas</span>
                <span className="font-bold">127</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Tempo médio</span>
                <span className="font-bold">2.3s</span>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30">
            <h3 className="text-lg font-bold mb-3 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Dicas</span>
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <span className="text-purple-400">•</span>
                <span>Seja específico para respostas mais precisas</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-400">•</span>
                <span>Use contexto para melhores resultados</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-purple-400">•</span>
                <span>Peça revisões e variações</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 border border-white/10">
              <RefreshCw className="w-4 h-4" />
              <span>Nova Conversa</span>
            </button>
            <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 border border-white/10">
              <Download className="w-4 h-4" />
              <span>Exportar Chat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
