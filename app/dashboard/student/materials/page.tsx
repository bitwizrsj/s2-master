'use client';

import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  FileText,
  Video,
  Download,
  Eye,
  BookMarked,
  Folder,
  Clock,
  Calendar,
  User,
  Star,
  TrendingUp,
  Filter,
  Search,
  ChevronRight,
  BookOpenCheck,
  FileQuestion,
  Layers,
  Brain,
  Play,
  FilePieChart
} from 'lucide-react';
import { useState } from 'react';

export default function StudyMaterials() {
  const [searchQuery, setSearchQuery] = useState('');

  // Study materials by type
  const materials = {
    textbooks: [
      {
        id: 1,
        title: 'Calculus: Early Transcendentals',
        subject: 'Mathematics',
        author: 'James Stewart',
        edition: '8th Edition',
        pages: 1344,
        fileType: 'PDF',
        size: '45 MB',
        uploadDate: '2024-03-15',
        downloads: 245,
        rating: 4.8,
        featured: true
      },
      {
        id: 2,
        title: 'Fundamentals of Physics',
        subject: 'Physics',
        author: 'Halliday, Resnick, Walker',
        edition: '11th Edition',
        pages: 1248,
        fileType: 'PDF',
        size: '38 MB',
        uploadDate: '2024-03-10',
        downloads: 189,
        rating: 4.6
      },
      {
        id: 3,
        title: 'Chemistry: The Central Science',
        subject: 'Chemistry',
        author: 'Brown, LeMay, Bursten',
        edition: '14th Edition',
        pages: 1184,
        fileType: 'PDF',
        size: '42 MB',
        uploadDate: '2024-03-05',
        downloads: 167,
        rating: 4.7
      }
    ],
    lectureNotes: [
      {
        id: 1,
        title: 'Quantum Mechanics Lecture Notes',
        subject: 'Physics',
        professor: 'Dr. Sarah Chen',
        chapter: 'Chapter 5-8',
        pages: 56,
        fileType: 'PDF',
        size: '12 MB',
        uploadDate: '2024-03-18',
        downloads: 142,
        views: 312
      },
      {
        id: 2,
        title: 'Organic Chemistry Summary',
        subject: 'Chemistry',
        professor: 'Dr. Michael Rodriguez',
        chapter: 'All Chapters',
        pages: 48,
        fileType: 'PDF',
        size: '8 MB',
        uploadDate: '2024-03-12',
        downloads: 98,
        views: 245
      },
      {
        id: 3,
        title: 'Linear Algebra Lecture Slides',
        subject: 'Mathematics',
        professor: 'Dr. Robert Wilson',
        chapter: 'Vectors & Matrices',
        pages: 72,
        fileType: 'PPT',
        size: '15 MB',
        uploadDate: '2024-03-08',
        downloads: 113,
        views: 278
      }
    ],
    videoLectures: [
      {
        id: 1,
        title: 'Differential Equations Explained',
        subject: 'Mathematics',
        instructor: 'Prof. David Lee',
        duration: '2h 15m',
        views: 1245,
        likes: 234,
        uploadDate: '2024-03-20',
        thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=168&fit=crop',
        featured: true
      },
      {
        id: 2,
        title: 'Thermodynamics Concepts',
        subject: 'Physics',
        instructor: 'Dr. Emily Watson',
        duration: '1h 45m',
        views: 987,
        likes: 189,
        uploadDate: '2024-03-15',
        thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=168&fit=crop'
      },
      {
        id: 3,
        title: 'Chemical Bonding Workshop',
        subject: 'Chemistry',
        instructor: 'Prof. James Miller',
        duration: '1h 30m',
        views: 845,
        likes: 156,
        uploadDate: '2024-03-10',
        thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w-300&h=168&fit=crop'
      }
    ]
  };

  // Practice materials
  const practiceMaterials = [
    {
      id: 1,
      title: 'Calculus Practice Problems',
      subject: 'Mathematics',
      type: 'Worksheet',
      questions: 50,
      difficulty: 'Medium',
      completion: 65,
      lastAccessed: '2024-03-21'
    },
    {
      id: 2,
      title: 'Physics MCQs Bank',
      subject: 'Physics',
      type: 'Quiz',
      questions: 100,
      difficulty: 'Hard',
      completion: 30,
      lastAccessed: '2024-03-18'
    },
    {
      id: 3,
      title: 'Chemistry Previous Papers',
      subject: 'Chemistry',
      type: 'Exam Papers',
      questions: 75,
      difficulty: 'Mixed',
      completion: 45,
      lastAccessed: '2024-03-15'
    }
  ];

  // Recent downloads
  const recentDownloads = [
    {
      id: 1,
      title: 'Shakespeare Analysis Notes',
      subject: 'English Literature',
      downloaded: '2 hours ago',
      size: '6.2 MB'
    },
    {
      id: 2,
      title: 'World History Timeline',
      subject: 'History',
      downloaded: '1 day ago',
      size: '8.5 MB'
    },
    {
      id: 3,
      title: 'French Vocabulary List',
      subject: 'French',
      downloaded: '2 days ago',
      size: '3.8 MB'
    }
  ];

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-600" />;
      case 'ppt':
      case 'pptx':
        return <FilePieChart className="h-5 w-5 text-orange-600" />;
      case 'doc':
      case 'docx':
        return <FileText className="h-5 w-5 text-blue-600" />;
      default:
        return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Easy</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>;
      case 'hard':
        return <Badge variant="destructive">Hard</Badge>;
      default:
        return <Badge variant="outline">{difficulty}</Badge>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Study Materials" role="student" userName="Emma Wilson" />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* Main Tabs */}
            <Tabs defaultValue="textbooks" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="textbooks" className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Textbooks</span>
                </TabsTrigger>
                <TabsTrigger value="notes" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Lecture Notes</span>
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center space-x-2">
                  <Video className="h-4 w-4" />
                  <span>Video Lectures</span>
                </TabsTrigger>
              </TabsList>

              {/* Textbooks Tab */}
              <TabsContent value="textbooks" className="space-y-4">
                {materials.textbooks.map((book) => (
                  <Card key={book.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          {getFileIcon(book.fileType)}
                          <div>
                            <div className="flex items-center space-x-2">
                              <CardTitle className="text-lg">{book.title}</CardTitle>
                              {book.featured && (
                                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                                  <Star className="h-3 w-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="mt-1">
                              {book.subject} • {book.author} • {book.edition}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center justify-end space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-medium">{book.rating}</span>
                          </div>
                          <p className="text-sm text-gray-500">{book.downloads} downloads</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="font-medium text-gray-900">{book.pages} pages</p>
                          <p className="text-gray-500">Total pages</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="font-medium text-gray-900">{book.fileType}</p>
                          <p className="text-gray-500">File type</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="font-medium text-gray-900">{book.size}</p>
                          <p className="text-gray-500">File size</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="font-medium text-gray-900">{book.uploadDate}</p>
                          <p className="text-gray-500">Uploaded</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 pt-4 border-t">
                        <Button className="flex-1 gap-2">
                          <Download className="h-4 w-4" />
                          Download Textbook
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <Eye className="h-4 w-4" />
                          Preview
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Lecture Notes Tab */}
              <TabsContent value="notes" className="space-y-4">
                {materials.lectureNotes.map((note) => (
                  <Card key={note.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          {getFileIcon(note.fileType)}
                          <div>
                            <CardTitle className="text-lg">{note.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {note.subject} • Prof. {note.professor} • {note.chapter}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="secondary">{note.fileType}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-gray-400" />
                          <span>{note.pages} pages</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Download className="h-4 w-4 text-gray-400" />
                          <span>{note.downloads} downloads</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="h-4 w-4 text-gray-400" />
                          <span>{note.views} views</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span>Uploaded: {note.uploadDate}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 pt-4 border-t">
                        <Button className="flex-1 gap-2">
                          <Download className="h-4 w-4" />
                          Download Notes
                        </Button>
                        <Button variant="outline" className="gap-2">
                          <BookOpen className="h-4 w-4" />
                          Study Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Video Lectures Tab */}
              <TabsContent value="videos" className="space-y-4">
                {materials.videoLectures.map((video) => (
                  <Card key={video.id} className="hover:shadow-md transition-shadow overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 relative">
                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="h-12 w-12 text-white opacity-75" />
                          </div>
                          {video.featured && (
                            <div className="absolute top-3 left-3">
                              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                                <Star className="h-3 w-3 mr-1" />
                                Featured
                              </Badge>
                            </div>
                          )}
                          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg">{video.title}</CardTitle>
                              <CardDescription className="mt-1">
                                {video.subject} • {video.instructor}
                              </CardDescription>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-900">{video.views.toLocaleString()} views</div>
                              <div className="text-sm text-gray-500">{video.likes} likes</div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                            <span>Uploaded: {video.uploadDate}</span>
                            <span>•</span>
                            <span>Duration: {video.duration}</span>
                          </div>
                          <div className="flex space-x-3">
                            <Button className="flex-1 gap-2">
                              <Play className="h-4 w-4" />
                              Watch Now
                            </Button>
                            <Button variant="outline" className="gap-2">
                              <Download className="h-4 w-4" />
                              Download
                            </Button>
                            <Button variant="outline" size="icon">
                              <Brain className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

            {/* Bottom Section: Practice & Recent Downloads */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Practice Materials */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpenCheck className="h-5 w-5 mr-2 text-blue-600" />
                    Practice Materials
                  </CardTitle>
                  <CardDescription>Worksheets, quizzes, and exam papers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {practiceMaterials.map((material) => (
                    <div key={material.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <FileQuestion className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{material.title}</h4>
                          <p className="text-sm text-gray-500">{material.subject} • {material.type}</p>
                          <div className="flex items-center space-x-3 mt-1 text-xs text-gray-600">
                            <span>{material.questions} questions</span>
                            <span>•</span>
                            {getDifficultyBadge(material.difficulty)}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="space-y-1">
                          <div className="text-sm font-medium">{material.completion}%</div>
                          <Progress value={material.completion} className="h-2 w-20" />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full gap-2">
                    <Layers className="h-4 w-4" />
                    View All Practice Materials
                  </Button>
                </CardFooter>
              </Card>

              {/* Recent Downloads & Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="h-5 w-5 mr-2 text-green-600" />
                    Recent Downloads
                  </CardTitle>
                  <CardDescription>Your recently downloaded materials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentDownloads.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <FileText className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.subject}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">{item.downloaded}</div>
                        <div className="text-xs text-gray-500">{item.size}</div>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-3">Quick Links</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" className="justify-start h-auto py-3">
                        <div className="text-left">
                          <div className="font-medium">AI Study Assistant</div>
                          <div className="text-xs text-gray-500">Get help with materials</div>
                        </div>
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3">
                        <div className="text-left">
                          <div className="font-medium">Shared Notes</div>
                          <div className="text-xs text-gray-500">Classmate materials</div>
                        </div>
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3">
                        <div className="text-left">
                          <div className="font-medium">Syllabus</div>
                          <div className="text-xs text-gray-500">Course outlines</div>
                        </div>
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </Button>
                      <Button variant="outline" className="justify-start h-auto py-3">
                        <div className="text-left">
                          <div className="font-medium">Bookmarks</div>
                          <div className="text-xs text-gray-500">Saved materials</div>
                        </div>
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Storage Usage */}
            <Card>
              <CardHeader>
                <CardTitle>Storage Usage</CardTitle>
                <CardDescription>Your downloaded materials storage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">2.4 GB used of 5 GB</p>
                      <p className="text-sm text-gray-500">48% of storage used</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Folder className="h-4 w-4 mr-2" />
                      Manage Storage
                    </Button>
                  </div>
                  <Progress value={48} className="h-3" />
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-medium text-blue-700">1.2 GB</p>
                      <p className="text-blue-600">Textbooks</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-medium text-green-700">680 MB</p>
                      <p className="text-green-600">Lecture Notes</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <p className="font-medium text-purple-700">520 MB</p>
                      <p className="text-purple-600">Video Lectures</p>
                    </div>
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