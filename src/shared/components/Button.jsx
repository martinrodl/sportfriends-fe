import React from 'react';

const Button = ({
  position,
  width,
  height,
  children,
  onClick,
  className,
  type,
  fontSize,
  fontWeight,
  bg,
  brColor,
  icon,
  iconSize,
  brRadius,
  px,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        maxWidth: width,
        height: height,
        fontSize: fontSize,
        fontWeight: fontWeight,
        background: bg,
        border: brColor,
        position: position,
        borderRadius: brRadius,
      }}
      className={`${className} ${
        px === undefined ? 'px-[20px]' : px
      } relative inline-flex   text-primary justify-center gap-x-[10px] font-semibold items-center w-full overflow-hidden border-2 rounded-[5px] transition-all duration-300 ease-in-out border-primary`}
      {...props}
    >
      {icon != undefined && <span className={`${iconSize}  h-min flex items-center`}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
