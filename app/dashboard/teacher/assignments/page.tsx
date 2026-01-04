'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  FileText, 
  Plus, 
  Clock, 
  Users,
  Eye,
  Edit,
  Trash2,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function TeacherAssignments() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const assignments = {
    active: [
      {
        id: 1,
        title: 'Motion and Forces Lab Report',
        class: 'Physics 101',
        dueDate: '2024-03-25',
        submissions: 23,
        totalStudents: 28,
        points: 100,
        status: 'active'
      },
      {
        id: 2,
        title: 'Quantum Physics Essay',
        class: 'AP Physics',
        dueDate: '2024-03-28',
        submissions: 12,
        totalStudents: 18,
        points: 75,
        status: 'active'
      }
    ],
    grading: [
      {
        id: 3,
        title: 'Energy Conservation Problems',
        class: 'Advanced Physics',
        dueDate: '2024-03-20',
        submissions: 22,
        totalStudents: 22,
        graded: 15,
        points: 50,
        status: 'grading'
      }
    ],
    completed: [
      {
        id: 4,
        title: 'Newton\'s Laws Quiz',
        class: 'Physics 101',
        dueDate: '2024-03-15',
        submissions: 28,
        totalStudents: 28,
        graded: 28,
        avgGrade: 'B+',
        points: 25,
        status: 'completed'
      }
    ]
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Assignments" role="teacher" userName="Dr. Sarah Johnson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Assignments</p>
                      <p className="text-2xl font-bold text-blue-600">{assignments.active.length}</p>
                    </div>
                    <FileText className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending Grading</p>
                      <p className="text-2xl font-bold text-orange-600">7</p>
                    </div>
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                      <p className="text-2xl font-bold text-green-600">57</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
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
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="active" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="active">Active ({assignments.active.length})</TabsTrigger>
                  <TabsTrigger value="grading">Grading ({assignments.grading.length})</TabsTrigger>
                  <TabsTrigger value="completed">Completed ({assignments.completed.length})</TabsTrigger>
                </TabsList>
                <Button onClick={() => setShowCreateForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Assignment
                </Button>
              </div>

              <TabsContent value="active" className="space-y-4">
                {assignments.active.map((assignment) => (
                  <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{assignment.title}</CardTitle>
                          <CardDescription>{assignment.class} • {assignment.points} points</CardDescription>
                        </div>
                        <Badge variant="default">Active</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{assignment.submissions}</div>
                          <div className="text-sm text-gray-600">Submissions</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-600">{assignment.totalStudents - assignment.submissions}</div>
                          <div className="text-sm text-gray-600">Pending</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">
                            {Math.round((assignment.submissions / assignment.totalStudents) * 100)}%
                          </div>
                          <div className="text-sm text-gray-600">Completion</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>Due: {assignment.dueDate}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View Submissions
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="grading" className="space-y-4">
                {assignments.grading.map((assignment) => (
                  <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{assignment.title}</CardTitle>
                          <CardDescription>{assignment.class} • {assignment.points} points</CardDescription>
                        </div>
                        <Badge variant="secondary">Grading</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{assignment.graded}</div>
                          <div className="text-sm text-gray-600">Graded</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-orange-600">{assignment.submissions - assignment.graded}</div>
                          <div className="text-sm text-gray-600">To Grade</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">
                            {Math.round((assignment.graded / assignment.submissions) * 100)}%
                          </div>
                          <div className="text-sm text-gray-600">Progress</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          Due date passed: {assignment.dueDate}
                        </div>
                        <Button size="sm">
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Continue Grading
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="completed" className="space-y-4">
                {assignments.completed.map((assignment) => (
                  <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{assignment.title}</CardTitle>
                          <CardDescription>{assignment.class} • {assignment.points} points</CardDescription>
                        </div>
                        <Badge variant="outline">Completed</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{assignment.submissions}</div>
                          <div className="text-sm text-gray-600">Submissions</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">{assignment.avgGrade}</div>
                          <div className="text-sm text-gray-600">Avg Grade</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-600">100%</div>
                          <div className="text-sm text-gray-600">Completion</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          Completed: {assignment.dueDate}
                        </div>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View Results
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

            {/* Create Assignment Modal */}
            {showCreateForm && (
              <Card className="fixed inset-4 z-50 bg-white shadow-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Create New Assignment</CardTitle>
                    <Button variant="ghost" onClick={() => setShowCreateForm(false)}>×</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Assignment Title</label>
                      <Input placeholder="Enter assignment title" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Select Class</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="physics-101">Physics 101</SelectItem>
                          <SelectItem value="advanced-physics">Advanced Physics</SelectItem>
                          <SelectItem value="ap-physics">AP Physics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <Textarea placeholder="Assignment description and instructions" rows={4} />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Points</label>
                      <Input type="number" placeholder="100" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Due Date</label>
                      <Input type="date" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Due Time</label>
                      <Input type="time" />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                      Cancel
                    </Button>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Assignment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}