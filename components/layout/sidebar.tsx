'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  BookOpen,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
  ChevronLeft,
  Brain,
  BarChart3,
  CreditCard,
  FileText,
  UserCheck,
  Award,
  Bell,
  FolderOpen,
  Video,
  ClipboardCheck,
  FileBarChart,
  Scroll,
  User,
  Layers,
  Receipt,
  Activity,
  Bus,
  Building2,
  ShieldCheck,
  Key,
} from 'lucide-react';

type Role = 'student' | 'parent' | 'teacher' | 'admin' | 'superadmin';

interface SidebarProps {
  role: Role;
}

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navigationItems: Record<Role, NavItem[]> = {
  student: [
    { name: 'Dashboard', href: '/dashboard/student', icon: LayoutDashboard },
    { name: 'Attendance', href: '/dashboard/student/attendance', icon: UserCheck },
    { name: 'Classes', href: '/dashboard/student/classes', icon: BookOpen },
    { name: 'Schedule / Timetable', href: '/dashboard/student/schedule', icon: Calendar },
    { name: 'Assignments', href: '/dashboard/student/assignments', icon: FileText },
    { name: 'Study Materials', href: '/dashboard/student/materials', icon: FolderOpen },
    { name: 'Online Classes', href: '/dashboard/student/live-classes', icon: Video },
    { name: 'Exams', href: '/dashboard/student/exams', icon: ClipboardCheck },
    { name: 'Grades / Results', href: '/dashboard/student/grades', icon: Award },
    { name: 'Report Card', href: '/dashboard/student/report-card', icon: FileBarChart },
    { name: 'Messages', href: '/dashboard/student/messages', icon: MessageSquare },
    { name: 'Announcements', href: '/dashboard/student/announcements', icon: Bell },
    { name: 'AI Assistant', href: '/dashboard/student/ai-assistant', icon: Brain },
    { name: 'Fees', href: '/dashboard/student/fees', icon: CreditCard },
    { name: 'Certificates', href: '/dashboard/student/certificates', icon: Scroll },
    { name: 'Profile', href: '/dashboard/student/profile', icon: User },
    { name: 'Settings', href: '/dashboard/student/settings', icon: Settings },
  ],

  parent: [
    { name: 'Dashboard', href: '/dashboard/parent', icon: LayoutDashboard },
    { name: 'Child Progress', href: '/dashboard/parent/progress', icon: BarChart3 },
    { name: 'Attendance', href: '/dashboard/parent/attendance', icon: UserCheck },
    { name: 'Timetable', href: '/dashboard/parent/schedule', icon: Calendar },
    { name: 'Assignments', href: '/dashboard/parent/assignments', icon: FileText },
    { name: 'Grades / Report Card', href: '/dashboard/parent/grades', icon: Award },
    { name: 'Messages', href: '/dashboard/parent/messages', icon: MessageSquare },
    { name: 'Announcements', href: '/dashboard/parent/announcements', icon: Bell },
    { name: 'Meetings (PTM)', href: '/dashboard/parent/meetings', icon: Users },
    { name: 'Fees', href: '/dashboard/parent/fees', icon: CreditCard },
    { name: 'Receipts', href: '/dashboard/parent/receipts', icon: Receipt },
    { name: 'Transport', href: '/dashboard/parent/transport', icon: Bus },
    { name: 'Profile', href: '/dashboard/parent/profile', icon: User },
  ],

  teacher: [
    { name: 'Dashboard', href: '/dashboard/teacher', icon: LayoutDashboard },
    { name: 'My Classes', href: '/dashboard/teacher/classes', icon: BookOpen },
    { name: 'Timetable', href: '/dashboard/teacher/schedule', icon: Calendar },
    { name: 'Attendance', href: '/dashboard/teacher/attendance', icon: UserCheck },
    { name: 'Assignments', href: '/dashboard/teacher/assignments', icon: FileText },
    { name: 'Exams & Tests', href: '/dashboard/teacher/exams', icon: ClipboardCheck },
    { name: 'Gradebook', href: '/dashboard/teacher/grades', icon: Award },
    { name: 'AI Quiz Generator', href: '/dashboard/teacher/quiz-generator', icon: Brain },
    { name: 'Performance Analytics', href: '/dashboard/teacher/analytics', icon: BarChart3 },
    { name: 'Messages', href: '/dashboard/teacher/messages', icon: MessageSquare },
    { name: 'Announcements', href: '/dashboard/teacher/announcements', icon: Bell },
    { name: 'Profile', href: '/dashboard/teacher/profile', icon: User },
  ],

  admin: [
    { name: 'Dashboard', href: '/dashboard/admin', icon: LayoutDashboard },
    { name: 'Users', href: '/dashboard/admin/users', icon: Users },
    { name: 'Classes & Sections', href: '/dashboard/admin/classes', icon: BookOpen },
    { name: 'Subjects', href: '/dashboard/admin/subjects', icon: Layers },
    { name: 'Timetable', href: '/dashboard/admin/schedule', icon: Calendar },
    { name: 'Attendance', href: '/dashboard/admin/attendance', icon: UserCheck },
    { name: 'Exams', href: '/dashboard/admin/exams', icon: ClipboardCheck },
    { name: 'Results', href: '/dashboard/admin/results', icon: Award },
    { name: 'Fees Management', href: '/dashboard/admin/fees', icon: CreditCard },
    { name: 'Invoices & Payments', href: '/dashboard/admin/payments', icon: Receipt },
    { name: 'Reports & Analytics', href: '/dashboard/admin/reports', icon: BarChart3 },
    { name: 'Activity Logs', href: '/dashboard/admin/logs', icon: Activity },
    { name: 'Settings', href: '/dashboard/admin/settings', icon: Settings },
  ],

  /** 🔥 SUPER ADMIN */
  superadmin: [
    // 1. Global Overview
    { name: 'Dashboard', href: '/dashboard/superadmin', icon: LayoutDashboard },

    // 2. Organization Control
    { name: 'Institutions', href: '/dashboard/superadmin/institutions', icon: Building2 },
    { name: 'Admins', href: '/dashboard/superadmin/admins', icon: ShieldCheck },
    { name: 'Users (All)', href: '/dashboard/superadmin/users', icon: Users },

    // 3. System Management
    { name: 'Roles & Permissions', href: '/dashboard/superadmin/roles', icon: Key },
    { name: 'Global Settings', href: '/dashboard/superadmin/settings', icon: Settings },

    // 4. Monitoring & Logs
    { name: 'System Analytics', href: '/dashboard/superadmin/analytics', icon: BarChart3 },
    { name: 'Audit Logs', href: '/dashboard/superadmin/logs', icon: Activity },

    // 5. Finance (Global)
    { name: 'Subscriptions', href: '/dashboard/superadmin/subscriptions', icon: CreditCard },
    { name: 'Payments', href: '/dashboard/superadmin/payments', icon: Receipt },
  ],
};


