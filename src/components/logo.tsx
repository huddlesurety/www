import { MotionValue, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  withText?: boolean;
};

export const Logo = ({ withText = false }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-1 group">
      <Image src="/logo/light.png" alt="Huddle" width={24} height={24} />
      {withText && (
        <span className="font-medium tracking-tight transition-opacity text-primary">
          Huddle
        </span>
      )}
    </Link>
  );
};

type LogoSVGProps = {
  color?: string;
};

export const LogoSVG = ({ color = "currentColor" }: LogoSVGProps) => {
  // Fixed internal coordinate system - SVG scales to fill parent
  const size = 100;
  const radius = 15; // Increased from 12 to 15 (larger)

  const centerRadius = radius * 1.8;
  const edgeDistance = radius * 3.2;
  const distFromCenter = edgeDistance / Math.sqrt(3);

  // Calculate visual center offset
  // The centroid of the triangle is geometrically centered, but visually the shape
  // extends more downwards due to the base.
  // We shift the center down by 1/4 of the distance from center to vertex to balance it.
  const visualOffset = distFromCenter * 0.25;

  const centerX = size / 2;
  const centerY = size / 2 + visualOffset; // Shift down to center visually

  const angle120 = (2 * Math.PI) / 3;
  const topAngle = -Math.PI / 2;

  const topX = centerX + distFromCenter * Math.cos(topAngle);
  const topY = centerY + distFromCenter * Math.sin(topAngle);

  const bottomLeftX = centerX + distFromCenter * Math.cos(topAngle + angle120);
  const bottomLeftY = centerY + distFromCenter * Math.sin(topAngle + angle120);

  const bottomRightX =
    centerX + distFromCenter * Math.cos(topAngle + 2 * angle120);
  const bottomRightY =
    centerY + distFromCenter * Math.sin(topAngle + 2 * angle120);

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>Huddle logo</title>
      <defs>
        {/* Each mask cuts out ALL other circles */}
        <mask id="maskTop">
          <rect width={size} height={size} fill="white" />
          <circle cx={bottomLeftX} cy={bottomLeftY} r={radius} fill="black" />
          <circle cx={bottomRightX} cy={bottomRightY} r={radius} fill="black" />
          <circle cx={centerX} cy={centerY} r={centerRadius} fill="black" />
        </mask>

        <mask id="maskBottomLeft">
          <rect width={size} height={size} fill="white" />
          <circle cx={topX} cy={topY} r={radius} fill="black" />
          <circle cx={bottomRightX} cy={bottomRightY} r={radius} fill="black" />
          <circle cx={centerX} cy={centerY} r={centerRadius} fill="black" />
        </mask>

        <mask id="maskBottomRight">
          <rect width={size} height={size} fill="white" />
          <circle cx={topX} cy={topY} r={radius} fill="black" />
          <circle cx={bottomLeftX} cy={bottomLeftY} r={radius} fill="black" />
          <circle cx={centerX} cy={centerY} r={centerRadius} fill="black" />
        </mask>

        <mask id="maskCenter">
          <rect width={size} height={size} fill="white" />
          <circle cx={topX} cy={topY} r={radius} fill="black" />
          <circle cx={bottomLeftX} cy={bottomLeftY} r={radius} fill="black" />
          <circle cx={bottomRightX} cy={bottomRightY} r={radius} fill="black" />
        </mask>
      </defs>

      {/* Top circle */}
      <circle
        cx={topX}
        cy={topY}
        r={radius}
        fill={color}
        mask="url(#maskTop)"
      />
      {/* Bottom left circle */}
      <circle
        cx={bottomLeftX}
        cy={bottomLeftY}
        r={radius}
        fill={color}
        mask="url(#maskBottomLeft)"
      />
      {/* Bottom right circle */}
      <circle
        cx={bottomRightX}
        cy={bottomRightY}
        r={radius}
        fill={color}
        mask="url(#maskBottomRight)"
      />
      {/* Center circle */}
      <circle
        cx={centerX}
        cy={centerY}
        r={centerRadius}
        fill={color}
        mask="url(#maskCenter)"
      />
    </svg>
  );
};

export const LogoOutlineSVG = ({
  color = "currentColor",
  strokeWidth = 1,
}: LogoSVGProps & { strokeWidth?: number | MotionValue<number> }) => {
  const size = 100;
  const radius = 15;

  const centerRadius = radius * 1.8;
  const edgeDistance = radius * 3.2;
  const distFromCenter = edgeDistance / Math.sqrt(3);

  const visualOffset = distFromCenter * 0.25;

  const centerX = size / 2;
  const centerY = size / 2 + visualOffset;

  const angle120 = (2 * Math.PI) / 3;
  const topAngle = -Math.PI / 2;

  const topX = centerX + distFromCenter * Math.cos(topAngle);
  const topY = centerY + distFromCenter * Math.sin(topAngle);

  const bottomLeftX = centerX + distFromCenter * Math.cos(topAngle + angle120);
  const bottomLeftY = centerY + distFromCenter * Math.sin(topAngle + angle120);

  const bottomRightX =
    centerX + distFromCenter * Math.cos(topAngle + 2 * angle120);
  const bottomRightY =
    centerY + distFromCenter * Math.sin(topAngle + 2 * angle120);

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>Huddle logo outline</title>

      <motion.circle
        cx={topX}
        cy={topY}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={bottomLeftX}
        cy={bottomLeftY}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={bottomRightX}
        cy={bottomRightY}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <motion.circle
        cx={centerX}
        cy={centerY}
        r={centerRadius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
