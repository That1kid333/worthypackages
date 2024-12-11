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
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="mt-4 bg-[#253320] bg-opacity-95 rounded-md text-white"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">
              Package Details
            </h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#485541] rounded-full transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
            <ul className="space-y-3">
              {includedServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-green-400" />
                  <span className="text-sm">{service.service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};