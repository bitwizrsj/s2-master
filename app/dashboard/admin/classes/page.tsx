'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BookOpen, 
  Users, 
  Calendar,
  Clock,
  Plus,
  Edit,
  Trash2,
  Search,
  MapPin,
  GraduationCap
} from 'lucide-react';

export default function AdminClasses() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const classes = [
    {
      id: 1,
      name: 'Mathematics - Algebra',
      grade: 'Grade 9',
      teacher: 'Dr. Smith',
      students: 28,
      room: 'Room 101',
      schedule: 'Mon, Wed, Fri - 9:00 AM',
      capacity: 30,
      status: 'active'
    },
    {
      id: 2,
      name: 'Physics - Mechanics',
      grade: 'Grade 10',
      teacher: 'Dr. Johnson',
      students: 25,
      room: 'Lab B',
      schedule: 'Tue, Thu - 10:30 AM',
      capacity: 25,
      status: 'active'
    },
    {
      id: 3,
      name: 'English Literature',
      grade: 'Grade 11',
      teacher: 'Ms. Davis',
      students: 22,
      room: 'Room 205',
      schedule: 'Mon, Wed, Fri - 1:00 PM',
      capacity: 25,
      status: 'active'
    },
    {
      id: 4,
      name: 'Chemistry - Organic',
      grade: 'Grade 12',
      teacher: 'Dr. Wilson',
      students: 18,
      room: 'Lab A',
      schedule: 'Tue, Thu - 2:30 PM',
      capacity: 20,
      status: 'active'
    },
    {
      id: 5,
      name: 'History - World Wars',
      grade: 'Grade 11',
      teacher: 'Mr. Brown',
      students: 24,
      room: 'Room 301',
      schedule: 'Mon, Wed, Fri - 11:00 AM',
      capacity: 30,
      status: 'active'
    },
    {
      id: 6,
      name: 'Biology - Genetics',
      grade: 'Grade 12',
      teacher: 'Dr. Garcia',
      students: 20,
      room: 'Lab C',
      schedule: 'Tue, Thu - 9:00 AM',
      capacity: 22,
      status: 'inactive'
    }
  ];

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature', 'History', 'Computer Science', 'Art', 'Music', 'Physical Education'];
  const teachers = ['Dr. Smith', 'Dr. Johnson', 'Ms. Davis', 'Dr. Wilson', 'Mr. Brown', 'Dr. Garcia'];
  const rooms = ['Room 101', 'Room 102', 'Room 205', 'Room 301', 'Lab A', 'Lab B', 'Lab C', 'Library', 'Auditorium'];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Class Management" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Class Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Classes</p>
                      <p className="text-2xl font-bold text-blue-600">{classes.length}</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Classes</p>
                      <p className="text-2xl font-bold text-green-600">{classes.filter(c => c.status === 'active').length}</p>
                    </div>
                    <GraduationCap className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Students</p>
                      <p className="text-2xl font-bold text-purple-600">{classes.reduce((sum, c) => sum + c.students, 0)}</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg Class Size</p>
                      <p className="text-2xl font-bold text-orange-600">{Math.round(classes.reduce((sum, c) => sum + c.students, 0) / classes.length)}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search and Controls */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input placeholder="Search classes..." className="pl-10" />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Grades</SelectItem>
                        <SelectItem value="9">Grade 9</SelectItem>
                        <SelectItem value="10">Grade 10</SelectItem>
                        <SelectItem value="11">Grade 11</SelectItem>
                        <SelectItem value="12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={() => setShowCreateForm(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Class
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Classes Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {classes.map((class_) => (
                <Card key={class_.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{class_.name}</CardTitle>
                        <CardDescription>{class_.grade} • {class_.teacher}</CardDescription>
                      </div>
                      <Badge variant={class_.status === 'active' ? 'default' : 'secondary'}>
                        {class_.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{class_.students}/{class_.capacity} students</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{class_.room}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{class_.schedule}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Capacity</span>
                        <span>{Math.round((class_.students / class_.capacity) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(class_.students / class_.capacity) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Users className="h-4 w-4 mr-2" />
                        Manage Students
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Create Class Modal */}
            {showCreateForm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <Card className="w-full max-w-2xl m-4">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Create New Class</CardTitle>
                      <Button variant="ghost" onClick={() => setShowCreateForm(false)}>×</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Subject</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            {subjects.map((subject) => (
                              <SelectItem key={subject} value={subject.toLowerCase()}>
                                {subject}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Grade Level</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9">Grade 9</SelectItem>
                            <SelectItem value="10">Grade 10</SelectItem>
                            <SelectItem value="11">Grade 11</SelectItem>
                            <SelectItem value="12">Grade 12</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Class Name</label>
                      <Input placeholder="e.g., Advanced Mathematics" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Assigned Teacher</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select teacher" />
                          </SelectTrigger>
                          <SelectContent>
                            {teachers.map((teacher) => (
                              <SelectItem key={teacher} value={teacher.toLowerCase()}>
                                {teacher}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Room</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select room" />
                          </SelectTrigger>
                          <SelectContent>
                            {rooms.map((room) => (
                              <SelectItem key={room} value={room.toLowerCase()}>
                                {room}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Capacity</label>
                        <Input type="number" placeholder="30" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Start Time</label>
                        <Input type="time" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Duration (hours)</label>
                        <Input type="number" placeholder="1.5" step="0.5" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Schedule Days</label>
                      <div className="flex space-x-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                          <Button key={day} variant="outline" size="sm" className="flex-1">
                            {day}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                        Cancel
                      </Button>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Create Class
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}