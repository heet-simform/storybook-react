import {
  className,
  color,
  icoSizes,
  iconColors,
  iconVariants,
  size,
  variant,
} from "../../../types/components/icon";
import { iconFilled } from "./iconFilled";
import { iconOutlined } from "./iconOutlined";

export type IconStyle = {
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
      sm?: string;
      md?: string;
      lg?: string;
    };
    variants?: {
      filled?: typeof iconFilled;
      outlined?: typeof iconOutlined;
    };
  };
};

export const icon: IconStyle = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "black",
    className: "",
  },
  valid: {
    variants: iconVariants,
    sizes: icoSizes,
    colors: iconColors,
  },
  styles: {
    base: {
      initial: {},
    },
    sizes: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-5xl",
    },
    variants: {
      filled: iconFilled,
      outlined: iconOutlined,
    },
  },
};
