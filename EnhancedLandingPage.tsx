import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { CompaniesProofCard, UsersProofCard, RevenueProofCard, LatinxProofCard } from './TrustIndicatorCard';
import { 
  Shield, 
  Brain, 
  TrendingUp, 
  Globe, 
  Users, 
  Target,
  ChevronRight,
  Database,
  Calculator,
  Crown,
  BarChart3,
  Zap,
  Play,
  CheckCircle,
  Star,
  ArrowRight,
  Lock,
  Clock,
  DollarSign,
  LineChart,
  Command,
  Building2,
  Briefcase,
  PieChart,
  Settings
} from 'lucide-react';

interface LandingPageProps {
  language: 'en' | 'es';
  onNavigateToSuite: (suite: string) => void;
  onNavigateToPlatform: () => void;
  onRequestDemo: () => void;
  onNavigateToSecurity?: () => void;
}

export default function EnhancedLandingPage({ 
  language, 
  onNavigateToSuite, 
  onNavigateToPlatform,
  onRequestDemo,
  onNavigateToSecurity 
}: LandingPageProps) {
  const [currentMiracle, setCurrentMiracle] = useState(0);
  const [showNav, setShowNav] = useState(true);

  // Auto-cycle through miracle sentences
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMiracle((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const miracleSentences = [
    {
      title: "Strategy → Execution",
      text: "Overwatch turns strategy into execution instantly — eliminating the lag between ideas and measurable revenue.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Unified Command",
      text: "Your entire business, from finance to HR to growth, in one unified command center.",
      icon: Command,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered Edge",
      text: "AI-powered insights that make founders and executives sharper, faster, and more confident in every decision.",
      icon: Brain,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "The Problem",
      text: "Software companies burn time and capital fighting complexity — slowing their velocity to revenue.",
      icon: Clock,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "The Answer",
      text: "Overwatch is the first operating system built for the founder's edge — aligning people, capital, and strategy in real time.",
      icon: Crown,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const navItems = [
    { id: 'platform', label: 'Platform', icon: Command },
    { id: 'hcm', label: 'HCM Suite', icon: Users },
    { id: 'erp', label: 'ERP Suite', icon: Calculator },
    { id: 'epm', label: 'EPM Suite', icon: BarChart3 },
    { id: 'crm', label: 'CRM Suite', icon: Target },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'company', label: 'Company', icon: Building2 }
  ];

  const enterpriseModules = [
    {
      id: 'hcm',
      title: 'HCM',
      subtitle: 'Human Capital Management',
      description: 'People, culture, retention',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      metrics: ['Employee Engagement', 'Talent Retention', 'Performance Analytics', 'Culture Intelligence'],
      gradient: 'bg-gradient-to-br from-blue-900/20 to-cyan-900/20',
      border: 'border-blue-500/30'
    },
    {
      id: 'erp',
      title: 'ERP',
      subtitle: 'Enterprise Resource Planning',
      description: 'Operations, supply chain, finance backbone',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      metrics: ['Resource Optimization', 'Process Efficiency', 'Supply Chain', 'Financial Integration'],
      gradient: 'bg-gradient-to-br from-green-900/20 to-emerald-900/20',
      border: 'border-green-500/30'
    },
    {
      id: 'epm',
      title: 'EPM',
      subtitle: 'Enterprise Performance Management',
      description: 'Planning, forecasting, OKRs',
      icon: BarChart3,
      color: 'from-purple-500 to-violet-500',
      metrics: ['Strategic Planning', 'Performance Tracking', 'Forecasting', 'Goal Management'],
      gradient: 'bg-gradient-to-br from-purple-900/20 to-violet-900/20',
      border: 'border-purple-500/30'
    },
    {
      id: 'crm',
      title: 'CRM',
      subtitle: 'Customer Relationship Management',
      description: 'Sales, pipeline, customer lifecycle',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      metrics: ['Sales Pipeline', 'Customer Success', 'Revenue Growth', 'Relationship Intelligence'],
      gradient: 'bg-gradient-to-br from-orange-900/20 to-red-900/20',
      border: 'border-orange-500/30'
    }
  ];

  const proofPoints = [
    { metric: "3.2x", label: "Faster Revenue Recognition", icon: TrendingUp },
    { metric: "67%", label: "Reduction in Admin Time", icon: Clock },
    { metric: "94%", label: "Decision Confidence Score", icon: Brain },
    { metric: "2.1x", label: "Strategic Execution Speed", icon: Zap }
  ];

  const trustIndicators = [
    { icon: Shield, label: "SOC 2 Certified", detail: "Enterprise security" },
    { icon: Lock, label: "GDPR Compliant", detail: "Privacy by design" },
    { icon: Star, label: "99.9% Uptime", detail: "Mission-critical reliability" },
    { icon: Users, label: "500+ Companies", detail: "Proven at scale" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Left Navigation - Slim & Persistent */}
      <nav className={`fixed left-0 top-0 h-full w-16 bg-card/80 backdrop-blur-sm border-r border-border z-50 transition-all duration-300 hover:w-48 group ${showNav ? '' : '-translate-x-full'}`}>
        <div className="p-3">
          {/* Logo */}
          <div className="mb-8 flex items-center justify-center group-hover:justify-start">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <span className="ml-3 font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              OVERWATCH
            </span>
          </div>

          {/* Navigation Items */}
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'platform') onNavigateToPlatform();
                  else if (item.id === 'security') onNavigateToSecurity?.();
                  else onNavigateToSuite(item.id);
                }}
                className="w-full flex items-center justify-center group-hover:justify-start p-2 rounded-lg hover:bg-secondary/50 transition-colors group/item"
              >
                <item.icon className="w-5 h-5 text-muted-foreground group-hover/item:text-foreground transition-colors" />
                <span className="ml-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-muted-foreground group-hover/item:text-foreground">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Lo Nuestro Badge */}
        <div className="absolute bottom-4 left-2 right-2">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-xs text-orange-300 italic font-medium">Lo Nuestro</div>
            <div className="text-xs text-muted-foreground">Cultural Intelligence</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-16 relative z-10">
        {/* Hero Section - Split Layout */}
        <section className="min-h-screen grid grid-cols-2 items-center">
          
          {/* LEFT SIDE: Value Wedge Hero */}
          <div className="pl-8 pr-4">
            {/* Badge */}
            <Badge className="mb-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm">
              <Crown className="w-4 h-4 mr-2" />
              The Founder's Operating System
            </Badge>

            {/* Miracle Sentences Carousel */}
            <div className="mb-12 relative">
              <div className="h-80 flex items-center justify-center">
                {miracleSentences.map((miracle, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      currentMiracle === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <div className="flex flex-col items-start justify-center h-full text-left">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${miracle.color} flex items-center justify-center mb-6`}>
                        <miracle.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
                        {miracle.text}
                      </h1>
                      
                      <div className="text-lg text-blue-400 font-medium tracking-wide uppercase">
                        {miracle.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Miracle Sentence Indicators */}
              <div className="flex justify-start space-x-2 mt-8">
                {miracleSentences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMiracle(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentMiracle === index ? 'bg-blue-500 scale-125' : 'bg-border hover:bg-accent'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={onNavigateToPlatform}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Experience OVERWATCH
              </Button>
              
              <Button
                onClick={onRequestDemo}
                variant="outline"
                size="lg"
                className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground px-8 py-4 text-lg rounded-xl transition-all duration-300"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Proof Points - Compact Row */}
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {proofPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <point.icon className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-lg font-bold text-foreground">{point.metric}</div>
                    <div className="text-xs text-muted-foreground">{point.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Enterprise Modules */}
          <div className="pl-4 pr-8">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Enterprise Suite</h2>
                <p className="text-muted-foreground">Four unified systems, one command center</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {enterpriseModules.map((module) => (
                  <Card 
                    key={module.id}
                    className={`${module.gradient} ${module.border} hover:scale-105 transition-all duration-300 cursor-pointer group`}
                    onClick={() => onNavigateToSuite(module.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center`}>
                          <module.icon className="w-6 h-6 text-white" />
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>

                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-1">{module.title}</h3>
                        <p className="text-sm text-foreground/80 mb-1">{module.subtitle}</p>
                        <p className="text-xs text-muted-foreground">{module.description}</p>
                      </div>

                      {/* Key Metrics */}
                      <div className="space-y-1">
                        {module.metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                            {metric}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Integration Message */}
              <div className="text-center p-6 bg-card/30 rounded-xl border border-border/50">
                <div className="text-sm text-foreground/80 mb-2">
                  <span className="text-blue-400 font-semibold">Unified Intelligence:</span> All modules share real-time data
                </div>
                <div className="text-xs text-muted-foreground">
                  Changes in one system instantly reflect across your entire business operation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Value Proposition - Against Competitors */}
        <section className="py-20 px-8 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-300 border-orange-500/30 px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                Beyond Traditional HRIS
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Founder-Led Companies Choose OVERWATCH
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                While others manage payroll, we accelerate strategic execution. Transform from cost center to strategic command center.
              </p>
            </div>

            {/* For Founder-Led Companies */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">For Founder-Led Companies</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                      <Command className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">Unified Strategic Operating System</h4>
                    <p className="text-sm text-foreground/80">Eliminates complexity across HR, Finance, and Strategy in one command center</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">AI-Powered Insights</h4>
                    <p className="text-sm text-foreground/80">Bilingual cultural intelligence with real-time strategic guidance</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">McKinsey-Grade Frameworks</h4>
                    <p className="text-sm text-foreground/80">Strategic planning tools accessible to growing companies</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">Real-Time Market Intelligence</h4>
                    <p className="text-sm text-foreground/80">Agile decision-making with continuous market signal analysis</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Competitive Advantages */}
            <div className="bg-card/30 rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Strategic Depth Beyond Operations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <LineChart className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Strategic Depth Beyond Operational HR/Payroll</h4>
                      <p className="text-sm text-foreground/80">While competitors focus on transactions, we optimize strategic execution and founder leverage</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Crown className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Founder-Specific Metrics That Matter</h4>
                      <p className="text-sm text-foreground/80">Velocity to revenue, strategic coherence, and market timing intelligence for growth companies</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Cultural Intelligence for Latino Market Expansion</h4>
                      <p className="text-sm text-foreground/80">"Lo Nuestro" market positioning with bilingual strategic frameworks and cultural insights</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Advisory-Grade Insights</h4>
                      <p className="text-sm text-foreground/80">Transform HR from cost center to strategic advantage with executive-level intelligence</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competitive Call-Out */}
              <div className="mt-8 p-6 bg-gradient-to-r from-card/50 to-secondary/50 rounded-xl border border-border/50">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    The Difference: Strategic Command vs. Administrative Management
                  </h4>
                  <p className="text-foreground/80 text-sm max-w-3xl mx-auto">
                    Traditional platforms manage your operations. OVERWATCH accelerates your strategic execution. 
                    Built specifically for founder-led companies that need speed, intelligence, and cultural awareness to win in competitive markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 px-8 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Trusted by Forward-Thinking Leaders</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join the founders and executives who choose OVERWATCH to accelerate their velocity to revenue.
              </p>
            </div>
            
            {/* Social Proof Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <CompaniesProofCard />
              <UsersProofCard />
              <RevenueProofCard />
              <LatinxProofCard />
            </div>
            
            {/* Additional Trust Signals */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-blue-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <span>99.9% Uptime SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-orange-400" />
                  <span>Multi-Market Ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Layer */}
        <section className="py-20 px-8 bg-secondary/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Built for Mission-Critical Operations</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {trustIndicators.map((trust, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center mx-auto mb-4 border border-border">
                    <trust.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{trust.label}</h3>
                  <p className="text-sm text-muted-foreground">{trust.detail}</p>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join the founders who are already using OVERWATCH to eliminate complexity and accelerate revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={onNavigateToPlatform}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3"
                >
                  Start Your Journey
                </Button>
                <Button
                  onClick={onRequestDemo}
                  variant="outline"
                  size="lg"
                  className="border-border text-muted-foreground hover:bg-secondary px-8 py-3"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Nav Toggle (Mobile) */}
      <button
        onClick={() => setShowNav(!showNav)}
        className="fixed top-4 left-4 z-50 lg:hidden w-10 h-10 bg-card rounded-lg flex items-center justify-center border border-border"
      >
        <Command className="w-5 h-5 text-muted-foreground" />
      </button>
    </div>
  );
}