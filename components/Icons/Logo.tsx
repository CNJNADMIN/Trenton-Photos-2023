// Logo.tsx

// Import the SVG file as a React component
import React from 'react';
import LogoSVG from '../../public/white-logo.svg'; // Adjust the path based on your directory structure

// Create a functional React component for the logo
export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      {/* Use the imported SVG as a React component */}
      <LogoSVG width="300" height="150" style={{ fill: 'currentColor' }} />
    </div>
  );
}
