import type { Metadata } from 'next';
import { Shield } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: 'Privacy Policy for Asphalt Calculator. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 text-slate-100 text-sm font-medium mb-6">
              <Shield size={16} />
              <span>Your Data Protection</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight" style={{ color: 'white' }}>
              Privacy Policy
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
              At Asphalt Calculator ("we," "our," or "us"), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website {siteConfig.url} (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
              We collect minimal information to provide you with a better experience. The types of information we may collect include:
            </p>
            <ul>
              <li><strong>Usage Data:</strong> We may collect information on how the Service is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>
              We use the collected data for various purposes:
            </p>
            <ul>
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h3>3. Calculation Data</h3>
            <p>
              Any data you enter into our calculators (such as dimensions, costs, etc.) is processed locally on your device or temporarily on our servers solely for the purpose of generating the calculation results. We do not store your specific project calculation data on our servers after the calculation is complete.
            </p>

            <h3>4. Third-Party Services</h3>
            <p>
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <p>
              <strong>Google Analytics:</strong> We may use Google Analytics to monitor and analyze the use of our Service. Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.
            </p>

            <h3>5. Security of Data</h3>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h3>6. Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h3>7. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us by email: support@asphalt-calculator.net
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
