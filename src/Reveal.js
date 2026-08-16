// src/Reveal.js
import React, { useEffect, useRef, useState } from 'react';

// Wraps any block of content and fades/slides it into place the first time
// it scrolls into view. `direction` picks the entrance style and `delay`
// (ms) lets sibling items stagger in one after another.
const Reveal = ({
  children,
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  className = '',
  ...rest
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const directionClass =
    direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : direction === 'zoom' ? 'reveal-zoom' : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${directionClass} ${visible ? 'reveal-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
