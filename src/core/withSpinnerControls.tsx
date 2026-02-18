import * as React from "react";

export type SpinnerProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
  speedMultiplier?: number; // like BeatLoader
};

export function withSpinnerControls(
  Comp: React.ComponentType<React.SVGProps<SVGSVGElement>>
) {
  /**
   * Wraps the spinner component with additional props and styles.
   *
   * @param {Object} props - The props for the spinner component.
   * @param {number} props.size - The size of the spinner.
   * @param {string} props.color - The color of the spinner.
   * @param {number} props.speedMultiplier - The speed multiplier for the spinner.
   * @param {string} props.className - The class name for the spinner.
   * @param {Object} props.style - The style for the spinner.
   * @return {React.ComponentType<React.SVGProps<SVGSVGElement>>} The wrapped spinner component.
   */
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
		aria-label="Loading..."
		role="img"
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
