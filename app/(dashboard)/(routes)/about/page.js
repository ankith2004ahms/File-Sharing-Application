'use client';

'use client';

import Header from '../../../_components/Header';
import Link from 'next/link';
import { FiLock, FiZap, FiGlobe, FiMail, FiUpload, FiLink, FiUser } from 'react-icons/fi';
import SectionHeader from '../../../_components/ui/SectionHeader';
import FeatureCard from '../../../_components/ui/FeatureCard';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About XferLink</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Empowering seamless and secure file sharing for everyone
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Mission"
            subtitle="Bridging the gap between speed, security, and simplicity in file sharing"
            center
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                At <span className="font-semibold text-blue-600">XferLink</span>, we believe that sharing files should be effortless, secure, and accessible to everyone. 
                Our mission is to provide a platform that simplifies file sharing without compromising on speed or security.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're sending important documents to colleagues or sharing memories with friends, 
                XferLink ensures your files are transferred quickly and securely.
              </p>
              <div className="mt-8">
                <Link 
                  href="/upload" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Start Sharing for Free
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <FiUpload className="w-16 h-16 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Why Choose XferLink?"
            subtitle="Experience the difference with our powerful features"
            center
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard 
              icon={<FiZap className="w-6 h-6" />}
              title="Lightning Fast"
            >
              Experience blazing-fast upload and download speeds with our optimized infrastructure.
            </FeatureCard>
            
            <FeatureCard 
              icon={<FiLock className="w-6 h-6" />}
              title="Bank-Grade Security"
            >
              Your files are protected with end-to-end encryption and secure password options.
            </FeatureCard>
            
            <FeatureCard 
              icon={<FiLink className="w-6 h-6" />}
              title="Simple Sharing"
            >
              Generate short, easy-to-share links with just one click.
            </FeatureCard>
            
            <FeatureCard 
              icon={<FiGlobe className="w-6 h-6" />}
              title="Access Anywhere"
            >
              Access and share your files from any device, anywhere in the world.
            </FeatureCard>
            
            <FeatureCard 
              icon={<FiUser className="w-6 h-6" />}
              title="User-Friendly"
            >
              Intuitive interface that anyone can use, no technical skills required.
            </FeatureCard>
            
            <FeatureCard 
              icon={<FiMail className="w-6 h-6" />}
              title="Email Integration"
            >
              Share files directly via email with built-in integration.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to experience better file sharing?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of happy users who trust XferLink for their file sharing needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/upload" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Get Started for Free
              </Link>
              <Link 
                href="/working" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 bg-opacity-20 hover:bg-opacity-30 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                How It Works →
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutPage;