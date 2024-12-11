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
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="bg-white overflow-hidden"
      >
        <div className="border-t border-b border-gray-200">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-serif text-[#253320]">
                Package Details
              </h3>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
              <ul className="space-y-3">
                {includedServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-gray-700">{service.service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};