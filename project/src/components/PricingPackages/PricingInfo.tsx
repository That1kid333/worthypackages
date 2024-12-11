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
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="mt-4 bg-[#253320] bg-opacity-95 rounded-md text-white"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">
              Pricing Information
            </h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#485541] rounded-full transition-colors"
              aria-label="Close pricing information"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="text-xl font-bold">
              {selectedPackage.pricing}
            </div>
            <p className="text-sm text-gray-200">
              For more detailed pricing information or to discuss your specific needs,
              please contact our team.
            </p>
            <a
              href={selectedPackage.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-white text-[#253320] px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              Book Now
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};