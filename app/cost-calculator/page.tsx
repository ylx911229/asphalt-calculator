import type { Metadata } from 'next';
import { pageSEO } from '@/lib/seo';
import CostCalculator from '@/components/CostCalculator';
import { DollarSign, TrendingUp, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: pageSEO.cost.title,
  description: pageSEO.cost.description,
  keywords: pageSEO.cost.keywords,
};

export default function CostCalculatorPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Asphalt Driveway Cost Calculator
            </h1>
            <p className="text-xl text-green-100">
              Calculate complete project costs including materials, labor, and base preparation for your asphalt paving project
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CostCalculator />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Asphalt Driveway Costs
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                The cost of an asphalt driveway varies significantly based on project size, location, and site conditions.
                Our asphalt driveway cost calculator provides detailed estimates by breaking down expenses into three main
                categories: material costs, labor costs, and base preparation costs. Understanding these cost components
                helps you budget accurately and make informed decisions about your paving project.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Material costs for asphalt typically range from $40-80 per ton, depending on crude oil prices and local
                market conditions. A standard residential driveway requires 2-4 inches of asphalt thickness, which translates
                to approximately 0.5-1.0 tons per 100 square feet. The asphalt cost calculator uses these industry-standard
                values to provide accurate material estimates for your specific project dimensions.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Labor costs for asphalt installation generally range from $2-4 per square foot, covering equipment operation,
                paving, and compaction. Professional installation ensures proper thickness, adequate compaction, and correct
                drainage slope. Base preparation costs add another $1-2 per square foot for excavation, grading, and installing
                4-6 inches of compacted gravel base. The cost of asphalt driveway calculator accounts for all these factors
                to give you a comprehensive project estimate.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Total asphalt driveway cost typically ranges from $3-7 per square foot installed. A 400 square foot driveway
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
