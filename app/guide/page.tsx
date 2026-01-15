import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Ruler, DollarSign, Calendar, Wrench, AlertCircle } from 'lucide-react';
import { pageSEO } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSEO.guide.title,
  description: pageSEO.guide.description,
  keywords: pageSEO.guide.keywords,
};

export default function GuidePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <BookOpen size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Asphalt Paving Guide
            </h1>
            <p className="text-xl text-blue-100">
              Everything you need to know about asphalt calculations, installation, costs, and maintenance
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Planning an asphalt paving project requires careful calculation of materials, understanding of costs,
                and knowledge of proper installation techniques. This comprehensive guide covers everything from using
                an asphalt calculator to determine material requirements, to understanding thickness specifications,
                cost factors, and maintenance best practices. Whether you're a homeowner planning a driveway renovation
                or a contractor bidding on commercial paving projects, this guide provides the essential information
                you need for successful asphalt installation.
              </p>
            </div>

            {/* Thickness Guidelines */}
            <div id="thickness" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Ruler className="text-blue-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Asphalt Thickness Guidelines</h2>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Proper asphalt thickness is critical for durability and longevity. The required thickness depends on
                the application, expected traffic load, and climate conditions. Using an asphalt calculator with the
                correct thickness ensures you order the right amount of material for your project. Insufficient
                thickness leads to premature cracking and failure, while excessive thickness wastes money without
                providing additional benefits.
              </p>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Application</th>
                      <th className="px-6 py-4 text-left font-semibold">Minimum</th>
                      <th className="px-6 py-4 text-left font-semibold">Recommended</th>
                      <th className="px-6 py-4 text-left font-semibold">Heavy Duty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Residential Driveway</td>
                      <td className="px-6 py-4 text-gray-700">2 inches</td>
                      <td className="px-6 py-4 text-gray-700">3 inches</td>
                      <td className="px-6 py-4 text-gray-700">4 inches</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Walkways & Paths</td>
                      <td className="px-6 py-4 text-gray-700">2 inches</td>
                      <td className="px-6 py-4 text-gray-700">2.5 inches</td>
                      <td className="px-6 py-4 text-gray-700">3 inches</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Commercial Parking</td>
                      <td className="px-6 py-4 text-gray-700">3 inches</td>
                      <td className="px-6 py-4 text-gray-700">4 inches</td>
                      <td className="px-6 py-4 text-gray-700">5 inches</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Heavy Traffic Roads</td>
                      <td className="px-6 py-4 text-gray-700">6 inches</td>
                      <td className="px-6 py-4 text-gray-700">8 inches</td>
                      <td className="px-6 py-4 text-gray-700">10+ inches</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex gap-3">
                  <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Base Layer Importance</h4>
                    <p className="text-gray-700">
                      Asphalt thickness alone doesn't determine pavement strength. A proper base layer of 4-6 inches
                      of compacted gravel is essential for load distribution and drainage. The asphalt calculator
                      calculates only the asphalt layer - remember to account for base preparation costs separately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Factors */}
            <div id="cost-factors" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <DollarSign className="text-green-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Understanding Asphalt Costs</h2>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Asphalt driveway cost varies significantly based on multiple factors. Understanding these cost
                components helps you budget accurately and make informed decisions. Our asphalt cost calculator
                breaks down expenses into material, labor, and base preparation to provide comprehensive estimates.
                National averages range from $3-7 per square foot installed, but your actual costs depend on local
                market conditions and project specifics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Material Costs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span className="text-gray-700">
                        <strong>Asphalt Mix:</strong> $40-80 per ton depending on oil prices and mix type
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span className="text-gray-700">
                        <strong>Base Material:</strong> $10-30 per ton for gravel or crushed stone
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">•</span>
                      <span className="text-gray-700">
                        <strong>Delivery Fees:</strong> $50-150 depending on distance and quantity
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Labor & Installation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span className="text-gray-700">
                        <strong>Site Preparation:</strong> $1-2 per square foot for grading and base
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span className="text-gray-700">
                        <strong>Paving Labor:</strong> $2-4 per square foot for installation and compaction
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">•</span>
                      <span className="text-gray-700">
                        <strong>Equipment:</strong> Included in labor or $200-500 for small projects
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Factors Affecting Asphalt Cost</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Project-Specific Factors:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Project size (larger projects have lower per-square-foot costs)</li>
                      <li>• Site accessibility and terrain difficulty</li>
                      <li>• Existing surface removal requirements</li>
                      <li>• Drainage and grading needs</li>
                      <li>• Edge details and finishing requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Market Factors:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Geographic location and local labor rates</li>
                      <li>• Seasonal demand (spring/summer peak pricing)</li>
                      <li>• Crude oil prices (affects asphalt binder cost)</li>
                      <li>• Local competition among contractors</li>
                      <li>• Distance from asphalt plant to job site</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Installation Best Practices */}
            <div id="installation" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Wrench className="text-purple-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Installation Best Practices</h2>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Proper asphalt installation is crucial for achieving a durable, long-lasting pavement surface. Even
                with accurate asphalt calculator results and quality materials, poor installation techniques can lead
                to premature failure. Professional installation ensures proper compaction, drainage, and edge support
                that maximize your asphalt investment. Understanding the installation process helps you evaluate
                contractor quality and ensure your project meets industry standards.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Site Preparation</h3>
                  <p className="text-gray-700 mb-3">
                    Remove existing pavement, vegetation, and topsoil. Excavate to proper depth (typically 8-12 inches
                    total for asphalt plus base). Grade the subgrade for proper drainage with minimum 2% slope. Compact
                    the subgrade to prevent settling. Poor site preparation is the leading cause of asphalt failure.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Base Installation</h3>
                  <p className="text-gray-700 mb-3">
                    Install 4-6 inches of crushed stone or gravel base material. Compact in 2-inch lifts using a
                    vibratory roller. Proper base compaction is critical - it should be firm enough to walk on without
                    leaving footprints. The base distributes loads and provides drainage, preventing asphalt cracking.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Asphalt Application</h3>
                  <p className="text-gray-700 mb-3">
                    Apply hot mix asphalt at 275-325°F. Use a paver for uniform thickness and smooth surface. Install
                    in lifts no thicker than 3 inches for proper compaction. Compact immediately while hot using a
                    roller, starting at edges and working toward center. Proper compaction achieves 92-96% density.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4. Finishing & Curing</h3>
                  <p className="text-gray-700 mb-3">
                    Ensure smooth transitions at edges and joints. Install edge support (concrete curbs or compacted
                    soil) to prevent edge cracking. Allow 24-48 hours before light traffic. Avoid heavy vehicles and
                    sharp turns for one week. Full curing takes 6-12 months. Wait 90 days before seal coating new asphalt.
                  </p>
                </div>
              </div>
            </div>

            {/* Maintenance */}
            <div id="maintenance" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Calendar className="text-red-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Maintenance & Longevity</h2>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Regular maintenance extends asphalt lifespan from 15-20 years to 25-30 years or more. Preventive
                maintenance is far more cost-effective than major repairs or replacement. A well-maintained asphalt
                surface calculated with our asphalt calculator and properly installed can provide decades of service.
                Understanding maintenance requirements helps you budget for long-term ownership costs beyond the
                initial installation calculated by the asphalt cost calculator.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Regular Maintenance Tasks</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <div>
                        <strong className="text-gray-900">Seal Coating:</strong>
                        <p className="text-gray-700 text-sm">Every 2-3 years to protect against weather and UV damage</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <div>
                        <strong className="text-gray-900">Crack Filling:</strong>
                        <p className="text-gray-700 text-sm">Annually to prevent water infiltration and expansion</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <div>
                        <strong className="text-gray-900">Cleaning:</strong>
                        <p className="text-gray-700 text-sm">Remove debris, oil stains, and vegetation regularly</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <div>
                        <strong className="text-gray-900">Drainage:</strong>
                        <p className="text-gray-700 text-sm">Keep edges clear and repair drainage issues promptly</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Signs of Needed Repairs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">!</span>
                      <div>
                        <strong className="text-gray-900">Alligator Cracking:</strong>
                        <p className="text-gray-700 text-sm">Interconnected cracks indicating base failure</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">!</span>
                      <div>
                        <strong className="text-gray-900">Potholes:</strong>
                        <p className="text-gray-700 text-sm">Requires immediate patching to prevent expansion</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">!</span>
                      <div>
                        <strong className="text-gray-900">Rutting:</strong>
                        <p className="text-gray-700 text-sm">Depressions from heavy loads or poor compaction</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold mt-1">!</span>
                      <div>
                        <strong className="text-gray-900">Edge Deterioration:</strong>
                        <p className="text-gray-700 text-sm">Crumbling edges need support and repair</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Calculate Your Asphalt Project?</h2>
              <p className="text-xl text-blue-100 mb-6">
                Use our free asphalt calculator to get accurate material and cost estimates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Asphalt Calculator
                </Link>
                <Link
                  href="/cost-calculator"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Cost Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
