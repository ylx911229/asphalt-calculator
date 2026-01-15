import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: 'Terms of Service for Asphalt Calculator. Please read these terms carefully before using our website.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 text-slate-100 text-sm font-medium mb-6">
              <FileText size={16} />
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight" style={{ color: 'white' }}>
              Terms of Service
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 prose prose-slate prose-lg">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the {siteConfig.url} website (the "Service") operated by Asphalt Calculator ("us", "we", or "our").
            </p>
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </p>

            <h3>1. Educational Purpose Only</h3>
            <p>
              The content provided on this website, including calculators, guides, and articles, is for general informational and educational purposes only. It is not intended to provide professional engineering, construction, or financial advice.
            </p>
            <p>
              While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>

            <h3>2. Calculator Disclaimer</h3>
            <p>
              The calculators provided on this website are tools for estimation only. Actual material requirements and costs may vary significantly based on:
            </p>
            <ul>
              <li>Local material prices and labor rates</li>
              <li>Specific site conditions (slope, soil type, drainage)</li>
              <li>Project complexity</li>
              <li>Waste and compaction factors</li>
              <li>Local building codes and regulations</li>
            </ul>
            <p>
              You should always consult with qualified professional contractors and engineers for precise project requirements and quotes. We are not responsible for any errors, omissions, or losses resulting from the use of our calculators.
            </p>

            <h3>3. Intellectual Property</h3>
            <p>
              The Service and its original content, features and functionality are and will remain the exclusive property of Asphalt Calculator and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Asphalt Calculator.
            </p>

            <h3>4. Links To Other Web Sites</h3>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Asphalt Calculator.
            </p>
            <p>
              Asphalt Calculator has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Asphalt Calculator shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>

            <h3>5. Termination</h3>
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h3>6. Limitation of Liability</h3>
            <p>
              In no event shall Asphalt Calculator, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>

            <h3>7. Changes</h3>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
            </p>

            <h3>8. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us by email: support@asphalt-calculator.net
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
