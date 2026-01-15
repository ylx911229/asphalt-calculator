import type { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, TrendingUp, Scale, BookOpen, HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';
import AsphaltCalculator from '@/components/AsphaltCalculator';
import { pageSEO } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  keywords: pageSEO.home.keywords,
  alternates: {
    canonical: pageSEO.home.canonical,
  },
};

export default function HomePage() {
  const features = [
    {
      icon: Calculator,
      title: 'Volume & Tonnage Calculator',
      description: 'Calculate exact asphalt volume and tonnage needed for your paving project',
      href: '/',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Cost Estimator',
      description: 'Get detailed cost breakdowns including materials, labor, and base preparation',
      href: '/cost-calculator',
      color: 'emerald'
    },
    {
      icon: Scale,
      title: 'Asphalt vs Concrete',
      description: 'Compare costs and benefits of asphalt versus concrete for your driveway',
      href: '/asphalt-vs-concrete',
      color: 'purple'
    },
    {
      icon: BookOpen,
      title: 'Paving Guide',
      description: 'Learn about thickness requirements, best practices, and maintenance tips',
      href: '/guide',
      color: 'amber'
    },
  ];

  const benefits = [
    'Accurate material calculations for any project size',
    'Support for multiple measurement units (feet, meters, yards)',
    'Industry-standard asphalt density values',
    'Instant results with detailed breakdowns',
    'Save and print your calculations',
    'Mobile-friendly interface',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-semibold text-blue-50 tracking-wide">Professional Paving Estimator</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              Asphalt Calculator
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200 mt-2 text-3xl md:text-5xl font-bold">
                Free Paving Cost & Material Estimator
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
              Calculate asphalt material, tonnage, and costs for driveways, parking lots, and roads.
              Our <strong>asphalt calculator</strong> provides accurate estimates in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="#calculator"
                className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
              >
                <Calculator size={22} />
                Start Calculating
              </a>
              <Link
                href="/guide"
                className="bg-blue-800/40 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800/60 transition-all inline-flex items-center justify-center gap-2 hover:-translate-y-1 transform"
              >
                <BookOpen size={22} />
                View Paving Guide
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-blue-200/80">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-400" />
                <span>100% Free to Use</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-400" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-400" />
                <span>Industry Standard Formulas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-24 bg-slate-50 relative -mt-10 z-20 rounded-t-[2.5rem]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                Calculate Your Asphalt Needs
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Enter your project dimensions below to get instant material volume, tonnage, and area estimates.
              </p>
            </div>
            <AsphaltCalculator />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 rounded-full border border-blue-100">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Complete Toolkit</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Asphalt Calculation Tools
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive suite of asphalt calculators helps contractors and homeowners
              estimate materials, costs, and compare paving options for any project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group bg-slate-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-slate-200 hover:border-blue-200 hover:-translate-y-1 duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-amber-100 text-amber-600'
                }`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                <div className="flex items-center text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Use Tool <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-green-100 rounded-full border border-green-200">
                <span className="text-sm font-bold text-green-700 uppercase tracking-wider">Step-by-Step Guide</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                How to Use the Asphalt Calculator
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200/60">
              <div className="space-y-12">
                <div className="flex gap-6 md:gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Measure Your Area</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Measure the length and width of the area you want to pave. For driveways, measure from the garage
                      to the street. Use a measuring tape or wheel for accuracy. The <strong>asphalt calculator</strong> supports multiple units including feet, meters, yards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 md:gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Determine Thickness</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Residential driveways typically require 2-4 inches of asphalt, while commercial parking lots need 3-5 inches. 
                      Heavy traffic areas may require 6-8 inches.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 md:gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Select Asphalt Density</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Standard hot mix asphalt has a density of 2400 kg/m³ (150 lbs/ft³). 
                      The calculator uses these density values to accurately calculate tonnage and material requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 md:gap-8 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    4
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Get Instant Results</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      Click calculate to get instant results showing the volume of asphalt needed, the tonnage required, and the total coverage area.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-900 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="bg-indigo-500/30 p-4 rounded-2xl">
                  <HelpCircle className="text-indigo-200" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ color: 'white' }}>
                    Pro Tip for Accurate Calculations
                  </h3>
                  <p className="text-indigo-200 leading-relaxed">
                    Always add 5-10% extra material to your asphalt calculator results to account for compaction, waste, and
                    irregular areas. For complex shapes, break the area into rectangles and calculate each section separately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1.5 bg-purple-50 rounded-full border border-purple-100">
                <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Why Use Our Asphalt Calculator?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-start gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all group">
                  <div className="flex-shrink-0 bg-white p-2 rounded-xl shadow-sm group-hover:bg-blue-600 transition-colors border border-slate-100 group-hover:border-blue-600">
                    <CheckCircle className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <p className="text-slate-700 font-medium pt-1">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 text-white rounded-[2.5rem] shadow-2xl p-10 md:p-16 relative overflow-hidden">
               <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
               <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight" style={{ color: 'white' }}>
                  Professional Asphalt Calculation for Every Project
                </h3>
                <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                  <p>
                    Whether you're a homeowner planning a driveway renovation, a contractor bidding on a commercial paving
                    project, or a property manager maintaining parking lots, our asphalt calculator provides the accurate
                    material estimates you need.
                  </p>
                  <p>
                    Our free asphalt calculator helps you determine exactly how much asphalt material you need, reducing waste
                    and <Link href="/cost-calculator" className="text-blue-400 hover:text-blue-300 transition-colors">saving money</Link> on your paving project. By calculating the correct tonnage and volume, you can order the
                    right amount of hot mix asphalt from your supplier and avoid costly delays.
                  </p>
                </div>
                <div className="mt-10">
                  <a href="#calculator" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1">
                    Start Your Calculation Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
