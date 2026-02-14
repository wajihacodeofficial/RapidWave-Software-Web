import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate(${clientX - 20}px, ${clientY - 20}px)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hide-mobile" />
      <div ref={outlineRef} className="cursor-outline hide-mobile" />
    </>
  );
};

export default Cursor;
