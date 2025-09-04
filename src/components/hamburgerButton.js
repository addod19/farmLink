import { forwardRef } from "react";
import { motion } from "framer-motion";

export const HamburgerButton = forwardRef(function HamburgerButton(
  { open, onToggle, size = 40, className = "", label = "Open menu" },
  ref
) {
  const lineStyle = {
    display: "block",
    width: "24px",
    height: "3px",
    borderRadius: "2px",
    backgroundColor: "#212529",
    margin: "5px 0",
  };

  return (
    <motion.button
      ref={ref}
      aria-label={label}
      aria-expanded={open}
      onClick={onToggle}
      className={`d-flex align-items-center justify-content-center border-0 bg-transparent ${className}`}
      style={{ width: size, height: size }}
    >

      <span className="position-relative d-inline-block">
        <motion.span
          style={lineStyle}
          animate={{
            y: open ? 8 : -8,
            rotate: open ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
        <motion.span
          style={lineStyle}
          animate={{
            opacity: open ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          style={lineStyle}
          animate={{
            y: open ? -8 : 8,
            rotate: open ? -45 : 0,
          }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </span>
    </motion.button>
  );
});
