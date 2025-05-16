import type { ComponentProps, PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps extends ComponentProps<"button"> {
  action?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  action,
  className,
  type = "button",
  children,
  ...buttonProps
}) => {
  return (
    <button
      className={`${className ?? ""}`}
      type={type}
      onClick={action}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
