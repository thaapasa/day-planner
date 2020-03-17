import React from 'react';
import {Circle, G, Svg, Path} from 'react-native-svg';
import {Colors} from './Colors';
import {pointOnCircle} from 'app/data/Coordinates';

const radius = 90;
export const Planner = ({size}: {size: number}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <Circle
          stroke={Colors.yellow}
          strokeWidth="16"
          cx="100"
          cy="100"
          r={radius}
        />
        <Arc a1={-70} a2={20} color={Colors.lilac} />
        <Arc a1={20} a2={50} color={Colors.blue} />
      </G>
    </Svg>
  );
};

const Arc = ({a1, a2, color}: {a1: number; a2: number; color: string}) => {
  const p1 = pointOnCircle(a1, radius, 100, 100);
  const p2 = pointOnCircle(a2, radius, 100, 100);
  return (
    <Path
      stroke={color}
      strokeWidth={16}
      d={`M ${p1.x} ${200 - p1.y} A ${radius} ${radius} 0 0 1 ${p2.x} ${200 -
        p2.y}`}
      fill="none"
    />
  );
};
