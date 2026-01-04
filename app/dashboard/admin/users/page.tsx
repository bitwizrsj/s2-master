'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  Search,
  Plus,
  Edit,
  Trash2,
  UserCheck,
  GraduationCap,
  User,
  Shield,
  Filter
} from 'lucide-react';

export default function AdminUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const users = {
    students: [
      { id: 1, name: 'Emma Wilson', email: 'emma.wilson@school.edu', grade: 'Grade 10', status: 'active', lastLogin: '2 hours ago' },
      { id: 2, name: 'Alex Chen', email: 'alex.chen@school.edu', grade: 'Grade 11', status: 'active', lastLogin: '1 day ago' },
      { id: 3, name: 'Sarah Johnson', email: 'sarah.johnson@school.edu', grade: 'Grade 9', status: 'inactive', lastLogin: '1 week ago' },
      { id: 4, name: 'Michael Brown', email: 'michael.brown@school.edu', grade: 'Grade 12', status: 'active', lastLogin: '3 hours ago' }
    ],
    teachers: [
      { id: 1, name: 'Dr. Smith', email: 'dr.smith@school.edu', subject: 'Mathematics', status: 'active', lastLogin: '1 hour ago' },
      { id: 2, name: 'Dr. Johnson', email: 'dr.johnson@school.edu', subject: 'Physics', status: 'active', lastLogin: '30 minutes ago' },
      { id: 3, name: 'Ms. Davis', email: 'ms.davis@school.edu', subject: 'English Literature', status: 'active', lastLogin: '2 hours ago' },
      { id: 4, name: 'Dr. Wilson', email: 'dr.wilson@school.edu', subject: 'Chemistry', status: 'active', lastLogin: '4 hours ago' }
    ],
    parents: [
      { id: 1, name: 'Michael Thompson', email: 'michael.thompson@email.com', child: 'Emma Thompson', status: 'active', lastLogin: '1 day ago' },
      { id: 2, name: 'Lisa Chen', email: 'lisa.chen@email.com', child: 'Alex Chen', status: 'active', lastLogin: '2 days ago' },
      { id: 3, name: 'Robert Johnson', email: 'robert.johnson@email.com', child: 'Sarah Johnson', status: 'inactive', lastLogin: '2 weeks ago' }
    ],
    admins: [
      { id: 1, name: 'Administrator', email: 'admin@school.edu', role: 'Super Admin', status: 'active', lastLogin: '30 minutes ago' },
      { id: 2, name: 'John Doe', email: 'john.doe@school.edu', role: 'Admin', status: 'active', lastLogin: '2 hours ago' }
    ]
  };

  const stats = {
    students: { total: 1247, active: 1198, inactive: 49 },
    teachers: { total: 87, active: 85, inactive: 2 },
    parents: { total: 892, active: 856, inactive: 36 },
    admins: { total: 5, active: 5, inactive: 0 }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="admin" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="User Management" role="admin" userName="Administrator" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* User Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Students</p>
                      <p className="text-2xl font-bold text-blue-900">{stats.students.total}</p>
                      <p className="text-xs text-blue-600">{stats.students.active} active</p>
                    </div>
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Teachers</p>
                      <p className="text-2xl font-bold text-green-900">{stats.teachers.total}</p>
                      <p className="text-xs text-green-600">{stats.teachers.active} active</p>
                    </div>
                    <UserCheck className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-700">Parents</p>
                      <p className="text-2xl font-bold text-purple-900">{stats.parents.total}</p>
                      <p className="text-xs text-purple-600">{stats.parents.active} active</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-700">Admins</p>
                      <p className="text-2xl font-bold text-orange-900">{stats.admins.total}</p>
                      <p className="text-xs text-orange-600">{stats.admins.active} active</p>
                    </div>
                    <Shield className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="students" className="space-y-6">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="students">Students</TabsTrigger>
                  <TabsTrigger value="teachers">Teachers</TabsTrigger>
                  <TabsTrigger value="parents">Parents</TabsTrigger>
                  <TabsTrigger value="admins">Admins</TabsTrigger>
                </TabsList>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>

              {/* Search and Filter */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Select value={selectedRole} onValueChange={setSelectedRole}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <TabsContent value="students" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Management</CardTitle>
                    <CardDescription>Manage student accounts and information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {users.students.map((student) => (
                        <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarFallback>
                                <GraduationCap className="h-5 w-5" />
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{student.name}</div>
                              <div className="text-sm text-gray-500">{student.email}</div>
                              <div className="text-sm text-gray-500">{student.grade}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="text-right">
                              <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                                {student.status}
                              </Badge>
                              <div className="text-xs text-gray-500 mt-1">{student.lastLogin}</div>
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

              <TabsContent value="teachers" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Teacher Management</CardTitle>
                    <CardDescription>Manage teacher accounts and assignments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {users.teachers.map((teacher) => (
                        <div key={teacher.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarFallback>
                                <UserCheck className="h-5 w-5" />
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{teacher.name}</div>
                              <div className="text-sm text-gray-500">{teacher.email}</div>
                              <div className="text-sm text-gray-500">{teacher.subject}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="text-right">
                              <Badge variant={teacher.status === 'active' ? 'default' : 'secondary'}>
                                {teacher.status}
                              </Badge>
                              <div className="text-xs text-gray-500 mt-1">{teacher.lastLogin}</div>
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

              <TabsContent value="parents" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Parent Management</CardTitle>
                    <CardDescription>Manage parent accounts and access</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {users.parents.map((parent) => (
                        <div key={parent.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarFallback>
                                <User className="h-5 w-5" />
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{parent.name}</div>
                              <div className="text-sm text-gray-500">{parent.email}</div>
                              <div className="text-sm text-gray-500">Parent of {parent.child}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="text-right">
                              <Badge variant={parent.status === 'active' ? 'default' : 'secondary'}>
                                {parent.status}
                              </Badge>
                              <div className="text-xs text-gray-500 mt-1">{parent.lastLogin}</div>
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

              <TabsContent value="admins" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Administrator Management</CardTitle>
                    <CardDescription>Manage admin accounts and permissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {users.admins.map((admin) => (
                        <div key={admin.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarFallback>
                                <Shield className="h-5 w-5" />
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{admin.name}</div>
                              <div className="text-sm text-gray-500">{admin.email}</div>
                              <div className="text-sm text-gray-500">{admin.role}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="text-right">
                              <Badge variant={admin.status === 'active' ? 'default' : 'secondary'}>
                                {admin.status}
                              </Badge>
                              <div className="text-xs text-gray-500 mt-1">{admin.lastLogin}</div>
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
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}