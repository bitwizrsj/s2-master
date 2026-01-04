'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  GraduationCap, 
  DollarSignIcon, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle2,
  UserCheck,
  BookOpen,
  Calendar,
  BarChart3,
  Settings,
  Plus
} from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Admin Dashboard" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Students</p>
                      <p className="text-2xl font-bold text-blue-600">1,247</p>
                      <p className="text-xs text-green-600 mt-1">+23 this month</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Teachers</p>
                      <p className="text-2xl font-bold text-green-600">87</p>
                      <p className="text-xs text-green-600 mt-1">+2 this month</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-full">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Revenue</p>
                      <p className="text-2xl font-bold text-purple-600">$127K</p>
                      <p className="text-xs text-green-600 mt-1">+12% vs last month</p>
                    </div>
                    <div className="p-3 bg-purple-100 rounded-full">
                      <DollarSignIcon className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Attendance</p>
                      <p className="text-2xl font-bold text-orange-600">94.2%</p>
                      <p className="text-xs text-green-600 mt-1">+1.2% vs last week</p>
                    </div>
                    <div className="p-3 bg-orange-100 rounded-full">
                      <UserCheck className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Insights Section */}
            <Card className="ai-gradient text-white">
              <CardHeader>
                <CardTitle className="text-white">AI-Powered School Insights</CardTitle>
                <CardDescription className="text-white/80">
                  Intelligent analytics and predictions for better decision making
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-300" />
                      <h4 className="font-medium">Dropout Risk Alert</h4>
                    </div>
                    <p className="text-sm text-white/90">3 students identified at risk. Intervention recommended.</p>
                    <Button variant="secondary" size="sm" className="mt-2">
                      View Details
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-green-300" />
                      <h4 className="font-medium">Performance Trend</h4>
                    </div>
                    <p className="text-sm text-white/90">Overall grades improved by 7% this semester.</p>
                    <Button variant="secondary" size="sm" className="mt-2">
                      View Report
                    </Button>
                  </div>
                  
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <BarChart3 className="h-5 w-5 text-blue-300" />
                      <h4 className="font-medium">Resource Optimization</h4>
                    </div>
                    <p className="text-sm text-white/90">AI suggests reallocating 2 teachers to improve efficiency.</p>
                    <Button variant="secondary" size="sm" className="mt-2">
                      Review
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Student
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Manage Teachers
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Create Class
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Event
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    System Settings
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Enrollments */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Enrollments</CardTitle>
                  <CardDescription>New students this week</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: 'Alice Johnson', grade: 'Grade 9', date: '2 days ago', status: 'completed' },
                    { name: 'Bob Smith', grade: 'Grade 11', date: '3 days ago', status: 'pending' },
                    { name: 'Carol Davis', grade: 'Grade 10', date: '4 days ago', status: 'completed' },
                    { name: 'David Wilson', grade: 'Grade 12', date: '5 days ago', status: 'review' },
                  ].map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.grade} • {student.date}</div>
                      </div>
                      <Badge variant={
                        student.status === 'completed' ? 'default' :
                        student.status === 'pending' ? 'destructive' : 'secondary'
                      }>
                        {student.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* System Status */}
              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Database</span>
                      </div>
                      <Badge variant="default">Healthy</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">AI Services</span>
                      </div>
                      <Badge variant="default">Active</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        <span className="text-sm">Backup System</span>
                      </div>
                      <Badge variant="secondary">Warning</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Payment Gateway</span>
                      </div>
                      <Badge variant="default">Online</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Grade Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { grade: 'A (90-100%)', count: 342, percentage: 27, color: 'bg-green-500' },
                    { grade: 'B (80-89%)', count: 456, percentage: 37, color: 'bg-blue-500' },
                    { grade: 'C (70-79%)', count: 298, percentage: 24, color: 'bg-yellow-500' },
                    { grade: 'D (60-69%)', count: 98, percentage: 8, color: 'bg-orange-500' },
                    { grade: 'F (Below 60%)', count: 53, percentage: 4, color: 'bg-red-500' },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.grade}</span>
                        <span className="text-gray-500">{item.count} students ({item.percentage}%)</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fee Collection Status</CardTitle>
                  <CardDescription>Current semester overview</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">$145K</div>
                      <div className="text-sm text-gray-600">Collected</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">$23K</div>
                      <div className="text-sm text-gray-600">Pending</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Collection Progress</span>
                      <span>86%</span>
                    </div>
                    <Progress value={86} className="h-2" />
                  </div>
                  
                  <div className="pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>On-time payments</span>
                      <span className="text-green-600">94%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Late payments</span>
                      <span className="text-orange-600">4%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Outstanding</span>
                      <span className="text-red-600">2%</span>
                    </div>
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