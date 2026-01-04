'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Sparkles,
  FileText,
  Settings,
  Download,
  Eye,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';

// ✅ Define quiz types
type QuizQuestion =
  | { type: 'multiple-choice'; question: string; options: string[]; correct: number }
  | { type: 'true-false'; question: string; correct: boolean }
  | { type: 'short-answer'; question: string };

type Quiz = {
  title: string;
  questions: QuizQuestion[];
};

export default function TeacherQuizGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState<Quiz | null>(null);
  const [prompt, setPrompt] = useState('');

  const handleGenerateQuiz = async () => {
    setIsGenerating(true);

    // Simulate AI generation
    setTimeout(() => {
      setGeneratedQuiz({
        title: 'Photosynthesis Quiz - Grade 7',
        questions: [
          {
            type: 'multiple-choice',
            question: 'What is the primary purpose of photosynthesis?',
            options: [
              'To produce oxygen for animals',
              'To convert light energy into chemical energy',
              'To absorb carbon dioxide',
              'To create chlorophyll'
            ],
            correct: 1
          },
          {
            type: 'true-false',
            question: 'Photosynthesis only occurs during the day.',
            correct: true
          },
          {
            type: 'short-answer',
            question: 'Name the two main stages of photosynthesis and briefly describe each.'
          }
        ]
      });
      setIsGenerating(false);
    }, 3000);
  };

  const recentQuizzes = [
    { title: "Newton's Laws Quiz", class: 'Physics 101', created: '2 days ago', questions: 10 },
    { title: 'Energy Conservation Test', class: 'Advanced Physics', created: '1 week ago', questions: 15 },
    { title: 'Quantum Mechanics Quiz', class: 'AP Physics', created: '2 weeks ago', questions: 8 }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role="teacher" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="AI Quiz Generator" role="teacher" userName="Dr. Sarah Johnson" />

        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* AI Generator Card */}
            <Card className="ai-gradient text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Brain className="h-6 w-6 mr-2" />
                  AI-Powered Quiz Generator
                </CardTitle>
                <CardDescription className="text-white/80">
                  Create comprehensive quizzes instantly with AI assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-white">Subject/Topic</label>
                    <Input
                      placeholder="e.g., Photosynthesis, Newton's Laws"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-white">Grade Level</label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">Grade 6</SelectItem>
                        <SelectItem value="7">Grade 7</SelectItem>
                        <SelectItem value="8">Grade 8</SelectItem>
                        <SelectItem value="9">Grade 9</SelectItem>
                        <SelectItem value="10">Grade 10</SelectItem>
                        <SelectItem value="11">Grade 11</SelectItem>
                        <SelectItem value="12">Grade 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-white">Difficulty</label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="hard">Hard</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-white">Number of Questions</label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 Questions</SelectItem>
                        <SelectItem value="10">10 Questions</SelectItem>
                        <SelectItem value="15">15 Questions</SelectItem>
                        <SelectItem value="20">20 Questions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-white">Question Types</label>
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mixed">Mixed Types</SelectItem>
                        <SelectItem value="mcq">Multiple Choice Only</SelectItem>
                        <SelectItem value="tf">True/False Only</SelectItem>
                        <SelectItem value="short">Short Answer Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={handleGenerateQuiz}
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full bg-white text-purple-600 hover:bg-white/90"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Generating Quiz...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Generate Quiz with AI
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Generated Quiz Preview */}
              <div className="lg:col-span-2">
                {generatedQuiz ? (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center">
                          <CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
                          Generated Quiz Preview
                        </CardTitle>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button size="sm" variant="outline">
                            <Settings className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Export
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h3 className="font-bold text-lg mb-4">{generatedQuiz.title}</h3>

                        {generatedQuiz.questions.map((question, index) => (
                          <div key={index} className="mb-6 p-4 bg-white rounded border">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">Question {index + 1}</h4>
                              <Badge variant="outline">{question.type}</Badge>
                            </div>
                            <p className="mb-3">{question.question}</p>

                            {question.type === 'multiple-choice' && 'options' in question && (
                              <div className="space-y-2">
                                {question.options.map((option, optionIndex) => (
                                  <div
                                    key={optionIndex}
                                    className={`p-2 rounded border ${
                                      optionIndex === question.correct
                                        ? 'bg-green-50 border-green-200'
                                        : 'bg-gray-50'
                                    }`}
                                  >
                                    {String.fromCharCode(65 + optionIndex)}. {option}
                                  </div>
                                ))}
                              </div>
                            )}

                            {question.type === 'true-false' && 'correct' in question && (
                              <div className="flex space-x-4">
                                <div
                                  className={`p-2 rounded border ${
                                    question.correct ? 'bg-green-50 border-green-200' : 'bg-gray-50'
                                  }`}
                                >
                                  True
                                </div>
                                <div
                                  className={`p-2 rounded border ${
                                    !question.correct ? 'bg-green-50 border-green-200' : 'bg-gray-50'
                                  }`}
                                >
                                  False
                                </div>
                              </div>
                            )}

                            {question.type === 'short-answer' && (
                              <div className="p-3 bg-gray-50 rounded border">
                                <p className="text-sm text-gray-600">Short answer expected</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="h-96 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Brain className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p>Enter a topic and click "Generate Quiz" to create questions with AI</p>
                    </div>
                  </Card>
                )}
              </div>

              {/* Recent Quizzes */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Recent Quizzes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recentQuizzes.map((quiz, index) => (
                    <div
                      key={index}
                      className="p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm">{quiz.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{quiz.class}</div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">{quiz.questions} questions</span>
                        <span className="text-xs text-gray-500">{quiz.created}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
