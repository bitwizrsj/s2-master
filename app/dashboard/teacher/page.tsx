'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  BookOpen, 
  Brain, 
  TrendingUp, 
  Calendar,
  Clock,
  FileText,
  Plus,
  BarChart3,
  MessageSquare
} from 'lucide-react';

export default function TeacherDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Teacher Dashboard" role="teacher" userName="Dr. Sarah Johnson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Students</p>
                      <p className="text-2xl font-bold text-blue-600">127</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Classes</p>
                      <p className="text-2xl font-bold text-green-600">5</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-full">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Assignments to Grade</p>
                      <p className="text-2xl font-bold text-orange-600">23</p>
                    </div>
                    <div className="p-3 bg-orange-100 rounded-full">
                      <FileText className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg. Class Performance</p>
                      <p className="text-2xl font-bold text-purple-600">87%</p>
                    </div>
                    <div className="p-3 bg-purple-100 rounded-full">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Today's Classes */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Today's Classes
                    </CardTitle>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Class
                    </Button>
                  </div>
                  <CardDescription>Thursday, March 21, 2024</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { time: '9:00 AM', class: 'Physics 101', room: 'Lab B', students: 28, status: 'current' },
                    { time: '11:00 AM', class: 'Advanced Physics', room: 'Room 205', students: 22, status: 'upcoming' },
                    { time: '2:00 PM', class: 'Physics Lab', room: 'Lab A', students: 15, status: 'upcoming' },
                    { time: '3:30 PM', class: 'AP Physics', room: 'Room 108', students: 18, status: 'upcoming' },
                  ].map((class_, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:shadow-sm transition-shadow">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm font-medium text-gray-500 w-16">{class_.time}</div>
                        <div>
                          <div className="font-medium">{class_.class}</div>
                          <div className="text-sm text-gray-500">{class_.room} • {class_.students} students</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={class_.status === 'current' ? 'default' : 'secondary'}>
                          {class_.status === 'current' ? 'Now' : 'Upcoming'}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Clock className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* AI Tools */}
              <Card className="ai-gradient text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Brain className="h-5 w-5 mr-2" />
                    AI Teaching Tools
                  </CardTitle>
                  <CardDescription className="text-white/80">
                    Enhance your teaching with AI
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="secondary" className="w-full justify-start">
                    <Brain className="h-4 w-4 mr-2" />
                    Generate Quiz
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Create Lesson Plan
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Performance Insights
                  </Button>
                  <Button variant="secondary" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Smart Feedback
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { action: 'Assignment submitted', class: 'Physics 101', time: '2 mins ago', type: 'submission' },
                    { action: 'Quiz completed', class: 'Advanced Physics', time: '15 mins ago', type: 'quiz' },
                    { action: 'Parent message', class: 'AP Physics', time: '1 hour ago', type: 'message' },
                    { action: 'Assignment graded', class: 'Physics Lab', time: '2 hours ago', type: 'grade' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <div className="font-medium">{activity.action}</div>
                        <div className="text-sm text-gray-500">{activity.class}</div>
                      </div>
                      <div className="text-sm text-gray-500">{activity.time}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Class Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Class Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { class: 'Physics 101', average: 84, trend: '+3%', color: 'bg-blue-500' },
                      { class: 'Advanced Physics', average: 91, trend: '+7%', color: 'bg-green-500' },
                      { class: 'Physics Lab', average: 88, trend: '+1%', color: 'bg-purple-500' },
                      { class: 'AP Physics', average: 93, trend: '+5%', color: 'bg-orange-500' },
                    ].map((class_, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${class_.color}`} />
                          <div>
                            <div className="font-medium">{class_.class}</div>
                            <div className="text-sm text-gray-500">Average: {class_.average}%</div>
                          </div>
                        </div>
                        <Badge variant="secondary">{class_.trend}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}