export interface Coordinate {
  x: number;
  y: number;
}

export function pointOnCircle(angleDegrees: number, r: number, offsetX: number, offsetY: number): Coordinate {
  const angle = (angleDegrees * Math.PI) / 180;
  return {
    x: r * Math.sin(angle) + (offsetX ?? 0),
    y: r * Math.cos(angle) + (offsetY ?? 0),
  };
}
