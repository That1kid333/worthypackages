import React from 'react';
import { Check, X } from 'lucide-react';
import { packageDetails } from './data';

interface PackageDetailsProps {
  selectedPackage: string | null;
  onClose: () => void;
}

export const PackageDetails: React.FC<PackageDetailsProps> = ({
  selectedPackage,
  onClose,
}) => {
  if (!selectedPackage) return null;

  const includedServices = packageDetails.filter((detail) =>
    detail.packages.includes(selectedPackage)
  );

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 bottom-0 w-full md:w-[500px] max-w-full bg-white overflow-y-auto shadow-lg z-50">
        <div className="sticky top-0 bg-white z-10 border-b">
          {/* Close button for mobile - fixed at the top */}
          <button
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close details"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="p-4 pt-6 md:p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-serif text-[#253320] pr-12 md:pr-0">
                {selectedPackage} Package Details
              </h2>
              {/* Close button for desktop */}
              <button
                onClick={onClose}
                className="hidden md:flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Close details"
              >
                <span className="text-sm font-medium">Close</span>
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <ul className="space-y-3">
            {includedServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" />
                <span>{service.service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};