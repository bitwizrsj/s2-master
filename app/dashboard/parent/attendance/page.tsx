'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  UserCheck, 
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  TrendingUp
} from 'lucide-react';

export default function ParentAttendance() {
  const attendanceData = {
    overall: {
      present: 142,
      absent: 8,
      late: 5,
      percentage: 94.2
    },
    monthly: [
      { month: 'January', percentage: 96, present: 20, absent: 1, late: 0 },
      { month: 'February', percentage: 92, present: 18, absent: 2, late: 0 },
      { month: 'March', percentage: 94, present: 15, absent: 1, late: 0 }
    ],
    recent: [
      { date: '2024-03-21', status: 'present', subject: 'Mathematics', time: '9:00 AM' },
      { date: '2024-03-21', status: 'present', subject: 'Physics', time: '10:30 AM' },
      { date: '2024-03-20', status: 'late', subject: 'English', time: '1:00 PM', note: '5 minutes late' },
      { date: '2024-03-20', status: 'present', subject: 'Chemistry', time: '2:30 PM' },
      { date: '2024-03-19', status: 'absent', subject: 'History', time: '9:00 AM', note: 'Sick leave' },
      { date: '2024-03-19', status: 'present', subject: 'Biology', time: '11:00 AM' }
    ]
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="parent" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Attendance Tracking" role="parent" userName="Michael Thompson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Attendance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Present Days</p>
                      <p className="text-2xl font-bold text-green-900">{attendanceData.overall.present}</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-yellow-700">Late Arrivals</p>
                      <p className="text-2xl font-bold text-yellow-900">{attendanceData.overall.late}</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-700">Absent Days</p>
                      <p className="text-2xl font-bold text-red-900">{attendanceData.overall.absent}</p>
                    </div>
                    <XCircle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Attendance Rate</p>
                      <p className="text-2xl font-bold text-blue-900">{attendanceData.overall.percentage}%</p>
                    </div>
                    <UserCheck className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filter Controls */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">View Period</label>
                    <Select defaultValue="month">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="semester">This Semester</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Subjects</SelectItem>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="english">English Literature</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Monthly Trends */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Monthly Attendance Trends
                  </CardTitle>
                  <CardDescription>Attendance patterns over the past months</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {attendanceData.monthly.map((month, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{month.month}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">
                            {month.present}P / {month.absent}A / {month.late}L
                          </span>
                          <Badge variant={month.percentage >= 95 ? 'default' : month.percentage >= 90 ? 'secondary' : 'destructive'}>
                            {month.percentage}%
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            month.percentage >= 95 ? 'bg-green-500' : 
                            month.percentage >= 90 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${month.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Attendance Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Attendance Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span className="font-medium text-sm">Late Arrival Pattern</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Emma has been late 3 times this month
                    </p>
                  </div>
                  
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-sm">Perfect Week</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      100% attendance last week
                    </p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-sm">Improvement</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Attendance improved by 2% this month
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Attendance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Recent Attendance Record
                </CardTitle>
                <CardDescription>Last 10 class sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {attendanceData.recent.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full">
                          {record.status === 'present' && <CheckCircle2 className="h-6 w-6 text-green-600" />}
                          {record.status === 'late' && <Clock className="h-6 w-6 text-yellow-600" />}
                          {record.status === 'absent' && <XCircle className="h-6 w-6 text-red-600" />}
                        </div>
                        <div>
                          <div className="font-medium">{record.subject}</div>
                          <div className="text-sm text-gray-500">{record.date} • {record.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={
                          record.status === 'present' ? 'default' :
                          record.status === 'late' ? 'secondary' : 'destructive'
                        }>
                          {record.status}
                        </Badge>
                        {record.note && (
                          <div className="text-xs text-gray-500 mt-1">{record.note}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}