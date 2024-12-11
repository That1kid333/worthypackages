import React from 'react';
import { Check, X } from 'lucide-react';
import { packageDetails } from './data';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

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
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="absolute right-0 top-0 w-[400px] max-h-[500px] bg-white rounded-lg shadow-xl overflow-hidden z-50"
      >
        <div className="sticky top-0 bg-white border-b border-gray-100">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-serif text-[#253320]">
                {selectedPackage} Details
              </h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 overflow-y-auto max-h-[400px] custom-scrollbar">
          <ul className="space-y-3">
            {includedServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" />
                <span className="text-sm text-gray-700">{service.service}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};