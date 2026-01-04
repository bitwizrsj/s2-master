'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  CalendarDays,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  Download,
  FileText,
  BarChart3,
  Calendar,
  AlertTriangle,
  ChevronRight,
  Eye
} from 'lucide-react';

export default function StudentAttendance() {
  // Attendance statistics
  const stats = {
    overall: 94,
    present: 65,
    absent: 3,
    late: 2,
    totalDays: 70
  };

  // Daily attendance records
  const dailyAttendance = [
    {
      date: '2024-03-21',
      day: 'Thursday',
      status: 'full',
      present: 4,
      total: 4,
      percentage: 100,
      subjects: [
        { name: 'Mathematics', status: 'present', time: '9:00 AM - 10:30 AM' },
        { name: 'Physics', status: 'present', time: '10:45 AM - 12:15 PM' },
        { name: 'English Literature', status: 'present', time: '1:30 PM - 3:00 PM' },
        { name: 'Chemistry Lab', status: 'present', time: '3:15 PM - 4:45 PM' }
      ]
    },
    {
      date: '2024-03-20',
      day: 'Wednesday',
      status: 'partial',
      present: 3,
      total: 4,
      percentage: 75,
      subjects: [
        { name: 'History', status: 'present', time: '9:00 AM - 10:30 AM' },
        { name: 'Physical Education', status: 'absent', time: '10:45 AM - 12:15 PM' },
        { name: 'Computer Science', status: 'present', time: '1:30 PM - 3:00 PM' },
        { name: 'French', status: 'late', time: '3:15 PM - 4:45 PM' }
      ]
    },
    {
      date: '2024-03-19',
      day: 'Tuesday',
      status: 'full',
      present: 4,
      total: 4,
      percentage: 100,
      subjects: [
        { name: 'Mathematics', status: 'present', time: '9:00 AM - 10:30 AM' },
        { name: 'Biology', status: 'present', time: '10:45 AM - 12:15 PM' },
        { name: 'Economics', status: 'present', time: '1:30 PM - 3:00 PM' },
        { name: 'Art & Design', status: 'present', time: '3:15 PM - 4:45 PM' }
      ]
    }
  ];

  // Monthly statistics
  const monthlyStats = [
    {
      month: 'March 2024',
      present: 18,
      absent: 2,
      late: 1,
      percentage: 90,
      trend: 'up'
    },
    {
      month: 'February 2024',
      present: 20,
      absent: 1,
      late: 0,
      percentage: 95,
      trend: 'up'
    },
    {
      month: 'January 2024',
      present: 22,
      absent: 0,
      late: 1,
      percentage: 96,
      trend: 'stable'
    }
  ];

  // Subject-wise attendance
  const subjectStats = [
    {
      subject: 'Mathematics',
      present: 43,
      total: 45,
      percentage: 96,
      status: 'excellent'
    },
    {
      subject: 'Physics',
      present: 38,
      total: 40,
      percentage: 95,
      status: 'excellent'
    },
    {
      subject: 'Chemistry',
      present: 36,
      total: 38,
      percentage: 95,
      status: 'excellent'
    },
    {
      subject: 'English Literature',
      present: 40,
      total: 42,
      percentage: 95,
      status: 'good'
    },
    {
      subject: 'History',
      present: 33,
      total: 35,
      percentage: 94,
      status: 'good'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle2 className="h-3 w-3 mr-1" /> Present</Badge>;
      case 'absent':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" /> Absent</Badge>;
      case 'late':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"><Clock className="h-3 w-3 mr-1" /> Late</Badge>;
      case 'full':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Full Day</Badge>;
      case 'partial':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Partial</Badge>;
      default:
        return null;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingUp className="h-4 w-4 text-red-500 transform rotate-180" />;
      default:
        return <TrendingUp className="h-4 w-4 text-gray-500" />;
    }
  };

  const getSubjectStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'text-green-600';
      case 'good':
        return 'text-blue-600';
      case 'warning':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Attendance" role="student" userName="Emma Wilson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Overall Attendance</p>
                      <p className="text-2xl font-bold text-green-600">{stats.overall}%</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-full">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <Progress value={stats.overall} className="mt-3" />
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Present Days</p>
                      <p className="text-2xl font-bold text-blue-600">{stats.present}</p>
                      <p className="text-xs text-gray-500 mt-1">Out of {stats.totalDays} days</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Absent Days</p>
                      <p className="text-2xl font-bold text-red-600">{stats.absent}</p>
                      <div className="flex items-center mt-1">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-xs text-green-600">-1 from last month</span>
                      </div>
                    </div>
                    <div className="p-3 bg-red-100 rounded-full">
                      <XCircle className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Late Arrivals</p>
                      <p className="text-2xl font-bold text-yellow-600">{stats.late}</p>
                      <p className="text-xs text-gray-500 mt-1">All excused</p>
                    </div>
                    <div className="p-3 bg-yellow-100 rounded-full">
                      <Clock className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Tabs */}
            <Tabs defaultValue="daily" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="daily" className="flex items-center space-x-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>Daily View</span>
                </TabsTrigger>
                <TabsTrigger value="monthly" className="flex items-center space-x-2">
                  <BarChart3 className="h-4 w-4" />
                  <span>Monthly Analytics</span>
                </TabsTrigger>
                <TabsTrigger value="subjects" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Subject-wise</span>
                </TabsTrigger>
              </TabsList>

              {/* Daily View Tab */}
              <TabsContent value="daily" className="space-y-4">
                {dailyAttendance.map((day, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-blue-600" />
                          <div>
                            <CardTitle className="text-lg">{day.day}, March {parseInt(day.date.split('-')[2])}</CardTitle>
                            <CardDescription>
                              {day.present} of {day.total} classes attended • {day.percentage}% attendance
                            </CardDescription>
                          </div>
                        </div>
                        {getStatusBadge(day.status)}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {day.subjects.map((subject, idx) => (
                          <div key={idx} className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-medium text-sm">{subject.name}</h4>
                              {getStatusBadge(subject.status)}
                            </div>
                            <p className="text-xs text-gray-500">{subject.time}</p>
                            {subject.status === 'late' && (
                              <p className="text-xs text-yellow-600 mt-2">Arrived 15 minutes late</p>
                            )}
                            {subject.status === 'absent' && (
                              <p className="text-xs text-red-600 mt-2">Medical leave approved</p>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3 pt-4 border-t">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          Request Correction
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Monthly Analytics Tab */}
              <TabsContent value="monthly" className="space-y-4">
                {monthlyStats.map((month, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <BarChart3 className="h-5 w-5 text-purple-600" />
                          <div>
                            <CardTitle className="text-lg">{month.month}</CardTitle>
                            <CardDescription>
                              {month.present} present • {month.absent} absent • {month.late} late
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getTrendIcon(month.trend)}
                          <Badge variant={
                            month.percentage >= 95 ? 'default' :
                            month.percentage >= 85 ? 'secondary' : 'destructive'
                          }>
                            {month.percentage}%
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <p className="text-lg font-bold text-green-600">{month.present}</p>
                          <p className="text-sm text-gray-600">Present</p>
                        </div>
                        <div className="text-center p-3 bg-red-50 rounded-lg">
                          <p className="text-lg font-bold text-red-600">{month.absent}</p>
                          <p className="text-sm text-gray-600">Absent</p>
                        </div>
                        <div className="text-center p-3 bg-yellow-50 rounded-lg">
                          <p className="text-lg font-bold text-yellow-600">{month.late}</p>
                          <p className="text-sm text-gray-600">Late</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">Attendance Rate</span>
                          <span>{month.percentage}%</span>
                        </div>
                        <Progress value={month.percentage} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Subject-wise Tab */}
              <TabsContent value="subjects" className="space-y-4">
                {subjectStats.map((subject, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-indigo-600" />
                          <div>
                            <CardTitle className="text-lg">{subject.subject}</CardTitle>
                            <CardDescription>
                              {subject.present} of {subject.total} classes attended
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${getSubjectStatusColor(subject.status)}`}>
                            {subject.percentage}%
                          </div>
                          <div className="text-sm text-gray-500">Attendance Rate</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Class Attendance</span>
                          <span>{subject.present}/{subject.total} classes</span>
                        </div>
                        <Progress value={subject.percentage} className="h-2" />
                      </div>
                      
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                          {subject.percentage >= 95 ? (
                            <span className="text-green-600">Excellent attendance! Keep up the good work.</span>
                          ) : subject.percentage >= 85 ? (
                            <span className="text-blue-600">Good attendance. Maintain consistency.</span>
                          ) : (
                            <span className="text-yellow-600">Need improvement. Try to attend more classes.</span>
                          )}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

            {/* Attendance Summary & Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Attendance Summary & Actions</CardTitle>
                <CardDescription>Overview and available actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Attendance Status</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Current Status</span>
                        <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Minimum Required</span>
                        <span>75%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Your Attendance</span>
                        <span className="font-medium text-green-600">{stats.overall}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Quick Actions</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        Download Report
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Request Leave
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Report Error
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Important Notes</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                        Your attendance is above the required minimum
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 mr-2 text-blue-600 mt-0.5" />
                        All absences have valid reasons
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-4 w-4 mr-2 text-yellow-600 mt-0.5" />
                        Next review: April 15, 2024
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}