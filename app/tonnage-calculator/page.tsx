import type { Metadata } from 'next';
import { Scale } from 'lucide-react';
import { pageSEO } from '@/lib/seo';
import AsphaltCalculator from '@/components/AsphaltCalculator';

export const metadata: Metadata = {
  title: pageSEO.tonnage.title,
  description: pageSEO.tonnage.description,
  keywords: pageSEO.tonnage.keywords,
};

export default function TonnagePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Asphalt Tonnage Calculator
            </h1>
            <p className="text-xl text-indigo-100">
              Calculate accurate asphalt tonnage and weight for material ordering and project planning
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AsphaltCalculator />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How to Calculate Asphalt Tonnage
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Calculating asphalt tonnage accurately is essential for ordering the correct amount of material for your
                paving project. Our asphalt tonnage calculator uses industry-standard density values to convert volume
                measurements into weight. The calculation involves three steps: determining the volume of asphalt needed,
                applying the appropriate density factor, and converting to tons for material ordering.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Standard hot mix asphalt has a density of approximately 2400 kg/m³ (150 lbs/ft³). This means one cubic
                yard of asphalt weighs about 2.2 tons or 4,400 pounds. The asphalt ton calculator accounts for different
                mix densities - light mixes around 2200 kg/m³ and dense graded mixes up to 2500 kg/m³. Using the correct
                density ensures accurate tonnage calculations for your specific asphalt mix.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To calculate asphalt tonnage manually, multiply length × width × thickness to get volume, then multiply
                by the density and convert to tons. For example, a 20 ft × 10 ft × 3 inch driveway equals 50 cubic feet
                or 1.85 cubic yards. At 2.2 tons per cubic yard, this requires approximately 4.1 tons of asphalt. Our
                asphalt tonnage calculator performs these calculations instantly with support for multiple measurement units.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Always order 5-10% extra asphalt tonnage to account for compaction, waste, and irregular areas. Asphalt
                compacts during installation, reducing volume by approximately 5-8%. The asphalt ton calculator provides
                base estimates - discuss your specific project with suppliers to determine if additional material is needed
                for your site conditions. Proper tonnage calculation prevents costly delays from material shortages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
