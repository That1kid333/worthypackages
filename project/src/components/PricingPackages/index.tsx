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

  const headerHeight = 80;
  const titleHeight = 80;

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
      <div className="flex">
        <div
          ref={containerRef}
          className={`${
            showDetails ? 'w-1/2' : 'w-full'
          } transition-all duration-300 ease-in-out overflow-y-auto`}
          style={{ height: '100vh' }}
        >
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              ref={el => packageRefs.current[index] = el}
              className={`transition-all duration-500 ease-in-out ${
                activePackageIndex !== null && activePackageIndex !== index
                  ? 'h-[64px]'
                  : ''
              }`}
              style={{
                position: 'relative',
                top: 0,
              }}
            >
              <PackageCard
                pkg={pkg}
                index={index}
                totalPackages={packages.length}
                onViewDetails={() => handleViewDetails(pkg.title)}
                onViewPricing={() => handleViewPricing(pkg)}
                isExpanded={!showDetails}
                onCardClick={() => handlePackageClick(index)}
                isActive={activePackageIndex === index}
              />
            </div>
          ))}
        </div>
      </div>
      {showDetails &&
        (showPricing ? (
          <PricingInfo
            selectedPackage={
              packages.find((p) => p.title === selectedPackage) || null
            }
            onClose={handleCloseDetails}
          />
        ) : (
          <PackageDetails
            selectedPackage={selectedPackage}
            onClose={handleCloseDetails}
          />
        ))}
    </div>
  );
};