export function Sidebar({ role }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const items = navigationItems[role];

  return (
    <div
      className={cn(
        'relative flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">EduSmart</h2>
              <p className="text-xs text-gray-500 capitalize">{role} Portal</p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft
            className={cn(
              'h-4 w-4 transition-transform',
              collapsed && 'rotate-180'
            )}
          />
        </Button>
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={cn(
                    'flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100 group',
                    isActive &&
                      'bg-primary text-primary-foreground hover:bg-primary/90',
                    collapsed && 'justify-center'
                  )}
                >
                  <Icon
                    className={cn(
                      'h-5 w-5 flex-shrink-0',
                      !collapsed && 'mr-3',
                      isActive
                        ? 'text-primary-foreground'
                        : 'text-gray-500 group-hover:text-gray-700'
                    )}
                  />
                  {!collapsed && (
                    <span
                      className={cn(
                        isActive
                          ? 'text-primary-foreground'
                          : 'text-gray-700'
                      )}
                    >
                      {item.name}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-3 border-t border-gray-200">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            'w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100',
            collapsed && 'justify-center'
          )}
        >
          <LogOut className={cn('h-4 w-4', !collapsed && 'mr-3')} />
          {!collapsed && 'Sign Out'}
        </Button>
      </div>
    </div>
  );
}
