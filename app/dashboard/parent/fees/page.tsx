'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CreditCard, 
  DollarSignIcon,
  Download,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Receipt
} from 'lucide-react';

export default function ParentFees() {
  const feeStructure = [
    { category: 'Tuition Fee', amount: 2500, dueDate: '2024-04-01', status: 'pending' },
    { category: 'Lab Fee', amount: 300, dueDate: '2024-04-01', status: 'pending' },
    { category: 'Library Fee', amount: 150, dueDate: '2024-04-01', status: 'paid' },
    { category: 'Sports Fee', amount: 200, dueDate: '2024-04-01', status: 'paid' },
    { category: 'Technology Fee', amount: 250, dueDate: '2024-04-01', status: 'pending' }
  ];

  const paymentHistory = [
    {
      id: 'PAY-2024-001',
      date: '2024-03-01',
      amount: 2850,
      method: 'Credit Card',
      status: 'completed',
      description: 'March 2024 Fees'
    },
    {
      id: 'PAY-2024-002',
      date: '2024-02-01',
      amount: 2850,
      method: 'Bank Transfer',
      status: 'completed',
      description: 'February 2024 Fees'
    },
    {
      id: 'PAY-2024-003',
      date: '2024-01-01',
      amount: 2850,
      method: 'Credit Card',
      status: 'completed',
      description: 'January 2024 Fees'
    }
  ];

  const totalPending = feeStructure
    .filter(fee => fee.status === 'pending')
    .reduce((sum, fee) => sum + fee.amount, 0);

  const totalPaid = feeStructure
    .filter(fee => fee.status === 'paid')
    .reduce((sum, fee) => sum + fee.amount, 0);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="parent" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Fee Management" role="parent" userName="Michael Thompson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Fee Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-700">Pending Amount</p>
                      <p className="text-2xl font-bold text-red-900">${totalPending.toLocaleString()}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Paid Amount</p>
                      <p className="text-2xl font-bold text-green-900">${totalPaid.toLocaleString()}</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Total Annual</p>
                      <p className="text-2xl font-bold text-blue-900">$34,200</p>
                    </div>
                    <DollarSignIcon className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-700">Next Due</p>
                      <p className="text-2xl font-bold text-purple-900">Apr 1</p>
                    </div>
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="current" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="current">Current Fees</TabsTrigger>
                <TabsTrigger value="history">Payment History</TabsTrigger>
                <TabsTrigger value="receipts">Receipts</TabsTrigger>
              </TabsList>

              <TabsContent value="current" className="space-y-6">
                {/* Current Fee Structure */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>April 2024 Fee Structure</CardTitle>
                      <Button>
                        <CreditCard className="h-4 w-4 mr-2" />
                        Pay Now (${totalPending.toLocaleString()})
                      </Button>
                    </div>
                    <CardDescription>Emma Thompson - Grade 10</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {feeStructure.map((fee, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <div className="font-medium">{fee.category}</div>
                            <div className="text-sm text-gray-500">Due: {fee.dueDate}</div>
                          </div>
                          <div className="text-right flex items-center space-x-3">
                            <div className="text-lg font-bold">${fee.amount.toLocaleString()}</div>
                            <Badge variant={fee.status === 'paid' ? 'default' : 'destructive'}>
                              {fee.status === 'paid' ? 'Paid' : 'Pending'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                      
                      <div className="border-t pt-4">
                        <div className="flex items-center justify-between text-lg font-bold">
                          <span>Total Amount</span>
                          <span>${feeStructure.reduce((sum, fee) => sum + fee.amount, 0).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Methods */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Choose your preferred payment method</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="h-6 w-6 text-blue-600" />
                          <div>
                            <div className="font-medium">Credit/Debit Card</div>
                            <div className="text-sm text-gray-500">Instant payment</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <DollarSignIcon className="h-6 w-6 text-green-600" />
                          <div>
                            <div className="font-medium">Bank Transfer</div>
                            <div className="text-sm text-gray-500">1-2 business days</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <Receipt className="h-6 w-6 text-purple-600" />
                          <div>
                            <div className="font-medium">Digital Wallet</div>
                            <div className="text-sm text-gray-500">PayPal, Apple Pay</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>All previous payments and transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {paymentHistory.map((payment) => (
                        <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-green-100 rounded-full">
                              <CheckCircle2 className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <div className="font-medium">{payment.description}</div>
                              <div className="text-sm text-gray-500">
                                {payment.date} • {payment.method} • {payment.id}
                              </div>
                            </div>
                          </div>
                          <div className="text-right flex items-center space-x-3">
                            <div className="text-lg font-bold text-green-600">
                              ${payment.amount.toLocaleString()}
                            </div>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Receipt
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="receipts" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Download Receipts</CardTitle>
                    <CardDescription>Access all your payment receipts and invoices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {paymentHistory.map((payment) => (
                        <div key={payment.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-medium">{payment.description}</div>
                              <div className="text-sm text-gray-500">{payment.date}</div>
                            </div>
                            <Badge variant="default">Paid</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-lg font-bold">${payment.amount.toLocaleString()}</div>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
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