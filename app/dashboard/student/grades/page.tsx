'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  Target
} from 'lucide-react';

export default function StudentGrades() {
  const subjects = [
    {
      name: 'Mathematics',
      currentGrade: 'A-',
      percentage: 92,
      trend: '+5%',
      trendDirection: 'up',
      assignments: [
        { name: 'Algebra Quiz', grade: 'A', points: '48/50' },
        { name: 'Geometry Test', grade: 'A-', points: '87/100' },
        { name: 'Calculus Assignment', grade: 'A+', points: '95/100' }
      ]
    },
    {
      name: 'Physics',
      currentGrade: 'B+',
      percentage: 88,
      trend: '+2%',
      trendDirection: 'up',
      assignments: [
        { name: 'Motion Lab', grade: 'A-', points: '42/50' },
        { name: 'Forces Quiz', grade: 'B+', points: '83/100' },
        { name: 'Energy Project', grade: 'A', points: '90/100' }
      ]
    },
    {
      name: 'English Literature',
      currentGrade: 'B',
      percentage: 85,
      trend: '-1%',
      trendDirection: 'down',
      assignments: [
        { name: 'Poetry Analysis', grade: 'B+', points: '68/70' },
        { name: 'Essay Writing', grade: 'B', points: '80/100' },
        { name: 'Reading Comprehension', grade: 'B-', points: '75/90' }
      ]
    },
    {
      name: 'Chemistry',
      currentGrade: 'A',
      percentage: 94,
      trend: '+8%',
      trendDirection: 'up',
      assignments: [
        { name: 'Periodic Table Quiz', grade: 'A+', points: '98/100' },
        { name: 'Lab Report', grade: 'A', points: '85/90' },
        { name: 'Chemical Bonds Test', grade: 'A', points: '92/100' }
      ]
    },
    {
      name: 'History',
      currentGrade: 'A-',
      percentage: 90,
      trend: '+3%',
      trendDirection: 'up',
      assignments: [
        { name: 'WWII Timeline', grade: 'A', points: '88/90' },
        { name: 'Cold War Essay', grade: 'A-', points: '85/100' },
        { name: 'Ancient Rome Quiz', grade: 'A+', points: '95/100' }
      ]
    }
  ];

  const overallGPA = 3.8;
  const semesterGPA = 3.9;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Grades & Performance" role="student" userName="Emma Wilson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* GPA Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Overall GPA</p>
                      <p className="text-3xl font-bold text-blue-900">{overallGPA}</p>
                      <p className="text-sm text-blue-600">Cumulative</p>
                    </div>
                    <div className="p-3 bg-blue-200 rounded-full">
                      <Award className="h-8 w-8 text-blue-700" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Semester GPA</p>
                      <p className="text-3xl font-bold text-green-900">{semesterGPA}</p>
                      <p className="text-sm text-green-600">Current Term</p>
                    </div>
                    <div className="p-3 bg-green-200 rounded-full">
                      <TrendingUp className="h-8 w-8 text-green-700" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-700">Class Rank</p>
                      <p className="text-3xl font-bold text-purple-900">12th</p>
                      <p className="text-sm text-purple-600">of 156 students</p>
                    </div>
                    <div className="p-3 bg-purple-200 rounded-full">
                      <Target className="h-8 w-8 text-purple-700" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Subject Grades */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {subjects.map((subject, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{subject.name}</CardTitle>
                        <CardDescription>Current Grade: {subject.currentGrade}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{subject.percentage}%</div>
                        <div className={`flex items-center text-sm ${
                          subject.trendDirection === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {subject.trendDirection === 'up' ? (
                            <TrendingUp className="h-4 w-4 mr-1" />
                          ) : (
                            <TrendingDown className="h-4 w-4 mr-1" />
                          )}
                          {subject.trend}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{subject.percentage}%</span>
                      </div>
                      <Progress value={subject.percentage} className="h-2" />
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Recent Assignments:</h4>
                      {subject.assignments.map((assignment, assignmentIndex) => (
                        <div key={assignmentIndex} className="flex items-center justify-between p-2 rounded border">
                          <div>
                            <div className="font-medium text-sm">{assignment.name}</div>
                            <div className="text-xs text-gray-500">{assignment.points}</div>
                          </div>
                          <Badge variant={
                            assignment.grade.startsWith('A') ? 'default' :
                            assignment.grade.startsWith('B') ? 'secondary' : 'destructive'
                          }>
                            {assignment.grade}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Performance Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Performance Analytics
                </CardTitle>
                <CardDescription>Your academic progress over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">A-</div>
                    <div className="text-sm text-gray-600">Most Common Grade</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">94%</div>
                    <div className="text-sm text-gray-600">Highest Score</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">Chemistry</div>
                    <div className="text-sm text-gray-600">Best Subject</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">+4.2%</div>
                    <div className="text-sm text-gray-600">Improvement Rate</div>
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