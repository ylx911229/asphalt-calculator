import type { Metadata } from 'next';
import { pageSEO } from '@/lib/seo';
import CostCalculator from '@/components/CostCalculator';
import { DollarSign, TrendingUp, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: pageSEO.cost.title,
  description: pageSEO.cost.description,
  keywords: pageSEO.cost.keywords,
  alternates: {
    canonical: pageSEO.cost.canonical,
  },
};

export default function CostCalculatorPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-emerald-400/30 text-emerald-100 text-sm font-medium mb-6">
              <DollarSign size={16} />
              <span>Project Cost Estimation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Asphalt Driveway Cost Calculator
            </h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Calculate complete project costs including materials, labor, and base preparation for your asphalt paving project
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 relative -mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative z-20">
            <CostCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Understanding Asphalt Driveway Costs
              </h2>
              <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 mb-6 leading-relaxed">
                The cost of an asphalt driveway varies significantly based on project size, location, and site conditions.
                Our asphalt driveway cost calculator provides detailed estimates by breaking down expenses into three main
                categories: material costs, labor costs, and base preparation costs. Understanding these cost components
                helps you budget accurately and make informed decisions about your paving project.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">1</span>
                    Material Costs
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Typically range from <strong>$40-80 per ton</strong>. A standard residential driveway requires 2-4 inches of asphalt thickness (approx. 0.5-1.0 tons per 100 sq ft).
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">2</span>
                    Labor Costs
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Generally range from <strong>$2-4 per square foot</strong>, covering equipment operation, paving, and compaction by professional crews.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:col-span-2">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">3</span>
                    Base Preparation
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Adds another <strong>$1-2 per square foot</strong> for excavation, grading, and installing 4-6 inches of compacted gravel base. Essential for longevity.
                  </p>
                </div>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Total asphalt driveway cost typically ranges from <strong>$3-7 per square foot installed</strong>. A 400 square foot driveway
                costs $1,200-$2,800 on average, while a 1,000 square foot driveway costs $3,000-$7,000. Larger projects
                benefit from economies of scale with lower per-square-foot costs. Use our asphalt driveway cost calculator
                to get accurate estimates tailored to your project size and specifications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
