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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-[#2D3C2A] rounded-md text-white my-4"
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-medium">
              Pricing Information
            </h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#485541] rounded-full transition-colors"
              aria-label="Close pricing information"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            <div className="text-lg font-bold">
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
              className="inline-block w-full text-center bg-white text-[#253320] px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-200 text-sm font-medium"
            >
              Book Now
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};