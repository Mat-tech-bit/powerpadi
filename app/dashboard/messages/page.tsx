'use client'

import { useState } from 'react'
import { Search, Send, Paperclip, MoreVertical, MapPin, Check, CheckCheck, User } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const conversations = [
  { id: '1', name: 'Oluwaseun Adewale', role: 'Electrician', lastMessage: 'I am on my way to your location now.', time: '10:42 AM', unread: 2, avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: '2', name: 'PowerTech Solutions', role: 'Company', lastMessage: 'Here is the invoice for yesterday.', time: 'Yesterday', unread: 0, avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: '3', name: 'Chinedu Eze', role: 'Generator Tech', lastMessage: 'Yes, the parts are available.', time: 'Oct 12', unread: 0, avatar: 'https://i.pravatar.cc/150?u=2' },
]

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(conversations[0])
  const [message, setMessage] = useState('')

  const chatMessages = [
    { id: 1, sender: 'them', text: 'Hello, I received your booking for the inverter repair.', time: '10:30 AM' },
    { id: 2, sender: 'me', text: 'Hi! Yes, the inverter keeps beeping and shutting down.', time: '10:32 AM', status: 'read' },
    { id: 3, sender: 'them', text: 'Sounds like a battery imbalance or overload. Can you send a picture of the error code on the screen?', time: '10:35 AM' },
    { id: 4, sender: 'me', text: 'I just checked, it says Error 04.', time: '10:40 AM', status: 'read' },
    { id: 5, sender: 'them', text: 'I am on my way to your location now. Should be there in 20 mins.', time: '10:42 AM' },
  ]

  return (
    <div className="h-[calc(100vh-8rem)] -mx-6 -my-6 flex bg-background animate-in fade-in duration-700">
      
      {/* Sidebar List */}
      <div className="w-full md:w-80 lg:w-96 border-r border-border flex flex-col bg-card/30">
        <div className="p-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search messages..." className="pl-9 bg-background border-border" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {conversations.map(chat => (
            <div 
              key={chat.id} 
              onClick={() => setActiveChat(chat)}
              className={`p-4 border-b border-border/50 cursor-pointer transition-colors flex items-start gap-3 ${activeChat.id === chat.id ? 'bg-primary/10 border-l-4 border-l-primary' : 'hover:bg-muted/50 border-l-4 border-l-transparent'}`}
            >
              <div className="relative">
                <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover border border-border" />
                {chat.unread > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-black text-[10px] font-bold rounded-full flex items-center justify-center">{chat.unread}</span>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-foreground truncate">{chat.name}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{chat.time}</span>
                </div>
                <p className="text-xs text-primary font-medium mb-1">{chat.role}</p>
                <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="hidden md:flex flex-col flex-1 bg-[#0F1420]">
        {/* Chat Header */}
        <div className="h-20 border-b border-border bg-card px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="font-bold text-foreground">{activeChat.name}</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white"><MapPin className="w-5 h-5" /></Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white"><MoreVertical className="w-5 h-5" /></Button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="text-center">
            <span className="text-xs font-medium text-muted-foreground bg-card px-3 py-1 rounded-full border border-border">Today</span>
          </div>
          
          {chatMessages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[70%] ${msg.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
                {msg.sender === 'them' && (
                  <img src={activeChat.avatar} alt="Avatar" className="w-8 h-8 rounded-full shrink-0" />
                )}
                <div className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                  <div className={`p-3 rounded-2xl ${msg.sender === 'me' ? 'bg-primary text-black rounded-tr-sm' : 'bg-card border border-border text-foreground rounded-tl-sm'}`}>
                    <p className="text-[15px]">{msg.text}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                    {msg.sender === 'me' && (
                      msg.status === 'read' ? <CheckCheck className="w-3 h-3 text-primary" /> : <Check className="w-3 h-3 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-card border-t border-border shrink-0">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground shrink-0"><Paperclip className="w-5 h-5" /></Button>
            <Input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..." 
              className="flex-1 bg-background border-border h-12"
            />
            <Button className="bg-primary text-black hover:bg-primary/90 h-12 w-12 shrink-0 rounded-xl p-0">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
