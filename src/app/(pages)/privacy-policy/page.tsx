
import type { Metadata } from 'next';
import PageHeader from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_ADDRESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Privacy policy for ${SITE_NAME}. Learn how we collect, use, and protect your data for our heat treatment services.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 max-w-4xl py-12">
      <PageHeader
        title="Privacy Policy"
        description={`Your privacy is important to us. This policy outlines how ${SITE_NAME} handles your personal information.`}
        className="mb-12"
      />
      
      <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us through our contact forms, such as your name, email address, phone number, city, and any details regarding your industrial heat treatment or induction hardening requirements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
          <p>We use the collected information primarily to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Respond to your service inquiries and provide quotations.</li>
            <li>Communicate regarding ongoing job work or projects.</li>
            <li>Improve our website and customer service experience.</li>
            <li>Send occasional updates about our heat treatment capabilities (you can opt-out at any time).</li>
          </ul>
          <p className="mt-4">We do not sell, trade, or otherwise transfer your personal data to outside parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your data. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
          <p>Our website may use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
          <p>If there are any questions regarding this privacy policy, you may contact us using the information below:</p>
          <div className="mt-4 bg-secondary p-6 rounded-lg border">
            <p className="font-bold text-foreground">{SITE_NAME}</p>
            <p className="mt-1">{SITE_ADDRESS}</p>
            <p className="mt-1">Email: sales@thakurinduction.com</p>
          </div>
        </section>

        <section className="pt-8 border-t border-border text-sm italic">
          <p>Last Updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </section>
      </div>
    </div>
  );
}
