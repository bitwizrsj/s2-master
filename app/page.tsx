import { LoginForm } from '@/components/auth/login-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Brain, Users, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">EduSmart</h1>
            <p className="text-xs text-gray-500">AI-Powered Education</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Transform Education with{' '}
                <span className="ai-text-gradient">AI-Powered</span>{' '}
                School Management
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Streamline operations, enhance learning experiences, and make data-driven decisions 
                with our comprehensive school management platform.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">AI Quiz Generator</h3>
                    <p className="text-xs text-gray-500">Smart content creation</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-green-100">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Multi-Role Access</h3>
                    <p className="text-xs text-gray-500">Students, Parents, Teachers</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Learning Assistant</h3>
                    <p className="text-xs text-gray-500">Personalized support</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-orange-100">
                    <Shield className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Secure & Compliant</h3>
                    <p className="text-xs text-gray-500">GDPR/FERPA ready</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                <CardDescription>
                  Sign in to access your school dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}