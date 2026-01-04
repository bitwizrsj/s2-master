'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  Upload,
  Eye,
  Calendar
} from 'lucide-react';

export default function StudentAssignments() {
  const assignments = {
    pending: [
      {
        title: 'Photosynthesis Research Paper',
        subject: 'Biology',
        dueDate: '2024-03-25',
        dueTime: '11:59 PM',
        points: 100,
        description: 'Write a comprehensive research paper on photosynthesis process',
        priority: 'high'
      },
      {
        title: 'Quadratic Equations Problem Set',
        subject: 'Mathematics',
        dueDate: '2024-03-23',
        dueTime: '3:00 PM',
        points: 50,
        description: 'Solve problems 1-20 from Chapter 8',
        priority: 'medium'
      },
      {
        title: 'Shakespeare Essay',
        subject: 'English Literature',
        dueDate: '2024-03-28',
        dueTime: '11:59 PM',
        points: 75,
        description: 'Analyze themes in Romeo and Juliet',
        priority: 'low'
      }
    ],
    submitted: [
      {
        title: 'Chemical Reactions Lab Report',
        subject: 'Chemistry',
        submittedDate: '2024-03-18',
        points: 80,
        grade: 'A-',
        feedback: 'Excellent analysis and clear methodology'
      },
      {
        title: 'World War II Timeline',
        subject: 'History',
        submittedDate: '2024-03-15',
        points: 60,
        grade: 'B+',
        feedback: 'Good research, could use more detail on causes'
      }
    ],
    graded: [
      {
        title: 'Physics Motion Problems',
        subject: 'Physics',
        submittedDate: '2024-03-10',
        gradedDate: '2024-03-12',
        points: 90,
        earned: 85,
        grade: 'A-',
        feedback: 'Strong understanding of concepts, minor calculation errors'
      },
      {
        title: 'Poetry Analysis',
        subject: 'English Literature',
        submittedDate: '2024-03-08',
        gradedDate: '2024-03-11',
        points: 70,
        earned: 68,
        grade: 'B+',
        feedback: 'Good interpretation, work on structure'
      }
    ]
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Assignments" role="student" userName="Emma Wilson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <Tabs defaultValue="pending" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="pending" className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Pending ({assignments.pending.length})</span>
                </TabsTrigger>
                <TabsTrigger value="submitted" className="flex items-center space-x-2">
                  <Upload className="h-4 w-4" />
                  <span>Submitted ({assignments.submitted.length})</span>
                </TabsTrigger>
                <TabsTrigger value="graded" className="flex items-center space-x-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Graded ({assignments.graded.length})</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="pending" className="space-y-4">
                {assignments.pending.map((assignment, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <div>
                            <CardTitle className="text-lg">{assignment.title}</CardTitle>
                            <CardDescription>{assignment.subject} • {assignment.points} points</CardDescription>
                          </div>
                        </div>
                        <Badge variant={
                          assignment.priority === 'high' ? 'destructive' :
                          assignment.priority === 'medium' ? 'default' : 'secondary'
                        }>
                          {assignment.priority} priority
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700">{assignment.description}</p>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>Due: {assignment.dueDate} at {assignment.dueTime}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          {assignment.priority === 'high' && (
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                          )}
                          <span className={assignment.priority === 'high' ? 'text-red-600 font-medium' : 'text-gray-600'}>
                            {new Date(assignment.dueDate) < new Date() ? 'Overdue' : 
                             Math.ceil((new Date(assignment.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) + ' days left'}
                          </span>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button className="flex-1">
                          <Upload className="h-4 w-4 mr-2" />
                          Submit Assignment
                        </Button>
                        <Button variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="submitted" className="space-y-4">
                {assignments.submitted.map((assignment, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <div>
                            <CardTitle className="text-lg">{assignment.title}</CardTitle>
                            <CardDescription>{assignment.subject} • {assignment.points} points</CardDescription>
                          </div>
                        </div>
                        <Badge variant="secondary">Awaiting Grade</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="text-sm text-gray-600">
                          Submitted on {assignment.submittedDate}
                        </div>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          View Submission
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="graded" className="space-y-4">
                {assignments.graded.map((assignment, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <div>
                            <CardTitle className="text-lg">{assignment.title}</CardTitle>
                            <CardDescription>{assignment.subject}</CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{assignment.grade}</div>
                          <div className="text-sm text-gray-500">{assignment.earned}/{assignment.points} pts</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Teacher Feedback:</h4>
                        <p className="text-sm text-gray-700">{assignment.feedback}</p>
                      </div>
                      
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Submitted: {assignment.submittedDate}</span>
                        <span>Graded: {assignment.gradedDate}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}