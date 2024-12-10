import React from 'react';
import type { Package } from './data';

interface PricingInfoProps {
  selectedPackage: Package | null;
  onClose: () => void;
}

export const PricingInfo: React.FC<PricingInfoProps> = ({
  selectedPackage,
  onClose,
}) => {
  if (!selectedPackage) return null;

  return (
    <div className="fixed top-[80px] right-0 bottom-0 w-1/2 bg-white overflow-y-auto shadow-lg">
      <div className="sticky top-0 bg-white z-10 p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-serif text-[#253320]">
            {selectedPackage.title} Pricing
          </h2>
          <button
            onClick={onClose}
            className="text-4xl font-bold hover:text-gray-700 transition-colors"
            aria-label="Close pricing information"
          >
            ×
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-2xl font-bold text-[#253320]">
          {selectedPackage.pricing}
        </div>
        <p className="mt-4 text-gray-600">
          For more detailed pricing information or to discuss your specific needs,
          please contact our team.
        </p>
        <a
          href={selectedPackage.bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-[#253320] text-white px-6 py-3 rounded-lg hover:bg-[#485541] transition-colors duration-200"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};