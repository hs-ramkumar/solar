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
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/80 via-brand-teal/60 to-brand-navy/70" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <div className="w-8 h-8 bg-brand-light-green/30 rounded-full blur-sm"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-500">
          <div className="w-6 h-6 bg-brand-teal/40 rounded-full blur-sm"></div>
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-2000">
          <div className="w-4 h-4 bg-brand-light/40 rounded-full blur-sm"></div>
        </div>

        <div className="relative z-10 p-4 max-w-7xl mx-auto">
          <div className="mb-8 inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-light-green/90 to-brand-teal/90 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
            🌍 NEW: International Validation from Nordic Research
          </div>

          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tight bg-gradient-to-r from-white via-brand-light to-brand-light-green bg-clip-text text-transparent animate-fadeIn">
              The Future is Vertical
            </h1>
            <h2 className="text-2xl md:text-4xl font-headline text-brand-light animate-fadeIn animation-delay-500">
              Transforming UK Solar Strategy Through Agricultural Synergy
            </h2>
            <p className="text-xl md:text-2xl text-brand-light mb-8 leading-relaxed">
              VBPV agrivoltaic systems simultaneously deliver energy security, food security,
              economic efficiency, and nature recovery—eliminating the false choices that have
              constrained UK renewable energy policy.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group cursor-pointer shadow-2xl hover:shadow-brand-light-green/20">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light-green/20 to-brand-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-brand-light-green/20 to-brand-light/20 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-brand-light-green group-hover:text-brand-light transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-brand-light to-brand-light-green bg-clip-text text-transparent group-hover:from-brand-light group-hover:to-brand-light transition-all duration-300">£161-187bn</div>
                <div className="text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300">Total System Savings</div>
                <div className="text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors duration-300">Over 30 Years</div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group cursor-pointer shadow-2xl hover:shadow-brand-light-green/20">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light-green/20 to-brand-light-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-brand-light-green/20 to-brand-light/20 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-brand-light-green group-hover:text-brand-light transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-brand-light to-brand-light-green bg-clip-text text-transparent group-hover:from-brand-light group-hover:to-brand-light transition-all duration-300">19-22%</div>
                <div className="text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300">Higher Energy Output</div>
                <div className="text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors duration-300">vs traditional solar</div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group cursor-pointer shadow-2xl hover:shadow-brand-teal/20">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-brand-light/30 to-brand-light-green/30 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-10 h-10 text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold mb-3 text-white">£121-134bn</div>
                <div className="text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300">Battery Storage Savings</div>
                <div className="text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors duration-300">Infrastructure savings</div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 group cursor-pointer shadow-2xl hover:shadow-brand-light-green/20">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light-green/20 to-brand-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-brand-light/30 to-brand-light-green/30 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold mb-3 text-white">70-85%</div>
                <div className="text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300">Agricultural Productivity Maintained</div>
                <div className="text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors duration-300">Agricultural compatibility</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-brand-light-green to-brand-teal hover:from-brand-light-green hover:to-brand-teal text-white border-0 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <Link href="#advantages">
                <Lightbulb className="mr-2 h-5 w-5" />
                Start Your Journey
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-center space-y-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              University of York & University of Turku Research Validated
            </Badge>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90 opacity-70" />
        </div>
      </section>

      {/* Critical Window Alert */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-brand-light/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 text-base animate-pulse">
                ⚠️ URGENT: Time-Sensitive Opportunity
              </Badge>
            </div>

            <Card className="group relative bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600"></div>

              <CardContent className="p-8 md:p-12 relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-headline font-bold mb-6 bg-gradient-to-r from-gray-900 via-red-700 to-orange-700 bg-clip-text text-transparent">
                      Critical 6-12 Month Window to Influence UK Solar Strategy
                    </h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Currently, <strong className="text-red-700">1,546 ground-mounted solar projects totaling 35.7 GW</strong> are under construction,
                      awaiting construction, or in planning (out of 3,386 total projects representing 52.6 GW). The vast majority are designed as
                      Traditional Mounted Photovoltaic (TMPV) systems.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Each project that receives planning approval and proceeds to construction <strong className="text-red-700">locks in the TMPV
                      technology choice for 25-30 years</strong>.
                    </p>

                    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-6 rounded-lg shadow-md mb-6">
                      <p className="text-xl font-bold text-red-900 mb-2">
                        ⏰ After this window closes, the opportunity to capture £161-187 billion in system savings will be lost for a generation.
                      </p>
                      <Progress value={75} className="h-3 mt-4 bg-red-200" />
                      <p className="text-sm text-red-700 mt-2 font-medium">Timeline urgency: 75% of window already passed</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 border border-red-200">
                        <div className="text-2xl font-bold text-red-700">1,546</div>
                        <div className="text-sm text-gray-600">Projects at Risk</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
                        <div className="text-2xl font-bold text-orange-700">35.7 GW</div>
                        <div className="text-sm text-gray-600">Capacity in Pipeline</div>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-4 border border-yellow-200">
                        <div className="text-2xl font-bold text-yellow-700">25-30 yrs</div>
                        <div className="text-sm text-gray-600">Technology Lock-in</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
                        <Link href="/benefits">
                          <DollarSign className="mr-2 h-5 w-5" />
                          View Economic Analysis
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="border-2 border-red-600 text-red-700 hover:bg-red-50 transform hover:scale-105 transition-all duration-300">
                        <Link href="/faq">
                          <Target className="mr-2 h-5 w-5" />
                          Read Policy Recommendations
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Core Advantages Section */}
      <section id="advantages" className="py-20 md:py-32 bg-gradient-to-br from-white via-slate-50 to-brand-light/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-brand-light-green rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-brand-teal rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-brand-navy rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-light-green bg-clip-text text-transparent">
              Why VBPV Transforms UK Energy
            </h2>
            <p className="text-xl text-brand-navy leading-relaxed">
              Vertical Bifacial Photovoltaic (VBPV) agrivoltaic systems eliminate the false choice between energy security and food security, 
              delivering superior performance across all metrics.
            </p>
          </div>

          {/* Technology Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="group relative text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-light-green/10 to-brand-teal/200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-light-green via-brand-teal to-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px] rounded-lg">
                  <div className="bg-white rounded-lg h-full w-full"></div>
                </div>

                <CardHeader className="relative z-10 pb-4">
                  <div className="mx-auto bg-gradient-to-br from-brand-light-green/20 to-brand-teal/20 rounded-2xl p-4 w-fit mb-6 border shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Icon name={advantage.icon} className="h-10 w-10 text-brand-navy group-hover:text-brand-teal transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-headline text-xl text-brand-navy group-hover:text-brand-teal transition-colors duration-300">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-700 group-hover:text-brand-navy transition-colors duration-300 leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* Progress Bar Animation */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Progress
                      value={75 + (index * 5)}
                      className="h-2 bg-gray-200"
                    />
                    <p className="text-xs text-brand-light-green mt-1 font-medium">
                      {75 + (index * 5)}% Efficiency Improvement
                    </p>
                  </div>
                </CardContent>

                {/* Floating Action Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                  <Button size="sm" className="rounded-full bg-gradient-to-r from-brand-light-green to-brand-teal/200 text-white border-0 shadow-lg">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-teal to-brand-navy text-white rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                The Evidence is Clear. The Technology is Proven.
              </p>
              <p className="text-xl mb-6 text-white/90">
                Explore the detailed benefits across energy generation, agriculture, grid infrastructure, and biodiversity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-brand-light-green text-white hover:bg-brand-light-green/90">
                  <Link href="/benefits">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    View Full Economic Analysis
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/20">
                  <Link href="/technology">
                    <Zap className="mr-2 h-5 w-5" />
                    Compare Technologies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Benefits Section */}
      <section id="benefits" className="py-20 md:py-32 bg-gradient-to-br from-white via-brand-light/10 to-brand-teal/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-brand-light-green rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-brand-teal rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-brand-navy rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6 bg-gradient-to-r from-brand-navy via-brand-teal to-brand-light-green bg-clip-text text-transparent">
              Triple Win: Energy, Agriculture & Grid
            </h2>
            <p className="text-xl text-brand-navy leading-relaxed">
              VBPV agrivoltaic systems deliver unprecedented benefits across energy generation, agricultural productivity, 
              and grid infrastructure - proving that we don't need to choose between energy security and food security.
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Agricultural Benefits */}
            <Card className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light-green/10 to-brand-light-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 text-center">
                <div className="mx-auto bg-gradient-to-br from-brand-light/30 to-brand-light/30 rounded-2xl p-4 w-fit mb-4 border shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Sprout className="h-10 w-10 text-brand-light-green" />
                </div>
                <CardTitle className="font-headline text-xl text-brand-light-green">Agricultural Benefits</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-center">
                <p className="text-sm text-gray-600 mb-4">Maintain 70-85% productivity while generating clean energy</p>
                <Button asChild size="sm" className="bg-brand-light-green hover:bg-brand-light-green text-white">
                  <Link href="/agriculture">
                    <Sprout className="mr-2 h-4 w-4" />
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Energy Generation Benefits */}
            <Card className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 text-center">
                <div className="mx-auto bg-gradient-to-br from-brand-teal/30 to-brand-teal/40 rounded-2xl p-4 w-fit mb-4 border shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Zap className="h-10 w-10 text-brand-teal" />
                </div>
                <CardTitle className="font-headline text-xl text-brand-teal">Energy Benefits</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-center">
                <p className="text-sm text-gray-600 mb-4">19-22% higher output with superior performance</p>
                <Button asChild size="sm" className="bg-brand-teal hover:bg-brand-teal text-white">
                  <Link href="/benefits">
                    <Zap className="mr-2 h-4 w-4" />
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Grid Infrastructure Benefits */}
            <Card className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/10 to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10 text-center">
                <div className="mx-auto bg-gradient-to-br from-brand-navy/30 to-brand-teal/30 rounded-2xl p-4 w-fit mb-4 border shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <TrendingUp className="h-10 w-10 text-brand-navy" />
                </div>
                <CardTitle className="font-headline text-xl text-brand-navy">Grid Benefits</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 text-center">
                <p className="text-sm text-gray-600 mb-4">£121-134bn savings in infrastructure costs</p>
                <Button asChild size="sm" className="bg-brand-navy hover:bg-brand-navy text-white">
                  <Link href="/grid">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
