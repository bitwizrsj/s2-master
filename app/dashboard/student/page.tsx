'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Calendar,
  Brain,
  FileText,
  CheckCircle2,
  AlertCircle,
  Play,
  Home,
  Users,
  Video,
  MessageSquare,
  Download,
  Settings,
  HelpCircle,
  Bell,
  BarChart3,
  BookMarked,
  GraduationCap,
  Menu,
  User,
  LogOut,
  X,
  CalendarCheck
} from 'lucide-react';
import { useState } from 'react';

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const shortcuts = [


{
  icon: <CalendarCheck className="h-5 w-5" />,
  label: 'Attendance',
  href: '#',
  color: 'text-blue-600',
  bgColor: 'bg-blue-100'
},
    { icon: <BookOpen className="h-5 w-5" />, label: 'Courses', href: '/courses', color: 'text-indigo-600', bgColor: 'bg-indigo-100' },
    { icon: <FileText className="h-5 w-5" />, label: 'Assignments', href: '/assignments', color: 'text-green-600', bgColor: 'bg-green-100' },
    { icon: <BarChart3 className="h-5 w-5" />, label: 'Grades', href: '/grades', color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { icon: <Calendar className="h-5 w-5" />, label: 'Schedule', href: '/schedule', color: 'text-orange-600', bgColor: 'bg-orange-100' },
    { icon: <Video className="h-5 w-5" />, label: 'Lectures', href: '/lectures', color: 'text-red-600', bgColor: 'bg-red-100' },
    { icon: <BookMarked className="h-5 w-5" />, label: 'Library', href: '/library', color: 'text-teal-600', bgColor: 'bg-teal-100' },
    { icon: <MessageSquare className="h-5 w-5" />, label: 'Messages', href: '/messages', color: 'text-pink-600', bgColor: 'bg-pink-100' },
    { icon: <Users className="h-5 w-5" />, label: 'Classmates', href: '/classmates', color: 'text-cyan-600', bgColor: 'bg-cyan-100' },
    { icon: <Brain className="h-5 w-5" />, label: 'AI Tutor', href: '/ai-tutor', color: 'text-violet-600', bgColor: 'bg-violet-100' },
    { icon: <Bell className="h-5 w-5" />, label: 'Notifications', href: '/notifications', color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', href: '/settings', color: 'text-gray-600', bgColor: 'bg-gray-100' },
  ];

  const profileMenuItems = [
    { icon: <User className="h-4 w-4" />, label: 'Profile', href: '/profile' },
    { icon: <Settings className="h-4 w-4" />, label: 'Settings', href: '/settings' },
    { icon: <LogOut className="h-4 w-4" />, label: 'Log out', href: '/logout' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar - Only show on desktop */}
      <div className="hidden lg:block">
        <Sidebar role="student" />
      </div>

      {/* Profile Menu Overlay for Mobile */}
      {profileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50" 
            onClick={() => setProfileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">EW</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Emma Wilson</h3>
                    <p className="text-sm text-gray-500">Student</p>
                  </div>
                </div>
                <button 
                  onClick={() => setProfileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 p-4 space-y-2">
                {profileMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setProfileMenuOpen(false)}
                  >
                    <div className={`p-2 rounded-full ${index === 2 ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
                      {item.icon}
                    </div>
                    <span className={`font-medium ${index === 2 ? 'text-red-600' : 'text-gray-700'}`}>
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 border-t">
                <div className="text-xs text-gray-500 text-center">
                  v2.4.1 • Last login: Today 9:30 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Mobile Header - Only show on mobile */}
        <div className="lg:hidden">
          <div className="bg-white border-b px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Left side - Title */}
              {/* Profile Avatar */}
                <button 
                  onClick={() => setProfileMenuOpen(true)}
                  className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <span className="text-blue-600 font-semibold">EW</span>
                </button>
              <div>
                
                <h1 className="font-semibold lg:text-lg">Student Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome, Emma</p>
              </div>

              {/* Right side - Icons */}
              <div className="flex items-center space-x-3">
                {/* Notification Icon */}
                <button className="relative p-2 hover:bg-gray-100 rounded-full">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
                </button>

                {/* Message Icon */}
                <button className="relative p-2 hover:bg-gray-100 rounded-full">
                  <MessageSquare className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
                </button>

                
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Header - Only show on desktop */}
        <div className="hidden lg:block">
          <Header title="Student Dashboard" role="student" userName="Emma Wilson" />
        </div>
        
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Shortcut Icons - Main Navigation for Mobile */}
            <div className="lg:hidden mb-6">
              <div className="bg-white rounded-xl shadow-sm p-4">
                {/* <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <Home className="h-5 w-5 mr-2 text-blue-600" />
                  Quick Access
                </h2> */}
                <div className="grid grid-cols-4 gap-3">
                  {shortcuts.map((shortcut, index) => (
                    <a
                      key={index}
                      href={shortcut.href}
                      className="flex flex-col items-center justify-center p-3 rounded-lg hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                      <div className={`p-3 rounded-full ${shortcut.bgColor} ${shortcut.color} mb-2`}>
                        {shortcut.icon}
                      </div>
                      <span className="text-xs font-medium text-center text-gray-700">{shortcut.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Overview - SHOW ON ALL SCREENS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
              <Card className="hidden lg:block hover:shadow-md transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs lg:text-sm font-medium text-gray-600">Attendance</p>
                      <p className="text-xl lg:text-2xl font-bold text-green-600">94%</p>
                    </div>
                    <div className="p-2 lg:p-3 bg-green-100 rounded-full">
                      <CheckCircle2 className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hidden lg:block hover:shadow-md transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs lg:text-sm font-medium text-gray-600">GPA</p>
                      <p className="text-xl lg:text-2xl font-bold text-blue-600">3.8</p>
                    </div>
                    <div className="p-2 lg:p-3 bg-blue-100 rounded-full">
                      <Award className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hidden lg:block hover:shadow-md transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs lg:text-sm font-medium text-gray-600">Due Soon</p>
                      <p className="text-xl lg:text-2xl font-bold text-orange-600">3</p>
                    </div>
                    <div className="p-2 lg:p-3 bg-orange-100 rounded-full">
                      <AlertCircle className="h-5 w-5 lg:h-6 lg:w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hidden lg:block hover:shadow-md transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs lg:text-sm font-medium text-gray-600">Streak</p>
                      <p className="text-xl lg:text-2xl font-bold text-purple-600">12d</p>
                    </div>
                    <div className="p-2 lg:p-3 bg-purple-100 rounded-full">
                      <TrendingUp className="h-5 w-5 lg:h-6 lg:w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Schedule and AI Assistant - SHOW ON ALL SCREENS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {/* Today's Schedule */}
              <Card className="hidden lg:block lg:col-span-2">
                <CardHeader className="p-4 lg:p-6">
                  <CardTitle className="flex items-center text-base lg:text-lg">
                    <Calendar className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                    Today's Schedule
                  </CardTitle>
                  <CardDescription className="text-xs lg:text-sm">Thu, Mar 21, 2024</CardDescription>
                </CardHeader>
                <CardContent className="p-4 lg:p-6 space-y-3 lg:space-y-4">
                  {[
                    { time: '9:00 AM', subject: 'Mathematics', room: 'Room 101', status: 'current' },
                    { time: '10:30 AM', subject: 'Physics', room: 'Lab B', status: 'upcoming' },
                    { time: '1:00 PM', subject: 'English', room: 'Room 205', status: 'upcoming' },
                    { time: '2:30 PM', subject: 'Chemistry', room: 'Lab A', status: 'upcoming' },
                  ].map((class_, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border text-sm">
                      <div className="flex items-center space-x-2 lg:space-x-3">
                        <div className="text-xs lg:text-sm font-medium text-gray-500 min-w-16">{class_.time}</div>
                        <div>
                          <div className="font-medium">{class_.subject}</div>
                          <div className="text-xs text-gray-500">{class_.room}</div>
                        </div>
                      </div>
                      <Badge 
                        variant={class_.status === 'current' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {class_.status === 'current' ? 'Now' : 'Upcoming'}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* AI Assistant */}
              <Card className="ai-gradient text-white">
                <CardHeader className="p-4 lg:p-6">
                  <CardTitle className="flex items-center text-base lg:text-lg text-white">
                    <Brain className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                    AI Assistant
                  </CardTitle>
                  <CardDescription className="text-white/80 text-xs lg:text-sm">
                    Get instant help
                  </CardDescription>
                </CardHeader>
                <CardContent className=" lg:p-6 lg:space-y-4">
                  <div className="hidden lg:block space-y-2">
                    <div className="text-sm font-medium">Can help with:</div>
                    <ul className="text-xs lg:text-sm space-y-1 text-white/90">
                      <li>• Homework help</li>
                      <li>• Study plans</li>
                      <li>• Notes review</li>
                      <li>• Quiz prep</li>
                    </ul>
                  </div>
                  <Button variant="secondary" className="w-full text-sm">
                    <Brain className="h-4 w-4 mr-2" />
                    Ask AI
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Assignments and Performance - SHOW ON ALL SCREENS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Recent Assignments */}
              <Card className='hidden lg:block'>
                <CardHeader className="p-4 lg:p-6">
                  <CardTitle className="flex items-center text-base lg:text-lg">
                    <FileText className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                    Recent Assignments
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 lg:p-6 space-y-3 lg:space-y-4">
                  {[
                    { title: 'Physics Lab', subject: 'Physics', due: '2d', grade: 'A-', status: 'graded' },
                    { title: 'Shakespeare Essay', subject: 'English', due: '1d', status: 'pending' },
                    { title: 'Calculus Set', subject: 'Math', due: '3d', status: 'draft' },
                  ].map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border text-sm">
                      <div>
                        <div className="font-medium">{assignment.title}</div>
                        <div className="text-xs text-gray-500">{assignment.subject} • Due in {assignment.due}</div>
                      </div>
                      <div className="text-right">
                        {assignment.grade && (
                          <div className="font-medium text-green-600 text-sm">{assignment.grade}</div>
                        )}
                        <Badge 
                          variant={
                            assignment.status === 'graded' ? 'default' : 
                            assignment.status === 'pending' ? 'destructive' : 'secondary'
                          }
                          className="text-xs"
                        >
                          {assignment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Performance Overview */}
              <Card className='hidden lg:block'>
                <CardHeader className="p-4 lg:p-6">
                  <CardTitle className="flex items-center text-base lg:text-lg">
                    <TrendingUp className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 lg:p-6 space-y-4 lg:space-y-6">
                  {[
                    { subject: 'Mathematics', score: 92, trend: '+5%' },
                    { subject: 'Physics', score: 88, trend: '+2%' },
                    { subject: 'English', score: 85, trend: '-1%' },
                    { subject: 'Chemistry', score: 90, trend: '+8%' },
                  ].map((subject, index) => (
                    <div key={index} className="space-y-1 lg:space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-xs lg:text-sm">{subject.subject}</span>
                        <span className="text-gray-500 text-xs lg:text-sm">{subject.score}% ({subject.trend})</span>
                      </div>
                      <Progress value={subject.score} className="h-2" />
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