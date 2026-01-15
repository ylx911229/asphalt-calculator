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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Asphalt Calculator - Free Paving Cost & Material Estimator
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Calculate asphalt material, tonnage, and costs for driveways, parking lots, and roads.
              Get accurate estimates in seconds with our professional asphalt calculator tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Calculator size={20} />
                Start Calculating
              </a>
              <Link
                href="/guide"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2"
              >
                <BookOpen size={20} />
                View Paving Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AsphaltCalculator />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Asphalt Calculation Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of asphalt calculators helps contractors and homeowners
              estimate materials, costs, and compare paving options for any project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              How to Use the Asphalt Calculator
            </h2>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Measure Your Area</h3>
                    <p className="text-gray-700">
                      Measure the length and width of the area you want to pave. For driveways, measure from the garage
                      to the street. For parking lots, measure the entire paving area. Use a measuring tape or wheel for
                      accuracy. The asphalt calculator supports multiple units including feet, meters, yards, inches, and
                      centimeters for your convenience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Determine Thickness</h3>
                    <p className="text-gray-700">
                      Choose the appropriate asphalt thickness for your project. Residential driveways typically require
                      2-4 inches of asphalt, while commercial parking lots need 3-5 inches. Heavy traffic areas may require
                      6-8 inches or more. Our asphalt calculator uses industry-standard thickness recommendations to ensure
                      your paving project meets durability requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Select Asphalt Density</h3>
                    <p className="text-gray-700">
                      Choose the asphalt mix density based on your project specifications. Standard hot mix asphalt has a
                      density of 2400 kg/m³ (150 lbs/ft³). Light mixes are around 2200 kg/m³, while dense graded mixes can
                      be 2500 kg/m³. The asphalt calculator uses these density values to accurately calculate tonnage and
                      material requirements for ordering.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Get Instant Results</h3>
                    <p className="text-gray-700">
                      Click calculate to get instant results showing the volume of asphalt needed in cubic yards and cubic
                      meters, the tonnage required for material ordering, and the total coverage area. The asphalt calculator
                      provides detailed breakdowns to help you order the right amount of material and avoid costly overages
                      or shortages on your paving project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <HelpCircle className="text-blue-600" size={20} />
                Pro Tip for Accurate Calculations
              </h3>
              <p className="text-gray-700">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Use Our Asphalt Calculator?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Asphalt Calculation for Every Project
              </h3>
              <p className="text-gray-700 mb-4">
                Whether you're a homeowner planning a driveway renovation, a contractor bidding on a commercial paving
                project, or a property manager maintaining parking lots, our asphalt calculator provides the accurate
                material estimates you need. The calculator uses industry-standard formulas and density values to ensure
                your asphalt tonnage calculations are precise and reliable.
              </p>
              <p className="text-gray-700 mb-4">
                Our free asphalt calculator helps you determine exactly how much asphalt material you need, reducing waste
                and saving money on your paving project. By calculating the correct tonnage and volume, you can order the
                right amount of hot mix asphalt from your supplier and avoid costly delays or excess material charges.
              </p>
              <p className="text-gray-700">
                The asphalt calculator supports both imperial and metric units, making it easy to work with measurements
                in feet, yards, meters, or any other unit. Results are displayed in multiple formats including cubic yards,
                cubic meters, tons, and pounds, giving you flexibility for material ordering and cost estimation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Calculate Your Asphalt Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get accurate material estimates and cost breakdowns for your paving project in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#calculator"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Calculator size={20} />
              Use Calculator Now
            </a>
            <Link
              href="/faq"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center gap-2"
            >
              <HelpCircle size={20} />
              View FAQ
            </Link>
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
