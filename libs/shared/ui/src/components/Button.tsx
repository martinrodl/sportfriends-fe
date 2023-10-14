import { ReactNode } from 'react';

interface ButtonProps {
  onClick?: (e: any) => void;
  className: string;
  px?: number;
  icon?: ReactNode;
  iconSize?: number;
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
}
const Button = ({ onClick, className, px, iconSize, children, icon, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} ${
        px === undefined ? 'px-[20px]' : px
      } relative inline-flex   text-primary justify-center gap-x-[10px] font-semibold items-center w-full overflow-hidden border-2 rounded-[5px] transition-all duration-300 ease-in-out border-primary`}
    >
      {icon != undefined && <span className={`${iconSize}  h-min flex items-center`}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
