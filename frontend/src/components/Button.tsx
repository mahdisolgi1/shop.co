import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "tertiary";
  size: "xm" | "sm" | "md" | "lg" | "xl" | "xxl";
  children: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  variant,
  size,
  children,
  className = "",
  onClick,
  ...rest
}) => {
  // Define Tailwind classes for variants
  const variantClasses = {
    primary: "bg-primary-dark text-primary hover:bg-slate-700",
    secondary:
      "bg-primary-light text-primary-darkWithOpacity hover:bg-slate-400",
    tertiary: " bg-primary text-primary-dark  hover:bg-slate-300  ",
  };

  const sizeClasses = {
    xm: " py-2.5 px-5 text-[0.875rem] md:py-3 md:px-6 md:text-xs font-medium",
    sm: "py-3 px-4 text-[0.875rem] md:px-3 md:py-4 md:text-xs font-medium",
    md: "py-3 px-4 text-[0.75rem] md:px-4 md:py-5 md:text-xs font-medium",
    lg: "py-4 px-[3.375rem] text-[0.875rem]  font-mediums",
    xl: "py-3 px-4 text-[0.875rem] md:text-xs ",
    xxl: "py-4 px-[3.375rem] text-[0.875rem]  md:px-[3.375rem ] md:text-xm font-medium ",
  };

  const buttonClass = `${variantClasses[variant]} ${sizeClasses[size]} ${className} rounded-[3.875rem] focus:outline-none  hover:scale-110 cursor-pointer`;

  return (
    <button onClick={onClick} className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
