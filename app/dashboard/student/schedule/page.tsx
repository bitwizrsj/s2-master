'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users,
  Bell,
  Video,
  BookOpen
} from 'lucide-react';

export default function StudentSchedule() {
  const weeklySchedule = {
    Monday: [
      { time: '9:00 AM', subject: 'Mathematics', teacher: 'Dr. Smith', room: 'Room 101', type: 'lecture' },
      { time: '10:30 AM', subject: 'Physics', teacher: 'Dr. Johnson', room: 'Lab B', type: 'lab' },
      { time: '1:00 PM', subject: 'English Literature', teacher: 'Ms. Davis', room: 'Room 205', type: 'discussion' },
      { time: '2:30 PM', subject: 'Chemistry', teacher: 'Dr. Wilson', room: 'Lab A', type: 'lab' }
    ],
    Tuesday: [
      { time: '9:00 AM', subject: 'History', teacher: 'Mr. Brown', room: 'Room 301', type: 'lecture' },
      { time: '10:30 AM', subject: 'Biology', teacher: 'Dr. Garcia', room: 'Lab C', type: 'lab' },
      { time: '1:00 PM', subject: 'Mathematics', teacher: 'Dr. Smith', room: 'Room 101', type: 'practice' },
      { time: '2:30 PM', subject: 'Physics', teacher: 'Dr. Johnson', room: 'Room 108', type: 'lecture' }
    ],
    Wednesday: [
      { time: '9:00 AM', subject: 'Chemistry', teacher: 'Dr. Wilson', room: 'Lab A', type: 'lecture' },
      { time: '10:30 AM', subject: 'English Literature', teacher: 'Ms. Davis', room: 'Room 205', type: 'workshop' },
      { time: '1:00 PM', subject: 'Biology', teacher: 'Dr. Garcia', room: 'Lab C', type: 'lecture' },
      { time: '2:30 PM', subject: 'History', teacher: 'Mr. Brown', room: 'Room 301', type: 'seminar' }
    ],
    Thursday: [
      { time: '9:00 AM', subject: 'Physics', teacher: 'Dr. Johnson', room: 'Lab B', type: 'lab' },
      { time: '10:30 AM', subject: 'Mathematics', teacher: 'Dr. Smith', room: 'Room 101', type: 'test' },
      { time: '1:00 PM', subject: 'Chemistry', teacher: 'Dr. Wilson', room: 'Lab A', type: 'lab' },
      { time: '2:30 PM', subject: 'English Literature', teacher: 'Ms. Davis', room: 'Room 205', type: 'lecture' }
    ],
    Friday: [
      { time: '9:00 AM', subject: 'Biology', teacher: 'Dr. Garcia', room: 'Lab C', type: 'test' },
      { time: '10:30 AM', subject: 'History', teacher: 'Mr. Brown', room: 'Room 301', type: 'presentation' },
      { time: '1:00 PM', subject: 'Study Hall', teacher: 'Various', room: 'Library', type: 'study' }
    ]
  };

  const upcomingEvents = [
    { title: 'Mathematics Exam', date: '2024-03-25', time: '9:00 AM', type: 'exam' },
    { title: 'Science Fair', date: '2024-03-28', time: '10:00 AM', type: 'event' },
    { title: 'Parent-Teacher Conference', date: '2024-04-02', time: '2:00 PM', type: 'meeting' },
    { title: 'Spring Break', date: '2024-04-08', time: 'All Week', type: 'holiday' }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lecture': return 'bg-blue-100 text-blue-800';
      case 'lab': return 'bg-green-100 text-green-800';
      case 'test': return 'bg-red-100 text-red-800';
      case 'workshop': return 'bg-purple-100 text-purple-800';
      case 'seminar': return 'bg-orange-100 text-orange-800';
      case 'discussion': return 'bg-yellow-100 text-yellow-800';
      case 'practice': return 'bg-gray-100 text-gray-800';
      case 'study': return 'bg-indigo-100 text-indigo-800';
      case 'presentation': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Schedule" role="student" userName="Emma Wilson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <Tabs defaultValue="weekly" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              </TabsList>

              <TabsContent value="weekly" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                  {Object.entries(weeklySchedule).map(([day, classes]) => (
                    <Card key={day} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-center">{day}</CardTitle>
                        <CardDescription className="text-center">
                          {classes.length} classes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {classes.map((class_, index) => (
                          <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <div className="text-sm font-medium">{class_.time}</div>
                              <Badge className={getTypeColor(class_.type)} variant="secondary">
                                {class_.type}
                              </Badge>
                            </div>
                            <div className="space-y-1">
                              <div className="font-medium text-sm">{class_.subject}</div>
                              <div className="text-xs text-gray-500 flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {class_.room}
                              </div>
                              <div className="text-xs text-gray-500">{class_.teacher}</div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Today's Schedule Highlight */}
                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Today's Schedule - Thursday
                    </CardTitle>
                    <CardDescription>March 21, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {weeklySchedule.Thursday.map((class_, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                          <div className="flex items-center space-x-3">
                            <div className="text-sm font-medium text-gray-500 w-20">{class_.time}</div>
                            <div>
                              <div className="font-medium">{class_.subject}</div>
                              <div className="text-sm text-gray-500 flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {class_.room}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getTypeColor(class_.type)} variant="secondary">
                              {class_.type}
                            </Badge>
                            {class_.type === 'lab' && (
                              <Button size="sm" variant="outline">
                                <Video className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="upcoming" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{event.title}</CardTitle>
                          <Badge variant={
                            event.type === 'exam' ? 'destructive' :
                            event.type === 'event' ? 'default' :
                            event.type === 'meeting' ? 'secondary' : 'outline'
                          }>
                            {event.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex space-x-2 pt-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Bell className="h-4 w-4 mr-2" />
                              Set Reminder
                            </Button>
                            <Button size="sm" className="flex-1">
                              <BookOpen className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}