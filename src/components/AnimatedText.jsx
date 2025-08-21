import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedText({ text, el = 'p', className }) {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };
  const MotionComponent = motion[el];

  return (
    <MotionComponent
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.25em' }} // Words ke beech space
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
}