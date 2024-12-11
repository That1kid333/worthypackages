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
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: '300px' }}
        exit={{ opacity: 0, width: 0 }}
        className="inline-block align-top ml-4 bg-white rounded border border-gray-200"
      >
        <div className="p-3">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium text-[#253320]">
              Package Details
            </h3>
            <button
              onClick={onClose}
              className="p-0.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close details"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <div className="max-h-[200px] overflow-y-auto custom-scrollbar pr-2">
            <ul className="space-y-2">
              {includedServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                  <span className="text-xs text-gray-700">{service.service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};