'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  UserCheck, 
  Users, 
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Save
} from 'lucide-react';

export default function TeacherAttendance() {
  const [selectedClass, setSelectedClass] = useState('physics-101');
  const [selectedDate, setSelectedDate] = useState('2024-03-21');

  const classes = [
    { id: 'physics-101', name: 'Physics 101', students: 28 },
    { id: 'advanced-physics', name: 'Advanced Physics', students: 22 },
    { id: 'physics-lab', name: 'Physics Lab', students: 15 },
    { id: 'ap-physics', name: 'AP Physics', students: 18 }
  ];

  const students = [
    { id: 1, name: 'Alice Johnson', rollNo: 'P101-001', present: true, late: false },
    { id: 2, name: 'Bob Smith', rollNo: 'P101-002', present: true, late: false },
    { id: 3, name: 'Carol Davis', rollNo: 'P101-003', present: false, late: false },
    { id: 4, name: 'David Wilson', rollNo: 'P101-004', present: true, late: true },
    { id: 5, name: 'Emma Brown', rollNo: 'P101-005', present: true, late: false },
    { id: 6, name: 'Frank Miller', rollNo: 'P101-006', present: true, late: false },
    { id: 7, name: 'Grace Lee', rollNo: 'P101-007', present: false, late: false },
    { id: 8, name: 'Henry Taylor', rollNo: 'P101-008', present: true, late: false },
    { id: 9, name: 'Ivy Chen', rollNo: 'P101-009', present: true, late: false },
    { id: 10, name: 'Jack Anderson', rollNo: 'P101-010', present: true, late: false }
  ];

  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = { present: student.present, late: student.late };
      return acc;
    }, {} as Record<number, { present: boolean; late: boolean }>)
  );

  const handleAttendanceChange = (studentId: number, field: 'present' | 'late', value: boolean) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [field]: value,
        ...(field === 'present' && !value ? { late: false } : {})
      }
    }));
  };

  const presentCount = Object.values(attendance).filter(a => a.present).length;
  const lateCount = Object.values(attendance).filter(a => a.late).length;
  const absentCount = students.length - presentCount;
  const attendancePercentage = Math.round((presentCount / students.length) * 100);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Attendance Management" role="teacher" userName="Dr. Sarah Johnson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="h-5 w-5 mr-2" />
                  Take Attendance
                </CardTitle>
                <CardDescription>Select class and date to mark attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-2 block">Select Class</label>
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {classes.map((class_) => (
                          <SelectItem key={class_.id} value={class_.id}>
                            {class_.name} ({class_.students} students)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <label className="text-sm font-medium mb-2 block">Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button>
                      <Save className="h-4 w-4 mr-2" />
                      Save Attendance
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Attendance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Present</p>
                      <p className="text-2xl font-bold text-green-900">{presentCount}</p>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-yellow-700">Late</p>
                      <p className="text-2xl font-bold text-yellow-900">{lateCount}</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-700">Absent</p>
                      <p className="text-2xl font-bold text-red-900">{absentCount}</p>
                    </div>
                    <XCircle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Attendance Rate</p>
                      <p className="text-2xl font-bold text-blue-900">{attendancePercentage}%</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Student List */}
            <Card>
              <CardHeader>
                <CardTitle>Student Attendance - {classes.find(c => c.id === selectedClass)?.name}</CardTitle>
                <CardDescription>Mark attendance for {selectedDate}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium">{student.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-sm text-gray-500">{student.rollNo}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`present-${student.id}`}
                            checked={attendance[student.id]?.present || false}
                            onCheckedChange={(checked) => 
                              handleAttendanceChange(student.id, 'present', checked as boolean)
                            }
                          />
                          <label htmlFor={`present-${student.id}`} className="text-sm font-medium">
                            Present
                          </label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`late-${student.id}`}
                            checked={attendance[student.id]?.late || false}
                            onCheckedChange={(checked) => 
                              handleAttendanceChange(student.id, 'late', checked as boolean)
                            }
                            disabled={!attendance[student.id]?.present}
                          />
                          <label htmlFor={`late-${student.id}`} className="text-sm font-medium">
                            Late
                          </label>
                        </div>

                        <Badge variant={
                          attendance[student.id]?.present 
                            ? attendance[student.id]?.late ? 'secondary' : 'default'
                            : 'destructive'
                        }>
                          {attendance[student.id]?.present 
                            ? attendance[student.id]?.late ? 'Late' : 'Present'
                            : 'Absent'
                          }
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}