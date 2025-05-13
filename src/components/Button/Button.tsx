import type { ComponentProps, PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps extends ComponentProps<"button"> {
  action?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  ariaRole?: "img";
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  action,
  className,
  type = "button",
  ariaLabel,
  ariaRole,
  children,
  ...buttonProps
}) => {
  return (
    <button
      className={`${className ?? ""}`}
      type={type}
      onClick={action}
      aria-label={ariaLabel}
      role={ariaRole}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
