'use client';

export default function SectionHeader({ title, subtitle, center = false }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-12`}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
