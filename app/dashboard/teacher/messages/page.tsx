'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  MessageSquare,
  Send,
  Search,
  User,
  Users,
  Clock,
  Plus,
} from 'lucide-react';

// ✅ Types
type Message = {
  id: number;
  content: string;
  sender: 'student' | 'teacher' | 'parent';
  timestamp: string;
};

type StudentConversation = {
  id: number;
  name: string;
  class: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  messages: Message[];
};

type ParentConversation = {
  id: number;
  name: string;
  student: string;
  class: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  messages: Message[];
};

export default function TeacherMessages() {
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [newMessage, setNewMessage] = useState('');
  const [activeTab, setActiveTab] = useState<'students' | 'parents'>('students');

  const studentConversations: StudentConversation[] = [
    {
      id: 1,
      name: 'Emma Wilson',
      class: 'Physics 101',
      lastMessage: 'Thank you for the extra help session!',
      timestamp: '1 hour ago',
      unread: 0,
      messages: [
        { id: 1, content: "Hi Dr. Johnson, I'm having trouble with the momentum problems.", sender: 'student', timestamp: '2:30 PM' },
        { id: 2, content: "Hi Emma! I'd be happy to help. Can you tell me which specific part is confusing?", sender: 'teacher', timestamp: '2:35 PM' },
        { id: 3, content: "I don't understand how to calculate momentum in collisions.", sender: 'student', timestamp: '2:40 PM' },
        { id: 4, content: 'Great question! Let\'s break it down step by step. Momentum = mass × velocity...', sender: 'teacher', timestamp: '2:45 PM' },
        { id: 5, content: 'Thank you for the extra help session!', sender: 'student', timestamp: '1 hour ago' },
      ],
    },
    {
      id: 2,
      name: 'Alex Chen',
      class: 'AP Physics',
      lastMessage: 'When is the next lab session?',
      timestamp: '3 hours ago',
      unread: 1,
      messages: [
        { id: 1, content: 'When is the next lab session?', sender: 'student', timestamp: '3 hours ago' },
      ],
    },
  ];

  const parentConversations: ParentConversation[] = [
    {
      id: 1,
      name: 'Mrs. Thompson',
      student: 'Emma Thompson',
      class: 'Physics 101',
      lastMessage: 'Thank you for the progress update',
      timestamp: '2 days ago',
      unread: 0,
      messages: [
        { id: 1, content: "Hello Dr. Johnson, I wanted to discuss Emma's recent performance.", sender: 'parent', timestamp: 'Monday 10:00 AM' },
        { id: 2, content: 'Hello Mrs. Thompson! Emma is doing very well. Her understanding of concepts has improved significantly.', sender: 'teacher', timestamp: 'Monday 10:15 AM' },
        { id: 3, content: 'Thank you for the progress update', sender: 'parent', timestamp: '2 days ago' },
      ],
    },
  ];

  const currentConversations: (StudentConversation | ParentConversation)[] =
    activeTab === 'students' ? studentConversations : parentConversations;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Messages" role="teacher" userName="Dr. Sarah Johnson" />

        <main className="flex-1 overflow-hidden p-6">
          <div className="max-w-7xl mx-auto h-full">
            <Card className="h-full flex">
              {/* Conversations List */}
              <div className="w-80 border-r flex flex-col">
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Messages
                  </CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search conversations..." className="pl-10" />
                  </div>
                  <Tabs
                    value={activeTab}
                    onValueChange={(val) => setActiveTab(val as 'students' | 'parents')}
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="students">Students</TabsTrigger>
                      <TabsTrigger value="parents">Parents</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardHeader>

                <ScrollArea className="flex-1">
                  <div className="p-4 space-y-2">
                    {currentConversations.map((conversation, index) => (
                      <div
                        key={conversation.id}
                        onClick={() => setSelectedConversation(index)}
                        className={`p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedConversation === index
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>
                              {activeTab === 'students' ? (
                                <User className="h-5 w-5" />
                              ) : (
                                <Users className="h-5 w-5" />
                              )}
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
                            <p className="text-xs opacity-70">
                              {'student' in conversation
                                ? `Parent of ${conversation.student}`
                                : conversation.class}
                            </p>
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>
                          {activeTab === 'students' ? (
                            <User className="h-5 w-5" />
                          ) : (
                            <Users className="h-5 w-5" />
                          )}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>
                          {currentConversations[selectedConversation]?.name}
                        </CardTitle>
                        <CardDescription>
                          {'student' in currentConversations[selectedConversation]
                            ? `Parent of ${
                                (currentConversations[selectedConversation] as ParentConversation).student
                              }`
                            : (currentConversations[selectedConversation] as StudentConversation).class}
                        </CardDescription>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      New Message
                    </Button>
                  </div>
                </CardHeader>

                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {currentConversations[selectedConversation]?.messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.sender === 'teacher' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.sender === 'teacher'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
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
