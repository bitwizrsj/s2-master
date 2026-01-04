'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  TrendingUp, 
  TrendingDown,
  Award,
  BarChart3,
  Calendar,
  Target,
  Brain,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function ParentProgress() {
  const subjects = [
    {
      name: 'Mathematics',
      currentGrade: 'A-',
      percentage: 92,
      trend: '+5%',
      trendDirection: 'up',
      teacher: 'Dr. Smith',
      lastAssignment: 'Calculus Problems',
      lastGrade: 'A',
      attendance: 96
    },
    {
      name: 'Physics',
      currentGrade: 'B+',
      percentage: 88,
      trend: '+2%',
      trendDirection: 'up',
      teacher: 'Dr. Johnson',
      lastAssignment: 'Motion Lab',
      lastGrade: 'B+',
      attendance: 94
    },
    {
      name: 'English Literature',
      currentGrade: 'B',
      percentage: 85,
      trend: '-1%',
      trendDirection: 'down',
      teacher: 'Ms. Davis',
      lastAssignment: 'Poetry Analysis',
      lastGrade: 'B-',
      attendance: 98
    },
    {
      name: 'Chemistry',
      currentGrade: 'A',
      percentage: 94,
      trend: '+8%',
      trendDirection: 'up',
      teacher: 'Dr. Wilson',
      lastAssignment: 'Chemical Bonds',
      lastGrade: 'A+',
      attendance: 92
    },
    {
      name: 'History',
      currentGrade: 'A-',
      percentage: 90,
      trend: '+3%',
      trendDirection: 'up',
      teacher: 'Mr. Brown',
      lastAssignment: 'WWII Timeline',
      lastGrade: 'A',
      attendance: 100
    },
    {
      name: 'Biology',
      currentGrade: 'B+',
      percentage: 87,
      trend: '+4%',
      trendDirection: 'up',
      teacher: 'Dr. Garcia',
      lastAssignment: 'Cell Structure',
      lastGrade: 'B+',
      attendance: 89
    }
  ];

  const aiInsights = [
    {
      type: 'success',
      title: 'Excellent Progress in Chemistry',
      description: 'Emma has shown remarkable improvement in Chemistry with an 8% increase this month.',
      recommendation: 'Continue encouraging her interest in science subjects.'
    },
    {
      type: 'warning',
      title: 'English Literature Needs Attention',
      description: 'There\'s been a slight decline in English Literature performance.',
      recommendation: 'Consider additional reading practice or tutoring support.'
    },
    {
      type: 'info',
      title: 'Strong Overall Performance',
      description: 'Emma maintains excellent attendance and is performing above class average.',
      recommendation: 'Keep up the current study routine and habits.'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="parent" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Child Progress" role="parent" userName="Michael Thompson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Child Overview */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Emma Thompson</CardTitle>
                    <CardDescription className="text-lg">Grade 10 • Student ID: ST2024001</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">3.8</div>
                    <div className="text-sm text-gray-600">Current GPA</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600">94%</div>
                    <div className="text-sm text-gray-600">Overall Attendance</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">89%</div>
                    <div className="text-sm text-gray-600">Assignment Completion</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">12th</div>
                    <div className="text-sm text-gray-600">Class Rank</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">A-</div>
                    <div className="text-sm text-gray-600">Latest Grade</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="ai-gradient text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Brain className="h-5 w-5 mr-2" />
                  AI-Generated Insights
                </CardTitle>
                <CardDescription className="text-white/80">
                  Personalized analysis of your child's academic progress
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="p-4 bg-white/10 rounded-lg">
                    <div className="flex items-start space-x-3">
                      {insight.type === 'success' && <CheckCircle2 className="h-5 w-5 text-green-300 mt-1" />}
                      {insight.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-300 mt-1" />}
                      {insight.type === 'info' && <BarChart3 className="h-5 w-5 text-blue-300 mt-1" />}
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{insight.title}</h4>
                        <p className="text-sm text-white/90 mt-1">{insight.description}</p>
                        <p className="text-xs text-white/70 mt-2">💡 {insight.recommendation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Filter Controls */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Time Period</label>
                    <Select defaultValue="semester">
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
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
                        {subjects.map((subject) => (
                          <SelectItem key={subject.name} value={subject.name.toLowerCase()}>
                            {subject.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subject Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {subjects.map((subject, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{subject.name}</CardTitle>
                        <CardDescription>Teacher: {subject.teacher}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{subject.currentGrade}</div>
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
                        <span>Current Performance</span>
                        <span>{subject.percentage}%</span>
                      </div>
                      <Progress value={subject.percentage} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600">Last Assignment</div>
                        <div className="font-medium">{subject.lastAssignment}</div>
                        <Badge variant="outline" className="mt-1">{subject.lastGrade}</Badge>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600">Attendance</div>
                        <div className="font-medium">{subject.attendance}%</div>
                        <Badge variant={subject.attendance >= 95 ? 'default' : subject.attendance >= 90 ? 'secondary' : 'destructive'} className="mt-1">
                          {subject.attendance >= 95 ? 'Excellent' : subject.attendance >= 90 ? 'Good' : 'Needs Improvement'}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Performance Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Performance Summary
                </CardTitle>
                <CardDescription>Overall academic performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">A-</div>
                    <div className="text-sm text-gray-600">Most Common Grade</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">94%</div>
                    <div className="text-sm text-gray-600">Highest Score</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">Chemistry</div>
                    <div className="text-sm text-gray-600">Best Subject</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">+4.2%</div>
                    <div className="text-sm text-gray-600">Monthly Improvement</div>
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