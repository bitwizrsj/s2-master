'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {  
  TrendingUp,
  Users,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Download,
  Plus,
  CreditCard,
  Edit,
  Trash2,
  DollarSignIcon
} from 'lucide-react';

export default function AdminFees() {
  const feeStats = {
    totalCollected: 145000,
    totalPending: 23000,
    totalOverdue: 5000,
    collectionRate: 86,
    onTimePayments: 94,
    latePayments: 4,
    defaulters: 2
  };

  const feeStructure = [
    { category: 'Tuition Fee', amount: 2500, frequency: 'Monthly', students: 1247 },
    { category: 'Lab Fee', amount: 300, frequency: 'Semester', students: 856 },
    { category: 'Library Fee', amount: 150, frequency: 'Annual', students: 1247 },
    { category: 'Sports Fee', amount: 200, frequency: 'Annual', students: 623 },
    { category: 'Technology Fee', amount: 250, frequency: 'Semester', students: 1247 },
    { category: 'Transportation', amount: 180, frequency: 'Monthly', students: 445 }
  ];

  const recentPayments = [
    { id: 'PAY-001', student: 'Emma Wilson', amount: 2850, date: '2024-03-21', method: 'Credit Card', status: 'completed' },
    { id: 'PAY-002', student: 'Alex Chen', amount: 2850, date: '2024-03-21', method: 'Bank Transfer', status: 'completed' },
    { id: 'PAY-003', student: 'Sarah Johnson', amount: 2850, date: '2024-03-20', method: 'Digital Wallet', status: 'completed' },
    { id: 'PAY-004', student: 'Michael Brown', amount: 2850, date: '2024-03-20', method: 'Credit Card', status: 'pending' },
    { id: 'PAY-005', student: 'Lisa Davis', amount: 2850, date: '2024-03-19', method: 'Bank Transfer', status: 'failed' }
  ];

  const overduePayments = [
    { student: 'John Smith', amount: 2850, daysOverdue: 15, grade: 'Grade 10', contact: 'john.smith@email.com' },
    { student: 'Mary Johnson', amount: 1200, daysOverdue: 8, grade: 'Grade 9', contact: 'mary.johnson@email.com' },
    { student: 'David Wilson', amount: 950, daysOverdue: 22, grade: 'Grade 11', contact: 'david.wilson@email.com' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Fee Management" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Fee Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Collected</p>
                      <p className="text-2xl font-bold text-green-900">${feeStats.totalCollected.toLocaleString()}</p>
                      <p className="text-xs text-green-600">This semester</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-yellow-700">Pending</p>
                      <p className="text-2xl font-bold text-yellow-900">${feeStats.totalPending.toLocaleString()}</p>
                      <p className="text-xs text-yellow-600">Due this month</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-700">Overdue</p>
                      <p className="text-2xl font-bold text-red-900">${feeStats.totalOverdue.toLocaleString()}</p>
                      <p className="text-xs text-red-600">Requires attention</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Collection Rate</p>
                      <p className="text-2xl font-bold text-blue-900">{feeStats.collectionRate}%</p>
                      <p className="text-xs text-blue-600">+2% vs last month</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="structure">Fee Structure</TabsTrigger>
                <TabsTrigger value="payments">Recent Payments</TabsTrigger>
                <TabsTrigger value="overdue">Overdue</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Collection Progress */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Collection Progress
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>On-time Payments</span>
                          <span className="text-green-600">{feeStats.onTimePayments}%</span>
                        </div>
                        <Progress value={feeStats.onTimePayments} className="h-2" />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Late Payments</span>
                          <span className="text-yellow-600">{feeStats.latePayments}%</span>
                        </div>
                        <Progress value={feeStats.latePayments} className="h-2" />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Defaulters</span>
                          <span className="text-red-600">{feeStats.defaulters}%</span>
                        </div>
                        <Progress value={feeStats.defaulters} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Methods */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Methods Distribution</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <CreditCard className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-lg font-bold text-blue-600">65%</div>
                          <div className="text-sm text-gray-600">Credit/Debit Cards</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <DollarSignIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                          <div className="text-lg font-bold text-green-600">25%</div>
                          <div className="text-sm text-gray-600">Bank Transfer</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <Users className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                          <div className="text-lg font-bold text-purple-600">8%</div>
                          <div className="text-sm text-gray-600">Digital Wallet</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Calendar className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                          <div className="text-lg font-bold text-gray-600">2%</div>
                          <div className="text-sm text-gray-600">Cash</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="structure" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Fee Structure Management</CardTitle>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Fee Category
                      </Button>
                    </div>
                    <CardDescription>Manage school fee categories and amounts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {feeStructure.map((fee, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div>
                            <div className="font-medium">{fee.category}</div>
                            <div className="text-sm text-gray-500">{fee.frequency} • {fee.students} students enrolled</div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <div className="text-lg font-bold">${fee.amount.toLocaleString()}</div>
                              <div className="text-sm text-gray-500">per {fee.frequency.toLowerCase()}</div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payments" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recent Payments</CardTitle>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export Report
                      </Button>
                    </div>
                    <CardDescription>Latest payment transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentPayments.map((payment) => (
                        <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-gray-100 rounded-full">
                              {payment.status === 'completed' && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                              {payment.status === 'pending' && <Clock className="h-5 w-5 text-yellow-600" />}
                              {payment.status === 'failed' && <AlertTriangle className="h-5 w-5 text-red-600" />}
                            </div>
                            <div>
                              <div className="font-medium">{payment.student}</div>
                              <div className="text-sm text-gray-500">{payment.id} • {payment.method}</div>
                              <div className="text-sm text-gray-500">{payment.date}</div>
                            </div>
                          </div>
                          <div className="text-right flex items-center space-x-3">
                            <div>
                              <div className="text-lg font-bold">${payment.amount.toLocaleString()}</div>
                              <Badge variant={
                                payment.status === 'completed' ? 'default' :
                                payment.status === 'pending' ? 'secondary' : 'destructive'
                              }>
                                {payment.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="overdue" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                        Overdue Payments
                      </CardTitle>
                      <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Send Reminders
                      </Button>
                    </div>
                    <CardDescription>Students with outstanding fee payments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {overduePayments.map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-red-100 rounded-full">
                              <AlertTriangle className="h-5 w-5 text-red-600" />
                            </div>
                            <div>
                              <div className="font-medium">{payment.student}</div>
                              <div className="text-sm text-gray-500">{payment.grade} • {payment.contact}</div>
                              <div className="text-sm text-red-600 font-medium">{payment.daysOverdue} days overdue</div>
                            </div>
                          </div>
                          <div className="text-right flex items-center space-x-3">
                            <div>
                              <div className="text-lg font-bold text-red-600">${payment.amount.toLocaleString()}</div>
                              <Badge variant="destructive">Overdue</Badge>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                Send Reminder
                              </Button>
                              <Button size="sm">
                                Contact Parent
                              </Button>
                            </div>
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