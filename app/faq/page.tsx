import type { Metadata } from 'next';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { pageSEO } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSEO.faq.title,
  description: pageSEO.faq.description,
  keywords: pageSEO.faq.keywords,
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'How much asphalt do I need for a driveway?',
      answer: 'To calculate asphalt needed for a driveway, multiply the length by width by thickness to get volume. A typical residential driveway (20 ft x 10 ft x 3 inches) requires approximately 1.85 cubic yards or 4.5 tons of asphalt. Use our asphalt calculator above to get precise measurements for your specific driveway dimensions.',
    },
    {
      question: 'How to calculate asphalt tonnage?',
      answer: 'Asphalt tonnage is calculated by multiplying the volume (in cubic meters) by the asphalt density (typically 2400 kg/m³ for standard hot mix) and dividing by 1000. For example, 5 cubic meters of asphalt equals 12 metric tons. Our asphalt tonnage calculator automatically performs this calculation using industry-standard density values.',
    },
    {
      question: 'What is the cost per square foot for asphalt?',
      answer: 'Asphalt driveway cost typically ranges from $3 to $7 per square foot installed, depending on location, thickness, base preparation, and project size. Material costs alone are $1-3 per square foot. A 400 square foot driveway costs $1,200-$2,800 on average. Use our cost calculator to get detailed estimates including materials, labor, and base preparation for your specific project.',
    },
    {
      question: 'Asphalt vs concrete: which is cheaper?',
      answer: 'Asphalt is generally cheaper than concrete for initial installation. Asphalt costs $3-7 per square foot while concrete costs $4-10 per square foot. However, asphalt requires more frequent maintenance (seal coating every 2-3 years). Over 20 years, total costs may be similar. Asphalt is better for cold climates and quick installation, while concrete lasts longer and requires less maintenance.',
    },
    {
      question: 'How thick should asphalt be for a driveway?',
      answer: 'Residential driveways should be 2-4 inches thick, with 3 inches being the most common. Commercial parking lots need 3-5 inches. Heavy traffic areas require 6-8 inches or more. The asphalt should be laid over a 4-6 inch compacted gravel base for proper support and drainage. Thicker asphalt provides better durability and longer lifespan.',
    },
    {
      question: 'How many tons of asphalt are in a cubic yard?',
      answer: 'One cubic yard of asphalt weighs approximately 2.0-2.5 tons (4,000-5,000 pounds), depending on the mix density. Standard hot mix asphalt at 2400 kg/m³ density equals about 2.2 tons per cubic yard. Our calculator uses industry-standard density values to provide accurate tonnage estimates for material ordering.',
    },
    {
      question: 'What is the difference between asphalt and blacktop?',
      answer: 'Asphalt and blacktop are essentially the same material - a mixture of aggregate (stone, sand, gravel) and bitumen binder. "Blacktop" is a colloquial term often used for residential driveways, while "asphalt" is the technical term used in the paving industry. Both refer to hot mix asphalt (HMA) used for paving roads, driveways, and parking lots.',
    },
    {
      question: 'How long does asphalt take to cure?',
      answer: 'Asphalt can be driven on after 24-48 hours, but full curing takes 6-12 months. Avoid heavy vehicles and sharp turns for the first week. Wait 90 days before seal coating new asphalt. Temperature affects curing time - warmer weather speeds up the process. The asphalt continues to harden and gain strength over the first year.',
    },
    {
      question: 'Can I install asphalt over existing concrete?',
      answer: 'Yes, asphalt can be installed over existing concrete if the concrete is in good condition (no major cracks or settling). The concrete must be clean, stable, and properly prepared. An asphalt overlay is typically 1.5-2 inches thick. This is a cost-effective option compared to removing concrete, but the asphalt lifespan may be shorter than installation over a proper gravel base.',
    },
    {
      question: 'How often should asphalt be seal coated?',
      answer: 'Asphalt driveways should be seal coated every 2-3 years to protect against weather, UV damage, and chemicals. Wait 90 days to 1 year after new installation before the first seal coat. Regular seal coating extends asphalt lifespan from 15-20 years to 25-30 years. Cost is $0.15-0.25 per square foot, making it a cost-effective maintenance investment.',
    },
    {
      question: 'What temperature is needed to lay asphalt?',
      answer: 'Asphalt should be installed when air temperature is at least 50°F (10°C) and rising. Ideal paving temperature is 70°F (21°C) or higher. The asphalt mix itself is heated to 275-325°F (135-163°C) during installation. Cold weather causes asphalt to cool too quickly, preventing proper compaction. Spring through fall is the best season for asphalt paving in most climates.',
    },
    {
      question: 'How do I calculate asphalt for an irregular shape?',
      answer: 'For irregular shapes, break the area into rectangles, triangles, or circles. Calculate each section separately using our asphalt calculator, then add the results together. For curved areas, use the formula for circle area (πr²) or approximate with rectangles. Always add 5-10% extra material for waste and compaction. Professional contractors can provide more accurate measurements for complex shapes.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <HelpCircle size={48} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Asphalt Calculator FAQ
            </h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about asphalt calculations, costs, installation, and maintenance
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-lg shadow-md border border-gray-200 group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown className="text-blue-600 flex-shrink-0 group-open:rotate-180 transition-transform" size={24} />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions About Asphalt Calculations?
              </h2>
              <p className="text-gray-700 mb-6">
                Our asphalt calculator tools are designed to provide accurate estimates for your paving project.
                For complex projects or specific technical questions, we recommend consulting with a professional
                paving contractor who can assess your site conditions and provide detailed specifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Use Asphalt Calculator
                </a>
                <a
                  href="/guide"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  View Paving Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
