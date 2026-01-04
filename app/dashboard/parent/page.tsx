'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  User, 
  TrendingUp, 
  DollarSignIcon, 
  Bell, 
  MessageSquare,
  Calendar,
  Award,
  AlertTriangle,
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function ParentDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="parent" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Parent Dashboard" role="parent" userName="Michael Thompson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Child Overview */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Child Overview
                </CardTitle>
                <CardDescription>Emma Thompson - Grade 10</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">94%</div>
                    <div className="text-sm text-gray-600">Attendance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">3.8</div>
                    <div className="text-sm text-gray-600">GPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">A-</div>
                    <div className="text-sm text-gray-600">Latest Grade</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">3</div>
                    <div className="text-sm text-gray-600">Pending Tasks</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-lg font-bold text-green-600">Excellent</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-full">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Fee Status</p>
                      <p className="text-lg font-bold text-blue-600">Paid</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <DollarSignIcon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Messages</p>
                      <p className="text-lg font-bold text-purple-600">2 New</p>
                    </div>
                    <div className="p-3 bg-purple-100 rounded-full">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Alerts</p>
                      <p className="text-lg font-bold text-orange-600">1 Active</p>
                    </div>
                    <div className="p-3 bg-orange-100 rounded-full">
                      <Bell className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Academic Performance */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Academic Performance
                  </CardTitle>
                  <CardDescription>Current semester progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { subject: 'Mathematics', grade: 'A-', score: 92, trend: '+5%', color: 'bg-blue-500' },
                    { subject: 'Physics', grade: 'B+', score: 88, trend: '+2%', color: 'bg-green-500' },
                    { subject: 'English Literature', grade: 'B', score: 85, trend: '-1%', color: 'bg-yellow-500' },
                    { subject: 'Chemistry', grade: 'A', score: 94, trend: '+8%', color: 'bg-purple-500' },
                    { subject: 'History', grade: 'A-', score: 90, trend: '+3%', color: 'bg-orange-500' },
                  ].map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                          <span className="font-medium">{subject.subject}</span>
                          <Badge variant="secondary">{subject.grade}</Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{subject.score}%</span>
                          <span className="text-sm text-green-600">{subject.trend}</span>
                        </div>
                      </div>
                      <Progress value={subject.score} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* AI Insights */}
              <Card className="ai-gradient text-white">
                <CardHeader>
                  <CardTitle className="text-white">AI Insights</CardTitle>
                  <CardDescription className="text-white/80">
                    Personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="h-4 w-4 mt-1 text-green-300" />
                        <div className="text-sm">
                          <strong>Great Progress!</strong> Emma's math performance improved by 8% this month.
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 mt-1 text-yellow-300" />
                        <div className="text-sm">
                          <strong>Attention Needed:</strong> English literature grades have dropped slightly.
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white/10 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Award className="h-4 w-4 mt-1 text-blue-300" />
                        <div className="text-sm">
                          <strong>Achievement:</strong> Emma ranks in top 15% of her class.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { 
                      activity: 'Assignment submitted', 
                      subject: 'Mathematics', 
                      time: '2 hours ago',
                      status: 'success'
                    },
                    { 
                      activity: 'Quiz completed', 
                      subject: 'Physics', 
                      time: '1 day ago',
                      status: 'success'
                    },
                    { 
                      activity: 'Parent-teacher meeting scheduled', 
                      subject: 'English', 
                      time: '2 days ago',
                      status: 'info'
                    },
                    { 
                      activity: 'Assignment due reminder', 
                      subject: 'Chemistry', 
                      time: '3 days ago',
                      status: 'warning'
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <div className="font-medium">{item.activity}</div>
                        <div className="text-sm text-gray-500">{item.subject}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">{item.time}</div>
                        <Badge variant={
                          item.status === 'success' ? 'default' :
                          item.status === 'warning' ? 'destructive' : 'secondary'
                        }>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { 
                      event: 'Parent-Teacher Conference', 
                      date: 'March 25, 2024', 
                      time: '3:00 PM',
                      type: 'meeting'
                    },
                    { 
                      event: 'Science Fair', 
                      date: 'March 28, 2024', 
                      time: '10:00 AM',
                      type: 'event'
                    },
                    { 
                      event: 'Mathematics Exam', 
                      date: 'April 2, 2024', 
                      time: '9:00 AM',
                      type: 'exam'
                    },
                    { 
                      event: 'Spring Break', 
                      date: 'April 8-12, 2024', 
                      time: 'All Week',
                      type: 'holiday'
                    },
                  ].map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <div className="font-medium">{event.event}</div>
                        <div className="text-sm text-gray-500">{event.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">{event.time}</div>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
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