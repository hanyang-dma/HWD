import React from 'react';

const BauhausBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {/* Circle */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-4 border-bauhaus-red bg-transparent" />
      
      {/* Square */}
      <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-bauhaus-blue bg-bauhaus-blue/10 rotate-12" />
      
      {/* Triangle (CSS trick) */}
      <div className="absolute top-1/2 left-1/4 w-0 h-0 
        border-l-[60px] border-l-transparent
        border-r-[60px] border-r-transparent
        border-b-[100px] border-b-bauhaus-yellow opacity-40 transform -rotate-12" 
      />

      {/* Grid Lines */}
      <div className="absolute top-0 right-1/4 h-full w-px bg-bauhaus-black opacity-10" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-bauhaus-black opacity-10" />
    </div>
  );
};

export default BauhausBackground;
