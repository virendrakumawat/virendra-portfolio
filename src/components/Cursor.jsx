import { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursorDot.style.top = `${y}px`;
      cursorDot.style.left = `${x}px`;
      cursorOutline.style.top = `${y}px`;
      cursorOutline.style.left = `${x}px`;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
    </>
  );
};

export default Cursor;