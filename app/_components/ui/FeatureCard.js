'use client';

export default function FeatureCard({ icon, title, children, className = '' }) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 ${className}`}>
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}
