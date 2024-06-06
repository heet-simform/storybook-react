import { forwardRef, type ComponentPropsWithoutRef } from "react";
import {
  children,
  className,
  color,
  size,
  variant,
} from "../types/components/button";
import { useTheme } from "../context/theme.tsx";
import { twMerge } from "tailwind-merge";
import objectsToString from "../utils/objectsToString.ts";
import findAMatch from "../utils/findAMatch.ts";
import classNames from "classnames";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: variant;

  color?: color;

  loading?: boolean;

  size?: size;

  children: children;

  className?: className;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, color, className, ...rest }, ref) => {
    const { button } = useTheme();
    const { valid, defaultProps, styles } = button;
    const { base, variants, sizes } = styles || {};
    className = twMerge(defaultProps?.className || "", className);

    variant = variant ?? defaultProps?.variant;
    size = size ?? defaultProps?.size;
    color = color ?? defaultProps?.color;

    const buttonBase = objectsToString(base?.initial || {}) ?? "";
    const btnVariant = findAMatch(
      valid?.variants ?? [],
      variant ?? "",
      "filled"
    ) as keyof typeof variants;
    const btnColor = findAMatch(valid?.colors ?? [], color ?? "", "black");
    const variantStyles = objectsToString(
      variants?.[btnVariant]?.[btnColor] ?? {}
    );
    const buttonSizes = objectsToString(
      sizes?.[
        findAMatch(valid?.sizes ?? [], size ?? "", "md") as keyof typeof sizes
      ] ?? {}
    );
    const classes = twMerge(
      classNames(buttonBase, variantStyles, buttonSizes),
      className
    );

    return (
      <button ref={ref} {...rest} className={classes}>
        Submit
      </button>
    );
  }
);
