'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  CheckCircle2,
  AlertTriangle,
  Info,
  Calendar,
  DollarSignIcon,
  GraduationCap,
  Clock,
  X,
  Settings
} from 'lucide-react';

export default function ParentNotifications() {
  const notifications = {
    unread: [
      {
        id: 1,
        type: 'academic',
        title: 'Excellent Progress in Chemistry',
        message: 'Emma scored 94% on her latest Chemistry test, showing 8% improvement this month.',
        timestamp: '2 hours ago',
        priority: 'info',
        icon: GraduationCap
      },
      {
        id: 2,
        type: 'attendance',
        title: 'Perfect Attendance This Week',
        message: 'Emma maintained 100% attendance this week. Great job!',
        timestamp: '1 day ago',
        priority: 'success',
        icon: CheckCircle2
      },
      {
        id: 3,
        type: 'fee',
        title: 'Fee Payment Reminder',
        message: 'April 2024 fees ($3,200) are due in 10 days. Click to pay online.',
        timestamp: '2 days ago',
        priority: 'warning',
        icon: DollarSignIcon
      }
    ],
    read: [
      {
        id: 4,
        type: 'academic',
        title: 'Assignment Submitted',
        message: 'Emma submitted her Physics lab report on time.',
        timestamp: '3 days ago',
        priority: 'info',
        icon: GraduationCap
      },
      {
        id: 5,
        type: 'event',
        title: 'Parent-Teacher Conference Scheduled',
        message: 'Your conference with Ms. Davis is scheduled for March 25th at 3:00 PM.',
        timestamp: '1 week ago',
        priority: 'info',
        icon: Calendar
      },
      {
        id: 6,
        type: 'academic',
        title: 'Math Performance Alert',
        message: 'Emma\'s math grades have improved by 5% this month. Keep up the good work!',
        timestamp: '1 week ago',
        priority: 'success',
        icon: GraduationCap
      }
    ],
    ai: [
      {
        id: 7,
        type: 'ai-insight',
        title: 'AI Learning Pattern Analysis',
        message: 'Based on Emma\'s study patterns, she performs best during morning hours. Consider scheduling study time between 8-10 AM.',
        timestamp: '3 hours ago',
        priority: 'info',
        icon: Info
      },
      {
        id: 8,
        type: 'ai-prediction',
        title: 'Performance Prediction',
        message: 'AI analysis suggests Emma is on track to achieve A- grade in all subjects this semester.',
        timestamp: '1 day ago',
        priority: 'success',
        icon: CheckCircle2
      },
      {
        id: 9,
        type: 'ai-recommendation',
        title: 'Study Recommendation',
        message: 'AI suggests focusing on English Literature essay writing techniques to improve overall performance.',
        timestamp: '2 days ago',
        priority: 'warning',
        icon: AlertTriangle
      }
    ]
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'success': return 'border-green-200 bg-green-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      case 'error': return 'border-red-200 bg-red-50';
      default: return 'border-blue-200 bg-blue-50';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'success': return 'default';
      case 'warning': return 'destructive';
      case 'error': return 'destructive';
      default: return 'secondary';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="parent" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Notifications" role="parent" userName="Michael Thompson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Notification Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Unread</p>
                      <p className="text-2xl font-bold text-red-600">{notifications.unread.length}</p>
                    </div>
                    <Bell className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Week</p>
                      <p className="text-2xl font-bold text-blue-600">12</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">AI Insights</p>
                      <p className="text-2xl font-bold text-purple-600">{notifications.ai.length}</p>
                    </div>
                    <Info className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Settings</p>
                      <p className="text-2xl font-bold text-gray-600">•••</p>
                    </div>
                    <Settings className="h-8 w-8 text-gray-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="unread" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="unread">
                    Unread ({notifications.unread.length})
                  </TabsTrigger>
                  <TabsTrigger value="all">
                    All Messages ({notifications.read.length + notifications.unread.length})
                  </TabsTrigger>
                  <TabsTrigger value="ai">
                    AI Insights ({notifications.ai.length})
                  </TabsTrigger>
                </TabsList>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Notification Settings
                </Button>
              </div>

              <TabsContent value="unread" className="space-y-4">
                {notifications.unread.map((notification) => {
                  const IconComponent = notification.icon;
                  return (
                    <Card key={notification.id} className={`hover:shadow-md transition-shadow ${getPriorityColor(notification.priority)}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="p-2 bg-white rounded-full">
                              <IconComponent className="h-5 w-5 text-gray-700" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="font-medium">{notification.title}</h3>
                                <Badge variant={getPriorityBadge(notification.priority)}>
                                  {notification.priority}
                                </Badge>
                              </div>
                              <p className="text-gray-700 mb-2">{notification.message}</p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="h-4 w-4 mr-1" />
                                {notification.timestamp}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <CheckCircle2 className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="all" className="space-y-4">
                {[...notifications.unread, ...notifications.read].map((notification) => {
                  const IconComponent = notification.icon;
                  return (
                    <Card key={notification.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-gray-100 rounded-full">
                            <IconComponent className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium">{notification.title}</h3>
                              <Badge variant="outline">{notification.type}</Badge>
                            </div>
                            <p className="text-gray-700 mb-2">{notification.message}</p>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {notification.timestamp}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="ai" className="space-y-4">
                <Card className="ai-gradient text-white mb-6">
                  <CardHeader>
                    <CardTitle className="text-white">AI-Powered Insights</CardTitle>
                    <CardDescription className="text-white/80">
                      Intelligent analysis and recommendations for your child's education
                    </CardDescription>
                  </CardHeader>
                </Card>

                {notifications.ai.map((notification) => {
                  const IconComponent = notification.icon;
                  return (
                    <Card key={notification.id} className="hover:shadow-md transition-shadow border-purple-200">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-purple-100 rounded-full">
                            <IconComponent className="h-5 w-5 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium">{notification.title}</h3>
                              <Badge className="bg-purple-100 text-purple-800">AI Generated</Badge>
                            </div>
                            <p className="text-gray-700 mb-2">{notification.message}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="h-4 w-4 mr-1" />
                                {notification.timestamp}
                              </div>
                              <Button size="sm" variant="outline">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}