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
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="bg-white overflow-hidden"
      >
        <div className="border-t border-b border-gray-200">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-serif text-[#253320]">
                Pricing Information
              </h3>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close pricing information"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
              <div className="text-xl font-bold text-[#253320] mb-4">
                {selectedPackage.pricing}
              </div>
              <p className="text-sm text-gray-600 mb-6">
                For more detailed pricing information or to discuss your specific needs,
                please contact our team.
              </p>
              <a
                href={selectedPackage.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#253320] text-white px-6 py-3 rounded-lg hover:bg-[#485541] transition-colors duration-200 text-sm font-medium"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};