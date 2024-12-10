import React from 'react';
import { Check } from 'lucide-react';
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
      <div className="fixed top-[80px] right-0 bottom-0 w-1/2 bg-white overflow-y-auto shadow-lg z-50">
        <div className="sticky top-0 bg-white z-10 p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-serif text-[#253320]">
              {selectedPackage} Package Details
            </h2>
            <button
              onClick={onClose}
              className="text-4xl font-bold hover:text-gray-700 transition-colors"
              aria-label="Close details"
            >
              ×
            </button>
          </div>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            {includedServices.map((service, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-5 h-5 mr-2 text-green-500" />
                {service.service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};