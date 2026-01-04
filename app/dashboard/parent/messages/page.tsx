'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MessageSquare, 
  Send, 
  Search,
  GraduationCap,
  Clock,
  Plus
} from 'lucide-react';

export default function ParentMessages() {
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Dr. Smith',
      role: 'Mathematics Teacher',
      subject: 'Mathematics',
      lastMessage: 'Emma is doing excellent work in calculus',
      timestamp: '2 hours ago',
      unread: 1,
      messages: [
        { id: 1, content: 'Hello Mr. Thompson, I wanted to update you on Emma\'s progress in mathematics.', sender: 'teacher', timestamp: '2:30 PM' },
        { id: 2, content: 'Thank you for reaching out, Dr. Smith. How is she doing?', sender: 'parent', timestamp: '2:35 PM' },
        { id: 3, content: 'She\'s excelling in calculus and shows great problem-solving skills.', sender: 'teacher', timestamp: '2:40 PM' },
        { id: 4, content: 'Emma is doing excellent work in calculus', sender: 'teacher', timestamp: '2 hours ago' }
      ]
    },
    {
      id: 2,
      name: 'Dr. Johnson',
      role: 'Physics Teacher',
      subject: 'Physics',
      lastMessage: 'Lab report was well written',
      timestamp: '1 day ago',
      unread: 0,
      messages: [
        { id: 1, content: 'Emma submitted an excellent lab report on motion and forces.', sender: 'teacher', timestamp: 'Yesterday 3:15 PM' },
        { id: 2, content: 'Lab report was well written', sender: 'teacher', timestamp: '1 day ago' }
      ]
    },
    {
      id: 3,
      name: 'Ms. Davis',
      role: 'English Literature Teacher',
      subject: 'English Literature',
      lastMessage: 'Parent-teacher conference scheduled',
      timestamp: '3 days ago',
      unread: 0,
      messages: [
        { id: 1, content: 'I\'d like to schedule a parent-teacher conference to discuss Emma\'s writing skills.', sender: 'teacher', timestamp: '3 days ago' },
        { id: 2, content: 'Parent-teacher conference scheduled', sender: 'teacher', timestamp: '3 days ago' }
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="parent" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Messages" role="parent" userName="Michael Thompson" />
        
        <main className="flex-1 overflow-hidden p-6">
          <div className="max-w-7xl mx-auto h-full">
            <Card className="h-full flex">
              {/* Conversations List */}
              <div className="w-80 border-r flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Teachers
                    </CardTitle>
                    <Button size="sm" variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search teachers..." className="pl-10" />
                  </div>
                </CardHeader>
                
                <ScrollArea className="flex-1">
                  <div className="p-4 space-y-2">
                    {conversations.map((conversation, index) => (
                      <div
                        key={conversation.id}
                        onClick={() => setSelectedConversation(index)}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedConversation === index ? 'bg-primary text-primary-foreground' : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>
                              <GraduationCap className="h-5 w-5" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-sm truncate">{conversation.name}</h4>
                              {conversation.unread > 0 && (
                                <Badge className="ml-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                            <p className="text-xs opacity-70">{conversation.subject}</p>
                            <p className="text-xs truncate opacity-80">{conversation.lastMessage}</p>
                            <p className="text-xs opacity-60 mt-1">{conversation.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>
                        <GraduationCap className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{conversations[selectedConversation]?.name}</CardTitle>
                      <CardDescription>
                        {conversations[selectedConversation]?.role} • {conversations[selectedConversation]?.subject}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {conversations[selectedConversation]?.messages.map((message) => (
                      <div key={message.id} className={`flex ${message.sender === 'parent' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] rounded-lg p-3 ${
                          message.sender === 'parent' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && setNewMessage('')}
                      className="flex-1"
                    />
                    <Button onClick={() => setNewMessage('')} disabled={!newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}