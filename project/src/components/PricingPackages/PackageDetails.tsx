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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-[#2D3C2A] rounded-md text-white my-4"
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-medium">
              Package Details
            </h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#485541] rounded-full transition-colors"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="max-h-[250px] overflow-y-auto custom-scrollbar pr-2">
            <ul className="space-y-2">
              {includedServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-400" />
                  <span className="text-sm text-gray-100">{service.service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};