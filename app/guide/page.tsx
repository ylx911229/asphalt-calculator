import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Ruler, DollarSign, Calendar, Wrench, AlertCircle, CheckSquare } from 'lucide-react';
import { pageSEO } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSEO.guide.title,
  description: pageSEO.guide.description,
  keywords: pageSEO.guide.keywords,
  alternates: {
    canonical: pageSEO.guide.canonical,
  },
};

export default function GuidePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-400/30 text-blue-100 text-sm font-medium mb-6">
              <BookOpen size={16} />
              <span>Comprehensive Knowledge Base</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Complete Asphalt Paving Guide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about asphalt calculations, installation, costs, and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-slate prose-lg max-w-none mb-16">
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Planning an asphalt paving project requires careful calculation of materials, understanding of costs,
                and knowledge of proper installation techniques. This comprehensive <strong>asphalt paving guide</strong> covers everything from using
                an asphalt calculator to determine material requirements, to understanding thickness specifications,
                cost factors, and maintenance best practices.
              </p>
            </div>

            {/* Thickness Guidelines */}
            <div id="thickness" className="mb-20 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Ruler className="text-blue-600" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Asphalt Thickness Guidelines</h2>
                  <p className="text-slate-500">Critical standards for durability</p>
                </div>
              </div>

              <div className="prose prose-slate prose-lg max-w-none mb-8">
                <p>
                  Proper asphalt thickness is critical for durability and longevity. The required thickness depends on
                  the application, expected traffic load, and climate conditions. Using an asphalt calculator with the
                  correct thickness ensures you order the right amount of material for your project. Insufficient
                  thickness leads to premature cracking and failure.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="px-6 py-5 font-bold text-slate-700 uppercase text-xs tracking-wider">Application</th>
                        <th className="px-6 py-5 font-bold text-slate-700 uppercase text-xs tracking-wider">Minimum</th>
                        <th className="px-6 py-5 font-bold text-slate-700 uppercase text-xs tracking-wider">Recommended</th>
                        <th className="px-6 py-5 font-bold text-slate-700 uppercase text-xs tracking-wider">Heavy Duty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">Residential Driveway</td>
                        <td className="px-6 py-4 text-slate-600">2 inches</td>
                        <td className="px-6 py-4 text-blue-600 font-medium">3 inches</td>
                        <td className="px-6 py-4 text-slate-600">4 inches</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">Walkways & Paths</td>
                        <td className="px-6 py-4 text-slate-600">2 inches</td>
                        <td className="px-6 py-4 text-blue-600 font-medium">2.5 inches</td>
                        <td className="px-6 py-4 text-slate-600">3 inches</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">Commercial Parking</td>
                        <td className="px-6 py-4 text-slate-600">3 inches</td>
                        <td className="px-6 py-4 text-blue-600 font-medium">4 inches</td>
                        <td className="px-6 py-4 text-slate-600">5 inches</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-slate-900">Heavy Traffic Roads</td>
                        <td className="px-6 py-4 text-slate-600">6 inches</td>
                        <td className="px-6 py-4 text-blue-600 font-medium">8 inches</td>
                        <td className="px-6 py-4 text-slate-600">10+ inches</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Cost Factors */}
            <div id="cost-factors" className="mb-20 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-emerald-100 p-4 rounded-2xl">
                  <DollarSign className="text-emerald-600" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Cost Factors</h2>
                  <p className="text-slate-500">Understanding your quote</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">Geographic Location</h3>
                  <p className="text-slate-600">
                    Material and labor costs vary by region. Transportation costs for hot asphalt mix increase with distance from the plant.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">Site Preparation</h3>
                  <p className="text-slate-600">
                    Existing driveway removal, excavation, grading, and base installation significantly impact total project cost.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">Drainage Requirements</h3>
                  <p className="text-slate-600">
                    Additional drainage solutions like culverts, drains, or extensive grading add to the complexity and cost.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">Oil Prices</h3>
                  <p className="text-slate-600">
                    Asphalt is a petroleum product. Fluctuations in crude oil prices directly affect material costs per ton.
                  </p>
                </div>
              </div>
            </div>

            {/* Maintenance */}
            <div className="mb-20">
               <div className="flex items-center gap-4 mb-8">
                <div className="bg-amber-100 p-4 rounded-2xl">
                  <Wrench className="text-amber-600" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Maintenance & Care</h2>
                  <p className="text-slate-500">Extending driveway lifespan</p>
                </div>
              </div>

              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-amber-600 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-slate-900 block">Seal Coating</span>
                      <span className="text-slate-700">Apply seal coat every 2-3 years to protect against UV rays and water penetration.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-amber-600 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-slate-900 block">Crack Filling</span>
                      <span className="text-slate-700">Fill cracks immediately to prevent water from damaging the sub-base and causing potholes.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-amber-600 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-slate-900 block">Proper Drainage</span>
                      <span className="text-slate-700">Ensure water flows away from the asphalt surface and edges to prevent erosion.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="text-amber-600 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-bold text-slate-900 block">Curing Time</span>
                      <span className="text-slate-700">Avoid heavy vehicles and sharp turns on new asphalt for at least 6-12 months.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-4">Ready to calculate your project?</h2>
                 <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                   Use our free calculator to estimate materials and costs for your next paving job.
                 </p>
                 <Link 
                   href="/" 
                   className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25"
                 >
                   Go to Calculator
                 </Link>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
