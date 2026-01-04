'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Calendar,
  Play,
  FileText,
  Video,
  Download
} from 'lucide-react';

export default function StudentClasses() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="My Classes" role="student" userName="Emma Wilson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Current Classes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                {
                  subject: 'Mathematics',
                  teacher: 'Dr. Smith',
                  room: 'Room 101',
                  time: '9:00 AM - 10:30 AM',
                  progress: 75,
                  nextClass: 'Tomorrow',
                  color: 'bg-blue-500',
                  students: 28
                },
                {
                  subject: 'Physics',
                  teacher: 'Dr. Johnson',
                  room: 'Lab B',
                  time: '10:45 AM - 12:15 PM',
                  progress: 68,
                  nextClass: 'Today',
                  color: 'bg-green-500',
                  students: 25
                },
                {
                  subject: 'English Literature',
                  teacher: 'Ms. Davis',
                  room: 'Room 205',
                  time: '1:00 PM - 2:30 PM',
                  progress: 82,
                  nextClass: 'Today',
                  color: 'bg-purple-500',
                  students: 30
                },
                {
                  subject: 'Chemistry',
                  teacher: 'Dr. Wilson',
                  room: 'Lab A',
                  time: '2:45 PM - 4:15 PM',
                  progress: 71,
                  nextClass: 'Friday',
                  color: 'bg-orange-500',
                  students: 22
                },
                {
                  subject: 'History',
                  teacher: 'Mr. Brown',
                  room: 'Room 301',
                  time: '9:00 AM - 10:30 AM',
                  progress: 89,
                  nextClass: 'Monday',
                  color: 'bg-red-500',
                  students: 26
                },
                {
                  subject: 'Biology',
                  teacher: 'Dr. Garcia',
                  room: 'Lab C',
                  time: '11:00 AM - 12:30 PM',
                  progress: 63,
                  nextClass: 'Tuesday',
                  color: 'bg-teal-500',
                  students: 24
                }
              ].map((class_, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${class_.color}`} />
                        <CardTitle className="text-lg">{class_.subject}</CardTitle>
                      </div>
                      <Badge variant="outline">{class_.nextClass}</Badge>
                    </div>
                    <CardDescription>
                      {class_.teacher} • {class_.room}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        {class_.time}
                      </span>
                      <span className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        {class_.students} students
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Course Progress</span>
                        <span>{class_.progress}%</span>
                      </div>
                      <Progress value={class_.progress} className="h-2" />
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Play className="h-4 w-4 mr-2" />
                        Join Class
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Materials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Recent Materials
                </CardTitle>
                <CardDescription>Latest uploads from your teachers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: 'Photosynthesis Notes', subject: 'Biology', type: 'PDF', size: '2.4 MB', uploaded: '2 hours ago' },
                    { title: 'Quadratic Equations Video', subject: 'Mathematics', type: 'Video', size: '45 MB', uploaded: '1 day ago' },
                    { title: 'Shakespeare Analysis', subject: 'English', type: 'PDF', size: '1.8 MB', uploaded: '2 days ago' },
                    { title: 'Chemical Reactions Lab', subject: 'Chemistry', type: 'PDF', size: '3.2 MB', uploaded: '3 days ago' },
                    { title: 'World War II Timeline', subject: 'History', type: 'PDF', size: '5.1 MB', uploaded: '4 days ago' },
                    { title: 'Physics Formulas', subject: 'Physics', type: 'PDF', size: '1.2 MB', uploaded: '5 days ago' },
                  ].map((material, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {material.type === 'Video' ? (
                            <Video className="h-5 w-5 text-red-500" />
                          ) : (
                            <FileText className="h-5 w-5 text-blue-500" />
                          )}
                          <div>
                            <h4 className="font-medium text-sm">{material.title}</h4>
                            <p className="text-xs text-gray-500">{material.subject}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{material.size}</span>
                        <span>{material.uploaded}</span>
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