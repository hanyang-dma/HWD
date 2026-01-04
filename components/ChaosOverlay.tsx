import React, { useEffect, useState } from 'react';

interface ChaosOverlayProps {
  level: number; // 0 = clean, 1+ = chaos
}

const ChaosOverlay: React.FC<ChaosOverlayProps> = ({ level }) => {
  const [elements, setElements] = useState<Array<{top: number, left: number, char: string, size: number}>>([]);

  useEffect(() => {
    if (level > 0) {
      const ornamaents = ['❦', '❧', '⚜️', '✿', '✺', 'ꕥ', '???', 'ERROR', '$$$'];
      const newElements = Array.from({ length: level * 15 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        char: ornamaents[Math.floor(Math.random() * ornamaents.length)],
        size: Math.random() * 2 + 1
      }));
      setElements(newElements);
    } else {
      setElements([]);
    }
  }, [level]);

  if (level === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {/* CRT Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] pointer-events-none" />
        
        {elements.map((el, i) => (
            <div 
                key={i}
                className="absolute text-bauhaus-black opacity-40 font-serif"
                style={{
                    top: `${el.top}%`,
                    left: `${el.left}%`,
                    fontSize: `${el.size}rem`,
                    transform: `rotate(${Math.random() * 360}deg)`
                }}
            >
                {el.char}
            </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <h1 className="text-9xl font-bold uppercase glitch-text" data-text="ORNAMENT">ORNAMENT</h1>
        </div>
    </div>
  );
};

export default ChaosOverlay;
