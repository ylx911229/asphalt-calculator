import type { Metadata } from 'next';
import { Scale } from 'lucide-react';
import { pageSEO } from '@/lib/seo';
import AsphaltCalculator from '@/components/AsphaltCalculator';

export const metadata: Metadata = {
  title: pageSEO.tonnage.title,
  description: pageSEO.tonnage.description,
  keywords: pageSEO.tonnage.keywords,
  alternates: {
    canonical: pageSEO.tonnage.canonical,
  },
};

export default function TonnagePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-indigo-400/30 text-indigo-100 text-sm font-medium mb-6">
              <Scale size={16} />
              <span>Precise Material Estimation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Asphalt Tonnage Calculator
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed max-w-2xl mx-auto">
              Calculate accurate asphalt tonnage and weight for material ordering and project planning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 relative -mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative z-20">
            <AsphaltCalculator />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How to Calculate Asphalt Tonnage
              </h2>
              <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="prose prose-slate prose-lg max-w-none">
              <p className="text-slate-600 mb-6 leading-relaxed">
                Calculating asphalt tonnage accurately is essential for ordering the correct amount of material for your
                paving project. Our asphalt tonnage calculator uses industry-standard density values to convert volume
                measurements into weight. The calculation involves three steps: determining the volume of asphalt needed,
                applying the appropriate density factor, and converting to tons for material ordering.
              </p>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 my-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Standard Density Values</h3>
                <p className="text-slate-600 mb-4">
                  Standard hot mix asphalt has a density of approximately <strong>2400 kg/m³ (150 lbs/ft³)</strong>. This means:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-slate-700">
                  <li>1 cubic yard ≈ 2.2 tons (4,400 lbs)</li>
                  <li>1 cubic meter ≈ 2.4 tonnes</li>
                </ul>
                <p className="text-slate-600 mt-4 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <strong>Note:</strong> Different mixes have different densities. Light mixes are around 2200 kg/m³, while dense graded mixes can be up to 2500 kg/m³.
                </p>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                To calculate asphalt tonnage manually, multiply <strong>length × width × thickness</strong> to get volume, then multiply
                by the density and convert to tons. For example, a 20 ft × 10 ft × 3 inch driveway equals 50 cubic feet
                or 1.85 cubic yards. At 2.2 tons per cubic yard, this requires approximately 4.1 tons of asphalt. Our
                asphalt tonnage calculator performs these calculations instantly with support for multiple measurement units.
              </p>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-xl my-8">
                <h4 className="font-bold text-indigo-900 mb-2">Pro Tip: Order Extra Material</h4>
                <p className="text-indigo-800 text-sm">
                  Always order <strong>5-10% extra asphalt tonnage</strong> to account for compaction, waste, and irregular areas. Asphalt
                  compacts during installation, reducing volume by approximately 5-8%.
                </p>
              </div>

              <p className="text-slate-600 mb-6 leading-relaxed">
                The asphalt ton calculator provides base estimates - discuss your specific project with suppliers to determine if additional material is needed
                for your site conditions. Proper tonnage calculation prevents costly delays from material shortages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
