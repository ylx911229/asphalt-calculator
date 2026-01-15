import type { Metadata } from 'next';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { pageSEO } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageSEO.faq.title,
  description: pageSEO.faq.description,
  keywords: pageSEO.faq.keywords,
  alternates: {
    canonical: pageSEO.faq.canonical,
  },
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-400/30 text-blue-100 text-sm font-medium mb-6">
              <MessageCircle size={16} />
              <span>Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Asphalt Calculator FAQ
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Find answers to common questions in our <strong>asphalt calculator FAQ</strong> about asphalt calculations, costs, installation, and maintenance
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Common Questions & Answers
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 group overflow-hidden transition-all hover:shadow-md"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors select-none">
                    <h3 className="text-lg font-bold text-slate-900 pr-4">{faq.question}</h3>
                    <div className="bg-slate-100 p-1.5 rounded-full group-open:bg-blue-100 transition-colors">
                      <ChevronDown className="text-slate-500 group-open:rotate-180 group-open:text-blue-600 transition-all duration-300" size={20} />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-0 animate-fade-in">
                    <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
