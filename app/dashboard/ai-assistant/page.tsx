'use client'

import { useState, useRef, useEffect } from 'react'
import { Bot, Send, User, Sparkles, Zap, Activity, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'ai',
    content: 'Hello! I am your PowerPadi AI Assistant. I can analyze your community grid data, predict upcoming outages based on historical patterns, or answer questions about your energy consumption. How can I help you today?'
  }
]

const suggestedQueries = [
  "When is the next predicted outage for Lekki Phase 1?",
  "How much fuel did I save this month?",
  "Compare my generator usage with my neighbors",
  "Is it better to run my generator now or wait?"
]

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!inputValue.trim()) return

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: inputValue }
    setMessages(prev => [...prev, userMsg])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'ai', 
        content: `Based on the latest data from the PowerPadi grid network, I can confirm that your query "${userMsg.content}" has been processed. The current prediction accuracy for your area is 89%.` 
      }
      setMessages(prev => [...prev, aiMsg])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] -mx-6 -my-6 animate-in fade-in duration-700">
      
      {/* Header */}
      <div className="border-b border-border bg-background px-8 py-5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center relative">
            <Bot className="w-6 h-6 text-primary" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              PowerPadi AI <Sparkles className="w-4 h-4 text-primary" />
            </h1>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-green-500" /> System Online & Synced
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-1.5 rounded-full border border-border">
          <Info className="w-4 h-4" />
          <span>Powered by Energy Intelligence Model v2.4</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 bg-gradient-to-b from-background to-[#161B22]/30">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-4 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center border-2 border-background shadow-sm ${msg.role === 'user' ? 'bg-[#2B303B]' : 'bg-primary/20'}`}>
                {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-primary" />}
              </div>
              
              <div className={`p-4 rounded-2xl ${msg.role === 'user' ? 'bg-primary text-black rounded-tr-sm' : 'bg-card border border-border text-foreground rounded-tl-sm'}`}>
                <p className="leading-relaxed text-[15px]">{msg.content}</p>
              </div>

            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-4 max-w-[80%]">
              <div className="w-10 h-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background shadow-sm">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div className="p-4 rounded-2xl bg-card border border-border rounded-tl-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Queries */}
      {messages.length === 1 && (
        <div className="px-8 pb-4">
          <div className="flex flex-wrap gap-2">
            {suggestedQueries.map((query, i) => (
              <button 
                key={i}
                onClick={() => setInputValue(query)}
                className="text-xs sm:text-sm bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 px-4 py-2 rounded-full transition-colors flex items-center gap-1.5"
              >
                <Zap className="w-3 h-3" />
                {query}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 sm:p-6 bg-background border-t border-border shrink-0">
        <form onSubmit={handleSend} className="max-w-4xl mx-auto relative flex items-end gap-2 bg-card border border-border rounded-2xl p-2 focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all shadow-sm">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            placeholder="Ask about power patterns, predictions, or community data..."
            className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-foreground resize-none min-h-[44px] max-h-32 p-3 text-[15px]"
            rows={1}
          />
          <Button 
            type="submit" 
            disabled={!inputValue.trim() || isTyping}
            className="w-12 h-12 rounded-xl bg-primary text-black hover:bg-primary/90 shrink-0 mb-1 mr-1"
          >
            <Send className="w-5 h-5" />
          </Button>
        </form>
        <p className="text-center text-xs text-muted-foreground mt-3">
          AI predictions are based on historical and real-time community data. Verify critical outages independently.
        </p>
      </div>

    </div>
  )
}
