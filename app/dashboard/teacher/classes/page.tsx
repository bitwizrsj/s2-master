'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Users, 
  Calendar,
  Clock,
  Plus,
  Settings,
  BarChart3,
  FileText,
  Video,
  UserCheck
} from 'lucide-react';

export default function TeacherClasses() {
  const classes = [
    {
      id: 1,
      name: 'Physics 101',
      grade: 'Grade 10',
      students: 28,
      schedule: 'Mon, Wed, Fri - 9:00 AM',
      room: 'Lab B',
      progress: 75,
      nextClass: 'Tomorrow 9:00 AM',
      attendance: 96,
      avgGrade: 'B+',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Advanced Physics',
      grade: 'Grade 11',
      students: 22,
      schedule: 'Tue, Thu - 11:00 AM',
      room: 'Room 205',
      progress: 68,
      nextClass: 'Today 11:00 AM',
      attendance: 94,
      avgGrade: 'A-',
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: 'Physics Lab',
      grade: 'Grade 10',
      students: 15,
      schedule: 'Wed - 2:00 PM',
      room: 'Lab A',
      progress: 82,
      nextClass: 'Next Week',
      attendance: 98,
      avgGrade: 'A',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: 'AP Physics',
      grade: 'Grade 12',
      students: 18,
      schedule: 'Mon, Wed, Fri - 3:30 PM',
      room: 'Room 108',
      progress: 89,
      nextClass: 'Tomorrow 3:30 PM',
      attendance: 92,
      avgGrade: 'A',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="My Classes" role="teacher" userName="Dr. Sarah Johnson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Students</p>
                      <p className="text-2xl font-bold text-blue-600">83</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg Attendance</p>
                      <p className="text-2xl font-bold text-green-600">95%</p>
                    </div>
                    <UserCheck className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg Grade</p>
                      <p className="text-2xl font-bold text-purple-600">B+</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Classes Today</p>
                      <p className="text-2xl font-bold text-orange-600">3</p>
                    </div>
                    <Calendar className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="overview">Class Overview</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="materials">Materials</TabsTrigger>
                </TabsList>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Class
                </Button>
              </div>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {classes.map((class_) => (
                    <Card key={class_.id} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full ${class_.color}`} />
                            <div>
                              <CardTitle className="text-lg">{class_.name}</CardTitle>
                              <CardDescription>{class_.grade} • {class_.room}</CardDescription>
                            </div>
                          </div>
                          <Badge variant="outline">{class_.nextClass}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-blue-600">{class_.students}</div>
                            <div className="text-xs text-gray-600">Students</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-600">{class_.attendance}%</div>
                            <div className="text-xs text-gray-600">Attendance</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-600">{class_.avgGrade}</div>
                            <div className="text-xs text-gray-600">Avg Grade</div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Course Progress</span>
                            <span>{class_.progress}%</span>
                          </div>
                          <Progress value={class_.progress} className="h-2" />
                        </div>

                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {class_.schedule}
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            <UserCheck className="h-4 w-4 mr-2" />
                            Take Attendance
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Schedule</CardTitle>
                    <CardDescription>Your teaching schedule for this week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                        <div key={day} className="space-y-2">
                          <h3 className="font-medium text-center p-2 bg-gray-100 rounded">{day}</h3>
                          <div className="space-y-2">
                            {day === 'Monday' && (
                              <>
                                <div className="p-2 border rounded text-sm">
                                  <div className="font-medium">9:00 AM</div>
                                  <div className="text-gray-600">Physics 101</div>
                                </div>
                                <div className="p-2 border rounded text-sm">
                                  <div className="font-medium">3:30 PM</div>
                                  <div className="text-gray-600">AP Physics</div>
                                </div>
                              </>
                            )}
                            {day === 'Tuesday' && (
                              <div className="p-2 border rounded text-sm">
                                <div className="font-medium">11:00 AM</div>
                                <div className="text-gray-600">Advanced Physics</div>
                              </div>
                            )}
                            {day === 'Wednesday' && (
                              <>
                                <div className="p-2 border rounded text-sm">
                                  <div className="font-medium">9:00 AM</div>
                                  <div className="text-gray-600">Physics 101</div>
                                </div>
                                <div className="p-2 border rounded text-sm">
                                  <div className="font-medium">2:00 PM</div>
                                  <div className="text-gray-600">Physics Lab</div>
                                </div>
                                <div className="p-2 border rounded text-sm">
                                  <div className="font-medium">3:30 PM</div>
                                  <div className="text-gray-600">AP Physics</div>
                                </div>
                              </>
                            )}
                            {day === 'Thursday' && (
                              <div className="p-2 border rounded text-sm">
                                <div className="font-medium">11:00 AM</div>
                                <div className="text-gray-600">Advanced Physics</div>
                              </div>
                            )}
                            {day === 'Friday' && (
                              <>
                                <div className="p-2 border rounded text-sm">
                                  <div className="font-medium">9:00 AM</div>
                                  <div className="text-gray-600">Physics 101</div>
                                </div>
                                <div className="p-2 border rounded text-sm">
                                  <div className="font-medium">3:30 PM</div>
                                  <div className="text-gray-600">AP Physics</div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="materials" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Teaching Materials</CardTitle>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Upload Material
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { title: 'Motion and Forces Slides', type: 'Presentation', class: 'Physics 101', size: '12 MB' },
                        { title: 'Lab Safety Video', type: 'Video', class: 'Physics Lab', size: '45 MB' },
                        { title: 'Quantum Physics Notes', type: 'Document', class: 'AP Physics', size: '2.3 MB' },
                        { title: 'Practice Problems', type: 'Worksheet', class: 'Advanced Physics', size: '1.8 MB' },
                        { title: 'Experiment Guidelines', type: 'Document', class: 'Physics Lab', size: '3.2 MB' },
                        { title: 'Review Session Recording', type: 'Video', class: 'Physics 101', size: '78 MB' }
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
                                <p className="text-xs text-gray-500">{material.class}</p>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>{material.type}</span>
                            <span>{material.size}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}