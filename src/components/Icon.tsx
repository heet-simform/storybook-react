import classNames from "classnames";
import { useTheme } from "../context/theme";
import { size, variant } from "../types/components/icon";
import findAMatch from "../utils/findAMatch";
import objectsToString from "../utils/objectsToString";

type IconProps = {
  variant?: variant;

  size?: size;

  children: React.ReactNode;

  color?: "black" | "amber";

  className?: string;
};

function Icon({
  variant,
  size,
  color,
  children = "setting",
  className = "material-icons",
  ...props
}: IconProps) {
  const { icon } = useTheme();
  const { defaultProps, styles, valid } = icon;
  const { base, variants, sizes } = styles || {};

  const iconBase = objectsToString(base?.initial ?? {});
  variant = variant ?? defaultProps?.variant;
  size = size ?? defaultProps?.size;
  const iconVariants = findAMatch(
    valid?.variants ?? [],
    variant ?? "",
    "filled"
  ) as keyof typeof variants;
  const materialIconClass = `material-icons-${iconVariants}`;
  const iconColor = findAMatch(valid?.colors ?? [], color, "amber") as string;
  const iconStyle = objectsToString(
    styles?.variants?.[iconVariants]?.[iconColor] ?? {}
  );
  const iconSize =
    sizes?.[
      findAMatch(valid?.sizes ?? [], size ?? "", "md") as keyof typeof sizes
    ];
  const classes = classNames(
    iconBase,
    iconStyle,
    iconSize,
    materialIconClass,
    className
  );

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

export default Icon;
