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
  User,
  GraduationCap,
  Clock
} from 'lucide-react';

export default function StudentMessages() {
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Dr. Smith',
      role: 'Mathematics Teacher',
      avatar: '/avatars/teacher1.jpg',
      lastMessage: 'Great work on your latest assignment!',
      timestamp: '2 hours ago',
      unread: 2,
      messages: [
        { id: 1, content: 'Hi Emma, I wanted to discuss your progress in calculus.', sender: 'teacher', timestamp: '10:30 AM' },
        { id: 2, content: 'Thank you for reaching out, Dr. Smith. I have been struggling with derivatives.', sender: 'student', timestamp: '10:35 AM' },
        { id: 3, content: 'I understand. Let\'s schedule some extra help sessions. Are you free after school on Wednesdays?', sender: 'teacher', timestamp: '10:40 AM' },
        { id: 4, content: 'Yes, that works perfectly for me!', sender: 'student', timestamp: '10:42 AM' },
        { id: 5, content: 'Great work on your latest assignment!', sender: 'teacher', timestamp: '2 hours ago' }
      ]
    },
    {
      id: 2,
      name: 'Ms. Davis',
      role: 'English Literature Teacher',
      avatar: '/avatars/teacher2.jpg',
      lastMessage: 'Your essay draft looks promising',
      timestamp: '1 day ago',
      unread: 0,
      messages: [
        { id: 1, content: 'Hi Emma, I reviewed your essay draft on Romeo and Juliet.', sender: 'teacher', timestamp: 'Yesterday 2:15 PM' },
        { id: 2, content: 'Your essay draft looks promising', sender: 'teacher', timestamp: 'Yesterday 2:16 PM' }
      ]
    },
    {
      id: 3,
      name: 'Dr. Johnson',
      role: 'Physics Teacher',
      avatar: '/avatars/teacher3.jpg',
      lastMessage: 'Lab report due next Friday',
      timestamp: '2 days ago',
      unread: 1,
      messages: [
        { id: 1, content: 'Reminder: Lab report due next Friday', sender: 'teacher', timestamp: '2 days ago' },
        { id: 2, content: 'Lab report due next Friday', sender: 'teacher', timestamp: '2 days ago' }
      ]
    }
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const updatedConversations = [...conversations];
    updatedConversations[selectedConversation].messages.push({
      id: Date.now(),
      content: newMessage,
      sender: 'student',
      timestamp: new Date().toLocaleTimeString()
    });

    setNewMessage('');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Messages" role="student" userName="Emma Wilson" />
        
        <main className="flex-1 overflow-hidden p-6">
          <div className="max-w-7xl mx-auto h-full">
            <Card className="h-full flex">
              {/* Conversations List */}
              <div className="w-80 border-r">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Conversations
                  </CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search messages..." className="pl-10" />
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
                            <AvatarImage src={conversation.avatar} />
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
                            <p className="text-xs opacity-70">{conversation.role}</p>
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
                      <AvatarImage src={conversations[selectedConversation].avatar} />
                      <AvatarFallback>
                        <GraduationCap className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{conversations[selectedConversation].name}</CardTitle>
                      <CardDescription>{conversations[selectedConversation].role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {conversations[selectedConversation].messages.map((message) => (
                      <div key={message.id} className={`flex ${message.sender === 'student' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] rounded-lg p-3 ${
                          message.sender === 'student' 
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
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
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