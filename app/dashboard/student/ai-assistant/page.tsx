'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Brain, 
  Send, 
  BookOpen, 
  Calculator,
  Lightbulb,
  FileText,
  Sparkles,
  User,
  Bot
} from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'explanation' | 'homework' | 'summary' | 'general';
}

export default function StudentAIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi Emma! I'm your AI learning assistant. I can help you with homework, explain difficult concepts, summarize your notes, and answer any academic questions. What would you like to work on today?",
      sender: 'ai',
      timestamp: new Date(),
      type: 'general'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    { label: 'Explain Photosynthesis', icon: BookOpen, type: 'explanation' },
    { label: 'Help with Math Problem', icon: Calculator, type: 'homework' },
    { label: 'Summarize Chapter 5', icon: FileText, type: 'summary' },
    { label: 'Study Tips', icon: Lightbulb, type: 'general' }
  ];

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(content),
        sender: 'ai',
        timestamp: new Date(),
        type: 'explanation'
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const responses = [
      "Great question! Let me break this down for you step by step...",
      "I can help you understand this concept better. Here's a simple explanation...",
      "This is a common topic that students find challenging. Let me explain it clearly...",
      "Perfect! I have some study strategies that will help you with this..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="AI Learning Assistant" role="student" userName="Emma Wilson" />
        
        <main className="flex-1 overflow-hidden p-6">
          <div className="max-w-7xl mx-auto h-full flex gap-6">
            {/* Chat Interface */}
            <div className="flex-1 flex flex-col">
              <Card className="flex-1 flex flex-col">
                <CardHeader className="ai-gradient text-white">
                  <CardTitle className="flex items-center text-white">
                    <Brain className="h-5 w-5 mr-2" />
                    AI Learning Assistant
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Your personal study companion powered by AI
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col p-0">
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            <div className="flex items-start space-x-2">
                              {message.sender === 'ai' && (
                                <Bot className="h-4 w-4 mt-1 text-purple-600" />
                              )}
                              {message.sender === 'user' && (
                                <User className="h-4 w-4 mt-1 text-primary-foreground" />
                              )}
                              <div className="flex-1">
                                <p className="text-sm">{message.content}</p>
                                <p className="text-xs opacity-70 mt-1">
                                  {message.timestamp.toLocaleTimeString()}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                            <div className="flex items-center space-x-2">
                              <Bot className="h-4 w-4 text-purple-600" />
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                  
                  <div className="p-4 border-t">
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Ask me anything about your studies..."
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                        className="flex-1"
                      />
                      <Button onClick={() => handleSendMessage(inputMessage)} disabled={!inputMessage.trim()}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar with Quick Actions */}
            <div className="w-80 space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => handleSendMessage(action.label)}
                    >
                      <action.icon className="h-4 w-4 mr-2" />
                      {action.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Study Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Study Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">47</div>
                      <div className="text-sm text-gray-600">Questions Asked</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">23</div>
                      <div className="text-sm text-gray-600">Concepts Learned</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Weekly Goal</span>
                      <span>8/10 sessions</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Topics */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { topic: 'Quadratic Equations', subject: 'Math', time: '2 hours ago' },
                    { topic: 'Photosynthesis', subject: 'Biology', time: '1 day ago' },
                    { topic: 'Shakespeare Analysis', subject: 'English', time: '2 days ago' },
                    { topic: 'Chemical Bonding', subject: 'Chemistry', time: '3 days ago' }
                  ].map((topic, index) => (
                    <div key={index} className="p-2 border rounded cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="font-medium text-sm">{topic.topic}</div>
                      <div className="text-xs text-gray-500">{topic.subject} • {topic.time}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}