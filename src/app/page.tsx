import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Sun,
  Zap,
  DollarSign,
  Maximize,
  TrendingUp,
  BarChart3,
  Sparkles,
  Play,
  CheckCircle,
  Award,
  Target,
  Lightbulb,
  Sprout,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import fs from 'fs/promises';
import path from 'path';
import * as LucideIcons from 'lucide-react';

type Advantage = {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
};

type AgriculturalBenefit = {
  icon: keyof typeof LucideIcons;
  title: string;
  description: string;
  details?: string[];
  source?: string;
};

const heroImage = PlaceHolderImages.find(p => p.id === "hero") || {
  id: "hero-fallback",
  imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  description: "Vertical solar panels in agricultural landscape",
  imageHint: "vertical solar panels agricultural setting"
};

export default async function Home() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'home-advantages.txt');
  const fileContent = await fs.readFile(dataPath, 'utf8');
  const advantages: Advantage[] = JSON.parse(fileContent);

  const agricultureDataPath = path.join(process.cwd(), 'src', 'data', 'agricultural-benefits.txt');
  const agricultureFileContent = await fs.readFile(agricultureDataPath, 'utf8');
  const agriculturalBenefits: AgriculturalBenefit[] = JSON.parse(agricultureFileContent);

  const Icon = ({ name, className }: { name: keyof typeof LucideIcons, className: string }) => {
    const LucideIcon = LucideIcons[name] as React.ElementType;
    return LucideIcon ? <LucideIcon className={className} /> : null;
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-green-900/40" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <div className="w-8 h-8 bg-green-400/30 rounded-full blur-sm"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-500">
          <div className="w-6 h-6 bg-blue-400/30 rounded-full blur-sm"></div>
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-2000">
          <div className="w-4 h-4 bg-yellow-400/30 rounded-full blur-sm"></div>
        </div>

        <div className="relative z-10 p-4 max-w-7xl mx-auto">
          <div className="mb-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600/90 to-blue-600/90 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
            🌍 NEW: International Validation from Nordic Research
          </div>
          
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tight bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent animate-fadeIn">
              The Future is Vertical
            </h1>
            <h2 className="text-2xl md:text-4xl font-headline text-green-100 animate-fadeIn animation-delay-500">
              Transforming UK Solar Strategy Through Agricultural Synergy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group cursor-pointer shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">19-22%</div>
                <div className="text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300">Higher Energy Output</div>
                <div className="text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors duration-300">vs traditional solar</div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group cursor-pointer shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">46%</div>
                <div className="text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300">Grid Capacity Increase</div>
                <div className="text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors duration-300">Infrastructure savings</div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group cursor-pointer shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">95-100%</div>
                <div className="text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300">Crop Yield Maintained</div>
                <div className="text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors duration-300">Agricultural compatibility</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <Link href="#advantages">
                <Lightbulb className="mr-2 h-5 w-5" />
                Start Your Journey
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              University of Turku & NTNU Research Validated
            </Badge>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 opacity-70" />
        </div>
      </section>

      {/* Interactive Advantages Section */}
      <section id="advantages" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2">
              Revolutionary Technology
            </Badge>
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-blue-700 bg-clip-text text-transparent">
              Why Go Vertical?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover how vertical solar installation revolutionizes energy generation with superior performance, 
              perfect agricultural integration, and breakthrough grid compatibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="group relative text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg">
                  <div className="bg-white rounded-lg h-full w-full"></div>
                </div>

                <CardHeader className="relative z-10 pb-4">
                  <div className="mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-4 w-fit mb-6 border shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Icon name={advantage.icon} className="h-10 w-10 text-green-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-headline text-xl group-hover:text-green-700 transition-colors duration-300">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {advantage.description}
                  </p>
                  
                  {/* Progress Bar Animation */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Progress
                      value={75 + (index * 5)}
                      className="h-2 bg-gray-200"
                    />
                    <p className="text-xs text-green-600 mt-1 font-medium">
                      {75 + (index * 5)}% Efficiency Improvement
                    </p>
                  </div>
                </CardContent>

                {/* Floating Action Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                  <Button size="sm" className="rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-lg">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Link href="#agricultural-benefits">
                <CheckCircle className="mr-2 h-5 w-5" />
                Discover Agricultural Benefits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Agricultural Benefits Section */}
      <section id="agricultural-benefits" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-teal-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2">
              🌾 Agricultural Synergy
            </Badge>
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-700 to-emerald-700 bg-clip-text text-transparent">
              Agricultural Benefits
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Vertical agrivoltaic systems eliminate the false choice between energy security and food security. 
              The same land can produce both renewable energy and agricultural crops, maintaining 95-100% of traditional yields.
            </p>
          </div>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="group relative text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="pt-8 relative z-10">
                <div className="text-4xl font-bold text-green-600 group-hover:text-emerald-600 transition-colors duration-300 mb-2">95-100%</div>
                <h3 className="text-lg font-semibold group-hover:text-green-700 transition-colors duration-300 mb-2">Crop Yield Maintained</h3>
                <p className="text-sm text-green-700 group-hover:text-emerald-700 transition-colors duration-300">vs traditional farming</p>
              </CardContent>
            </Card>
            
            <Card className="group relative text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="pt-8 relative z-10">
                <div className="text-3xl font-bold text-emerald-600 group-hover:text-teal-600 transition-colors duration-300 mb-2">£4,500-6,500</div>
                <h3 className="text-lg font-semibold group-hover:text-emerald-700 transition-colors duration-300 mb-2">Total Income per Hectare/Year</h3>
                <p className="text-sm text-emerald-700 group-hover:text-teal-700 transition-colors duration-300">Combined agriculture + energy</p>
              </CardContent>
            </Card>
            
            <Card className="group relative text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="pt-8 relative z-10">
                <div className="text-3xl font-bold text-teal-600 group-hover:text-green-600 transition-colors duration-300 mb-2">25,000-35,000</div>
                <h3 className="text-lg font-semibold group-hover:text-teal-700 transition-colors duration-300 mb-2">Hectares of Farmland Saved</h3>
                <p className="text-sm text-teal-700 group-hover:text-green-700 transition-colors duration-300">From traditional solar</p>
              </CardContent>
            </Card>
            
            <Card className="group relative text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="pt-8 relative z-10">
                <div className="text-3xl font-bold text-green-600 group-hover:text-emerald-600 transition-colors duration-300 mb-2">£968M</div>
                <h3 className="text-lg font-semibold group-hover:text-green-700 transition-colors duration-300 mb-2">Additional Agricultural Revenue</h3>
                <p className="text-sm text-green-700 group-hover:text-emerald-700 transition-colors duration-300">Over 25 years</p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Link href="#grid-benefits">
                <Sprout className="mr-2 h-5 w-5" />
                Explore Grid Infrastructure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Grid Infrastructure Benefits Section */}
      <section id="grid-benefits" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-green-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">
              🔌 Revolutionary Grid Integration
            </Badge>
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Grid Infrastructure Benefits
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Revolutionary findings from Finland and Norway demonstrate that VBPV systems fundamentally solve 
              the distribution grid challenges created by traditional solar deployment, saving £600M-£1,150M in infrastructure costs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="group relative text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg">
                <div className="bg-white rounded-lg h-full w-full"></div>
              </div>

              <CardHeader className="relative z-10 pb-4">
                <div className="mx-auto bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-4 w-fit mb-6 border shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Zap className="h-10 w-10 text-green-600 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold text-green-600 group-hover:text-blue-600 transition-colors duration-300 mb-2">+46%</div>
                <CardTitle className="font-headline text-xl group-hover:text-green-700 transition-colors duration-300">
                  Grid Hosting Capacity
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  vs traditional solar systems
                </p>
                
                {/* Progress Bar Animation */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Progress
                    value={92}
                    className="h-2 bg-gray-200"
                  />
                  <p className="text-xs text-green-600 mt-1 font-medium">
                    92% Grid Efficiency Improvement
                  </p>
                </div>
              </CardContent>

              {/* Floating Action Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                <Button size="sm" className="rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-lg">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
            
            <Card className="group relative text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg">
                <div className="bg-white rounded-lg h-full w-full"></div>
              </div>

              <CardHeader className="relative z-10 pb-4">
                <div className="mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-4 w-fit mb-6 border shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <DollarSign className="h-10 w-10 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-blue-600 group-hover:text-purple-600 transition-colors duration-300 mb-2">£600M-£1,150M</div>
                <CardTitle className="font-headline text-xl group-hover:text-blue-700 transition-colors duration-300">
                  Infrastructure Savings
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  Avoided grid reinforcement costs
                </p>
                
                {/* Progress Bar Animation */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Progress
                    value={85}
                    className="h-2 bg-gray-200"
                  />
                  <p className="text-xs text-blue-600 mt-1 font-medium">
                    85% Cost Avoidance Rate
                  </p>
                </div>
              </CardContent>

              {/* Floating Action Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                <Button size="sm" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
            
            <Card className="group relative text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden">
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg">
                <div className="bg-white rounded-lg h-full w-full"></div>
              </div>

              <CardHeader className="relative z-10 pb-4">
                <div className="mx-auto bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-4 w-fit mb-6 border shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <TrendingUp className="h-10 w-10 text-purple-600 group-hover:text-green-600 transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold text-purple-600 group-hover:text-green-600 transition-colors duration-300 mb-2">15-20%</div>
                <CardTitle className="font-headline text-xl group-hover:text-purple-700 transition-colors duration-300">
                  Cost Reduction
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  Total solar deployment costs
                </p>
                
                {/* Progress Bar Animation */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Progress
                    value={80}
                    className="h-2 bg-gray-200"
                  />
                  <p className="text-xs text-purple-600 mt-1 font-medium">
                    80% Deployment Efficiency
                  </p>
                </div>
              </CardContent>

              {/* Floating Action Button */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                <Button size="sm" className="rounded-full bg-gradient-to-r from-purple-500 to-green-500 text-white border-0 shadow-lg">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Link href="/grid">
                <Zap className="mr-2 h-5 w-5" />
                Explore Grid Benefits
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="text-center mt-8">
            <Badge variant="secondary" className="bg-white/20 text-gray-700 border-gray-300 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Source: University of Turku (Finland) & NTNU (Norway), published in Renewable and Sustainable Energy Reviews (March 2022)
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
