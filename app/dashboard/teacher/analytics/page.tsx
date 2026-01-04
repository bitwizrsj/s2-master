'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users,
  Award,
  AlertTriangle,
  CheckCircle2,
  Brain
} from 'lucide-react';

export default function TeacherAnalytics() {
  const classPerformance = [
    {
      name: 'Physics 101',
      students: 28,
      avgGrade: 84,
      trend: '+5%',
      trendDirection: 'up',
      attendance: 96,
      assignments: 12,
      topPerformers: 8,
      struggling: 3
    },
    {
      name: 'Advanced Physics',
      students: 22,
      avgGrade: 91,
      trend: '+7%',
      trendDirection: 'up',
      attendance: 94,
      assignments: 10,
      topPerformers: 12,
      struggling: 1
    },
    {
      name: 'Physics Lab',
      students: 15,
      avgGrade: 88,
      trend: '+1%',
      trendDirection: 'up',
      attendance: 98,
      assignments: 8,
      topPerformers: 6,
      struggling: 2
    },
    {
      name: 'AP Physics',
      students: 18,
      avgGrade: 93,
      trend: '+5%',
      trendDirection: 'up',
      attendance: 92,
      assignments: 15,
      topPerformers: 10,
      struggling: 1
    }
  ];

  const aiInsights = [
    {
      type: 'success',
      title: 'Excellent Progress',
      description: 'Advanced Physics class shows 7% improvement this month',
      action: 'Continue current teaching methods'
    },
    {
      type: 'warning',
      title: 'Attention Needed',
      description: '3 students in Physics 101 are falling behind',
      action: 'Schedule individual help sessions'
    },
    {
      type: 'info',
      title: 'Optimization Opportunity',
      description: 'Lab sessions could benefit from more hands-on activities',
      action: 'Consider adding practical experiments'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Analytics & Insights" role="teacher" userName="Dr. Sarah Johnson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Filter Controls */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Time Period</label>
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
                    <label className="text-sm font-medium mb-2 block">Class</label>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Classes</SelectItem>
                        <SelectItem value="physics-101">Physics 101</SelectItem>
                        <SelectItem value="advanced-physics">Advanced Physics</SelectItem>
                        <SelectItem value="physics-lab">Physics Lab</SelectItem>
                        <SelectItem value="ap-physics">AP Physics</SelectItem>
                      </SelectContent>
                    </Select>
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
                  Intelligent analysis of your teaching performance
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
                        <p className="text-xs text-white/70 mt-2">Recommendation: {insight.action}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Class Performance Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {classPerformance.map((class_, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{class_.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        {class_.trendDirection === 'up' ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                        <span className={`text-sm font-medium ${
                          class_.trendDirection === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {class_.trend}
                        </span>
                      </div>
                    </div>
                    <CardDescription>{class_.students} students enrolled</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{class_.avgGrade}%</div>
                        <div className="text-sm text-gray-600">Average Grade</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{class_.attendance}%</div>
                        <div className="text-sm text-gray-600">Attendance</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Top Performers</span>
                        <Badge variant="default">{class_.topPerformers} students</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Need Support</span>
                        <Badge variant={class_.struggling > 2 ? 'destructive' : 'secondary'}>
                          {class_.struggling} students
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Assignments Given</span>
                        <span className="text-sm font-medium">{class_.assignments}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Class Progress</span>
                        <span>{class_.avgGrade}%</span>
                      </div>
                      <Progress value={class_.avgGrade} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Detailed Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">87%</div>
                    <div className="text-sm text-gray-600">Overall Class Average</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-gray-600">Assignment Completion</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">36</div>
                    <div className="text-sm text-gray-600">Top Performers</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">7</div>
                    <div className="text-sm text-gray-600">Need Support</div>
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