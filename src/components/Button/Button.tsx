import React, { ComponentProps } from "react";
import styles from "./Button.module.scss";

type ButtonProps = ComponentProps<"button"> & {
  /**
   * The button vairant
   */
  variant?: "primary" | "secondary";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "secondary",
  size = "medium",
  backgroundColor,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[styles.button, styles[size], styles[variant]].join(" ")}
      style={{ backgroundColor }}
      {...props}
    />
  );
};
