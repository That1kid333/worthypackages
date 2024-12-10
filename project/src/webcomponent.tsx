import React from 'react';
import { createRoot } from 'react-dom/client';
import { PricingPackages } from './components/PricingPackages';

class PricingPackagesElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const height = this.getAttribute('height') || '800px';
    const width = this.getAttribute('width') || '100%';

    const root = createRoot(mountPoint);
    root.render(
      <PricingPackages height={height} width={width} />
    );
  }
}

customElements.define('pricing-packages', PricingPackagesElement);