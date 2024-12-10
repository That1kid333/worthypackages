import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { Package } from './data';

interface PackageCardProps {
  pkg: Package;
  index: number;
  totalPackages: number;
  onViewDetails: () => void;
  onViewPricing: () => void;
  isExpanded: boolean;
  onCardClick: () => void;
  isActive: boolean;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  index,
  totalPackages,
  onViewDetails,
  onViewPricing,
  isExpanded,
  onCardClick,
  isActive,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  const titleHeight = 80;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -titleHeight * (totalPackages - index - 1)]
  );

  const handleTitleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onCardClick();
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      className={`${pkg.backgroundColor} ${pkg.textColor} shadow-xl overflow-hidden transition-all duration-500 ease-in-out`}
    >
      <div className={`max-w-6xl mx-auto px-4 ${isActive ? 'py-4' : 'py-2.5'} transition-all duration-300`}>
        <motion.div 
          onClick={handleTitleClick}
          className="flex items-center justify-between cursor-pointer group"
        >
          <motion.h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-serif z-10 transition-all duration-300 ${isActive ? 'mb-4 pb-4 border-b border-current' : 'mb-0 pb-0 border-b-0'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {pkg.title}
          </motion.h2>
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="transform group-hover:scale-110 transition-transform"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isActive ? 1 : 0,
            height: isActive ? 'auto' : 0,
            marginTop: isActive ? '1rem' : 0
          }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <div className="max-w-xl">
            <motion.p 
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {pkg.description}
            </motion.p>
            
            <div className="space-y-4">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails();
                }}
                className="w-full text-left group flex items-center justify-between py-3 border-t border-current hover:bg-black/5 transition-colors"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                VIEW DETAILS
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </motion.button>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewPricing();
                }}
                className="w-full text-left group flex items-center justify-between py-3 border-t border-current hover:bg-black/5 transition-colors"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                PRICING INFORMATION
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </motion.button>
              <motion.a 
                href={pkg.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full text-left group flex items-center justify-between py-3 border-t border-current hover:bg-black/5 transition-colors"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                BOOK NOW
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};