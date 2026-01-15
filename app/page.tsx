import type { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, TrendingUp, Scale, BookOpen, HelpCircle, CheckCircle } from 'lucide-react';
import AsphaltCalculator from '@/components/AsphaltCalculator';
import { pageSEO } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  keywords: pageSEO.home.keywords,
};

export default function HomePage() {
  const features = [
    {
      icon: Calculator,
      title: 'Volume & Tonnage Calculator',
      description: 'Calculate exact asphalt volume and tonnage needed for your paving project',
      href: '/',
    },
    {
      icon: TrendingUp,
      title: 'Cost Estimator',
      description: 'Get detailed cost breakdowns including materials, labor, and base preparation',
      href: '/cost-calculator',
    },
    {
      icon: Scale,
      title: 'Asphalt vs Concrete',
      description: 'Compare costs and benefits of asphalt versus concrete for your driveway',
      href: '/asphalt-vs-concrete',
    },
    {
      icon: BookOpen,
      title: 'Paving Guide',
      description: 'Learn about thickness requirements, best practices, and maintenance tips',
      href: '/guide',
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
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/30 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-sm font-semibold text-blue-100">🎯 Professional Paving Calculator</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Asphalt Calculator
              <span className="block text-blue-200 mt-2">Free Paving Cost & Material Estimator</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Calculate asphalt material, tonnage, and costs for driveways, parking lots, and roads.
              Get accurate estimates in seconds with our professional calculator tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              >
                <Calculator size={22} />
                Start Calculating
              </a>
              <Link
                href="/guide"
                className="bg-blue-800/50 backdrop-blur-sm border-2 border-blue-400/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700/50 transition-all inline-flex items-center justify-center gap-2 hover:scale-105 transform"
              >
                <BookOpen size={22} />
                View Paving Guide
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-400" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-400" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-400" />
                <span>Industry Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Calculate Your Asphalt Needs
              </h2>
              <p className="text-lg text-gray-600">
                Enter your project dimensions to get instant material and cost estimates
              </p>
            </div>
            <AsphaltCalculator />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-sm font-semibold text-blue-600">🛠️ Complete Toolkit</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Asphalt Calculation Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive suite of asphalt calculators helps contractors and homeowners
              estimate materials, costs, and compare paving options for any project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 hover:border-blue-300 hover:-translate-y-2 transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="text-white" size={26} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-green-50 rounded-full">
                <span className="text-sm font-semibold text-green-600">📋 Step-by-Step Guide</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                How to Use the Asphalt Calculator
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8 border border-gray-100">
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Measure Your Area</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Measure the length and width of the area you want to pave. For driveways, measure from the garage
                      to the street. For parking lots, measure the entire paving area. Use a measuring tape or wheel for
                      accuracy. The asphalt calculator supports multiple units including feet, meters, yards, inches, and
                      centimeters for your convenience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Determine Thickness</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Choose the appropriate asphalt thickness for your project. Residential driveways typically require
                      2-4 inches of asphalt, while commercial parking lots need 3-5 inches. Heavy traffic areas may require
                      6-8 inches or more. Our asphalt calculator uses industry-standard thickness recommendations to ensure
                      your paving project meets durability requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Select Asphalt Density</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Choose the asphalt mix density based on your project specifications. Standard hot mix asphalt has a
                      density of 2400 kg/m³ (150 lbs/ft³). Light mixes are around 2200 kg/m³, while dense graded mixes can
                      be 2500 kg/m³. The asphalt calculator uses these density values to accurately calculate tonnage and
                      material requirements for ordering.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Get Instant Results</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Click calculate to get instant results showing the volume of asphalt needed in cubic yards and cubic
                      meters, the tonnage required for material ordering, and the total coverage area. The asphalt calculator
                      provides detailed breakdowns to help you order the right amount of material and avoid costly overages
                      or shortages on your paving project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <HelpCircle className="text-white" size={24} />
                </div>
                Pro Tip for Accurate Calculations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Always add 5-10% extra material to your asphalt calculator results to account for compaction, waste, and
                irregular areas. This ensures you have enough asphalt to complete your paving project without delays.
                For complex shapes, break the area into rectangles and calculate each section separately, then add the
                totals together for the most accurate estimate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-purple-50 rounded-full">
                <span className="text-sm font-semibold text-purple-600">✨ Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Use Our Asphalt Calculator?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-start gap-4 bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 group hover:border-green-300">
                  <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg group-hover:bg-green-500 transition-colors">
                    <CheckCircle className="text-green-600 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-10 border-2 border-blue-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Professional Asphalt Calculation for Every Project
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Whether you're a homeowner planning a driveway renovation, a contractor bidding on a commercial paving
                  project, or a property manager maintaining parking lots, our asphalt calculator provides the accurate
                  material estimates you need. The calculator uses industry-standard formulas and density values to ensure
                  your asphalt tonnage calculations are precise and reliable.
                </p>
                <p>
                  Our free asphalt calculator helps you determine exactly how much asphalt material you need, reducing waste
                  and saving money on your paving project. By calculating the correct tonnage and volume, you can order the
                  right amount of hot mix asphalt from your supplier and avoid costly delays or excess material charges.
                </p>
                <p>
                  The asphalt calculator supports both imperial and metric units, making it easy to work with measurements
                  in feet, yards, meters, or any other unit. Results are displayed in multiple formats including cubic yards,
                  cubic meters, tons, and pounds, giving you flexibility for material ordering and cost estimation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Ready to Calculate Your Asphalt Project?
            </h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Get accurate material estimates and cost breakdowns for your paving project in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transform text-lg"
              >
                <Calculator size={24} />
                Use Calculator Now
              </a>
              <Link
                href="/faq"
                className="bg-blue-800/50 backdrop-blur-sm border-2 border-blue-400/30 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700/50 transition-all inline-flex items-center justify-center gap-3 hover:scale-105 transform text-lg"
              >
                <HelpCircle size={24} />
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Asphalt Calculator',
            applicationCategory: 'UtilitiesApplication',
            description: 'Free asphalt calculator for calculating material, tonnage, and costs for paving projects',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            featureList: [
              'Volume calculation',
              'Tonnage estimation',
              'Cost calculator',
              'Multiple unit support',
              'Asphalt vs concrete comparison',
            ],
          }),
        }}
      />
    </div>
  );
}
