import type { ComponentProps, PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps extends ComponentProps<"button"> {
  action?: () => void;
  className?: string;
  modifier?: string;
  type?: "button" | "submit";
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  action,
  className,
  modifier,
  type = "button",
  children,
  ...buttonProps
}) => {
  const modifierClass = modifier ? ` button--${modifier}` : "";

  return (
    <button
      className={`${className ?? ""}${modifierClass}`}
      type={type}
      onClick={action}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
