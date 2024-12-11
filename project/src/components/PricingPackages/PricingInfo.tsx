import React from 'react';
import { X } from 'lucide-react';
import type { Package } from './data';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';

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
              Pricing Information
            </h3>
            <button
              onClick={onClose}
              className="p-0.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close pricing information"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <div className="max-h-[200px] overflow-y-auto custom-scrollbar pr-2">
            <div className="text-sm font-bold text-[#253320] mb-2">
              {selectedPackage.pricing}
            </div>
            <p className="text-xs text-gray-600 mb-4">
              For more detailed pricing information or to discuss your specific needs,
              please contact our team.
            </p>
            <a
              href={selectedPackage.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-[#253320] text-white px-4 py-2 rounded hover:bg-[#485541] transition-colors duration-200 text-xs font-medium"
            >
              Book Now
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};