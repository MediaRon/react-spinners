import * as React from "react";

export type SpinnerProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
  speedMultiplier?: number; // like BeatLoader
};

export function withSpinnerControls(
  Comp: React.ComponentType<React.SVGProps<SVGSVGElement>>
) {
  return function Spinner({
    size = 24,
    color,
    speedMultiplier = 1,
    className,
    style,
    ...rest
  }: SpinnerProps) {
    // Base duration (seconds). Adjust if you want it faster/slower by default.
    const duration = 1 / Math.max(0.1, speedMultiplier);

    return (
      <Comp
        width={size}
        height={size}
        className={["dlx-spinner", className].filter(Boolean).join(" ")}
        style={{
          ...(color ? { color } : null),
          animationDuration: `${duration}s`,
          ...style,
        }}
        {...rest}
      />
    );
  };
}
