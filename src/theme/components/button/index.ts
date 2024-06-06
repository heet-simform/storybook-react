import {
  buttonColors,
  buttonSizes,
  buttonVariants,
  className,
  color,
  size,
  variant,
} from "../../../types/components/button";
import { buttonFilled } from "./buttonFilled";
import { buttonOutlined } from "./buttonOutlined";

export type ButtonStyle = {
  defaultProps?: {
    variant?: variant;
    size?: size;
    color?: color;
    className?: className;
  };
  valid?: {
    variants?: string[];
    sizes?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      initial?: object;
    };
    sizes?: {
      sm?: object;
      md?: object;
      lg?: object;
    };
    variants?: {
      filled?: typeof buttonFilled;
      outlined?: typeof buttonOutlined;
    };
  };
};

export const button: ButtonStyle = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "black",
    className: "",
  },
  valid: {
    variants: buttonVariants,
    sizes: buttonSizes,
    colors: buttonColors,
  },
  styles: {
    base: {
      initial: {},
    },
    sizes: {
      sm: {
        fontSize: "text-xs",
        py: "py-2",
        px: "px-4",
        borderRadius: "rounded-lg",
      },
      md: {
        fontSize: "text-xs",
        py: "py-3",
        px: "px-6",
        borderRadius: "rounded-lg",
      },
      lg: {
        fontSize: "text-sm",
        py: "py-3.5",
        px: "px-7",
        borderRadius: "rounded-lg",
      },
    },
    variants: {
      filled: buttonFilled,
      outlined: buttonOutlined,
    },
  },
};
