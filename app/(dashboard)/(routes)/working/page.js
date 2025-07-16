'use client';

import Header from '../../../_components/Header';
import Link from 'next/link';
import { FiUpload, FiLink, FiLock, FiMail, FiCheck } from 'react-icons/fi';
import SectionHeader from '../../../_components/ui/SectionHeader';

const HowItWorksPage = () => {
  const steps = [
    {
      number: '01',
      title: 'Upload Your File',
      description: 'Drag and drop your file or click to browse. Our system supports all major file types with a simple, intuitive interface.',
      icon: <FiUpload className="w-6 h-6 text-blue-600" />,
      features: [
        'Drag & Drop or click to select files',
        'Supports all file types',
        'Fast, secure uploads'
      ]
    },
    {
      number: '02',
      title: 'Get Shareable Link',
      description: 'Instantly receive a secure, shareable link to your file. Copy it with a single click.',
      icon: <FiLink className="w-6 h-6 text-blue-600" />,
      features: [
        'One-click copy link',
        'Short, easy-to-share URLs',
        'Link expiration options'
      ]
    },
    {
      number: '03',
      title: 'Add Security (Optional)',
      description: 'Protect your files with password and set expiration dates for extra security.',
      icon: <FiLock className="w-6 h-6 text-blue-600" />,
      features: [
        'Password protection',
        'Link expiration',
        'Download limits'
      ]
    },
    {
      number: '04',
      title: 'Share & Track',
      description: 'Send files via email or share the link. Track downloads and manage your shared files.',
      icon: <FiMail className="w-6 h-6 text-blue-600" />,
      features: [
        'Email notifications',
        'Download tracking',
        'Easy file management'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How XferLink Works</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Simple, secure file sharing in just a few clicks
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Easy as 1-2-3-4"
            subtitle="Share files quickly and securely in just a few simple steps"
            center
          />
          
          <div className="mt-16 space-y-20">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 text-xl font-bold mr-4">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="bg-white p-6 rounded-lg shadow-sm h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 mb-4">
                        {step.icon}
                      </div>
                      <h4 className="text-lg font-medium text-gray-900">Step {step.number}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to share files the easy way?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of users who trust XferLink for their file sharing needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/upload" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Start Sharing for Free
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default HowItWorksPage;