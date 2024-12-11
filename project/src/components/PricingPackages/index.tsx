import React, { useState, useEffect, useRef } from 'react';
import { PackageCard } from './PackageCard';
import { PackageDetails } from './PackageDetails';
import { PricingInfo } from './PricingInfo';
import { packages } from './data';
import type { Package } from './data';

interface PricingPackagesProps {
  height?: string;
  width?: string;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({
  height = '100vh',
  width = '100%',
}) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [showPricing, setShowPricing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [activePackageIndex, setActivePackageIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const packageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateHeight = () => setWindowHeight(window.innerHeight);
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleViewDetails = (packageTitle: string) => {
    setSelectedPackage(packageTitle);
    setShowPricing(false);
    setShowDetails(true);
  };

  const handleViewPricing = (pkg: Package) => {
    setSelectedPackage(pkg.title);
    setShowPricing(true);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  const handlePackageClick = (index: number) => {
    setActivePackageIndex(activePackageIndex === index ? null : index);
    if (packageRefs.current[index]) {
      packageRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative bg-white" style={{ height, width }}>
      <div className="flex flex-col">
        <div
          ref={containerRef}
          className="w-full transition-all duration-300 ease-in-out overflow-y-auto"
          style={{ height: '100vh' }}
        >
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              ref={el => packageRefs.current[index] = el}
              className={`transition-all duration-500 ease-in-out`}
            >
              <PackageCard
                pkg={pkg}
                index={index}
                totalPackages={packages.length}
                onViewDetails={() => handleViewDetails(pkg.title)}
                onViewPricing={() => handleViewPricing(pkg)}
                isExpanded={true}
                onCardClick={() => handlePackageClick(index)}
                isActive={activePackageIndex === index}
              />
              {activePackageIndex === index && showDetails && (
                <div className="px-4 max-w-6xl mx-auto">
                  {showPricing ? (
                    <PricingInfo
                      selectedPackage={pkg}
                      onClose={handleCloseDetails}
                    />
                  ) : (
                    <PackageDetails
                      selectedPackage={pkg.title}
                      onClose={handleCloseDetails}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};