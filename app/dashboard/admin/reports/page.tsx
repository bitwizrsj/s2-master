'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, 
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  Users,
  GraduationCap,
  DollarSignIcon,
  AlertTriangle,
  CheckCircle2,
  Brain,
  FileText
} from 'lucide-react';

export default function AdminReports() {
  const reportCategories = [
    {
      title: 'Academic Performance',
      description: 'Student grades, class averages, and performance trends',
      icon: GraduationCap,
      color: 'bg-blue-500',
      reports: ['Grade Distribution', 'Class Performance', 'Student Progress', 'Subject Analysis']
    },
    {
      title: 'Attendance Reports',
      description: 'Attendance rates, patterns, and absenteeism analysis',
      icon: Users,
      color: 'bg-green-500',
      reports: ['Daily Attendance', 'Monthly Trends', 'Chronic Absenteeism', 'Class-wise Attendance']
    },
    {
      title: 'Financial Reports',
      description: 'Fee collection, payment status, and financial analytics',
      icon: DollarSignIcon,
      color: 'bg-purple-500',
      reports: ['Fee Collection', 'Payment Methods', 'Outstanding Dues', 'Revenue Analysis']
    },
    {
      title: 'AI Insights',
      description: 'AI-generated predictions and recommendations',
      icon: Brain,
      color: 'bg-orange-500',
      reports: ['Dropout Risk Analysis', 'Performance Predictions', 'Resource Optimization', 'Trend Analysis']
    }
  ];

  const quickStats = {
    totalStudents: 1247,
    avgAttendance: 94.2,
    avgGrade: 'B+',
    feeCollection: 86,
    teacherSatisfaction: 92,
    parentEngagement: 78
  };

  const aiInsights = [
    {
      type: 'warning',
      title: 'Dropout Risk Alert',
      description: '12 students identified at high risk of dropping out',
      recommendation: 'Implement intervention programs for at-risk students',
      priority: 'high'
    },
    {
      type: 'success',
      title: 'Performance Improvement',
      description: 'Overall school performance improved by 5% this semester',
      recommendation: 'Continue current teaching methodologies',
      priority: 'medium'
    },
    {
      type: 'info',
      title: 'Resource Optimization',
      description: 'AI suggests reallocating 3 teachers to improve class efficiency',
      recommendation: 'Review teacher-to-student ratios in underperforming classes',
      priority: 'low'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Reports & Analytics" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Quick Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{quickStats.totalStudents}</div>
                    <div className="text-xs text-gray-600">Total Students</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{quickStats.avgAttendance}%</div>
                    <div className="text-xs text-gray-600">Avg Attendance</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{quickStats.avgGrade}</div>
                    <div className="text-xs text-gray-600">Avg Grade</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">{quickStats.feeCollection}%</div>
                    <div className="text-xs text-gray-600">Fee Collection</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-teal-600">{quickStats.teacherSatisfaction}%</div>
                    <div className="text-xs text-gray-600">Teacher Satisfaction</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-pink-600">{quickStats.parentEngagement}%</div>
                    <div className="text-xs text-gray-600">Parent Engagement</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Insights */}
            <Card className="ai-gradient text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Brain className="h-5 w-5 mr-2" />
                  AI-Generated School Insights
                </CardTitle>
                <CardDescription className="text-white/80">
                  Intelligent analysis and recommendations for school improvement
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
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-white">{insight.title}</h4>
                          <Badge variant={insight.priority === 'high' ? 'destructive' : 'secondary'}>
                            {insight.priority} priority
                          </Badge>
                        </div>
                        <p className="text-sm text-white/90 mb-2">{insight.description}</p>
                        <p className="text-xs text-white/70">💡 {insight.recommendation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Report Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {reportCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-full ${category.color}`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.title}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        {category.reports.map((report, reportIndex) => (
                          <Button key={reportIndex} variant="outline" size="sm" className="justify-start">
                            <FileText className="h-4 w-4 mr-2" />
                            {report}
                          </Button>
                        ))}
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" className="flex-1">
                          <BarChart3 className="h-4 w-4 mr-2" />
                          View Analytics
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Report Generation */}
            <Card>
              <CardHeader>
                <CardTitle>Custom Report Generator</CardTitle>
                <CardDescription>Generate custom reports with specific parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Report Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="academic">Academic Performance</SelectItem>
                        <SelectItem value="attendance">Attendance</SelectItem>
                        <SelectItem value="financial">Financial</SelectItem>
                        <SelectItem value="comprehensive">Comprehensive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Time Period</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select period" />
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
                    <label className="text-sm font-medium mb-2 block">Grade Level</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
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
                  
                  <div className="flex items-end">
                    <Button className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
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