import React from 'react';
import { Circle, G, Path, Svg } from 'react-native-svg';
import { Colors } from './Colors';
import { pointOnCircle } from 'app/data/Coordinates';
import { Schedule, Task } from 'app/data/Schedule';
import { dayMiddleMinutes, toMinutesInDay } from 'app/data/Time';

const TaskColors = [Colors.lilac, Colors.blue, Colors.yellow, Colors.orange];

export const Planner = ({
  size,
  thickness,
  schedule,
}: {
  size: number;
  thickness: number;
  schedule: Schedule;
}) => {
  const radius = 99 - thickness / 2;
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <Circle
          stroke={Colors.lightGray}
          strokeWidth={thickness}
          cx="100"
          cy="100"
          r={radius}
        />
        {schedule.tasks.map((t, i) => (
          <Arc
            key={t.id}
            task={t}
            index={i}
            radius={radius}
            thickness={thickness}
          />
        ))}
      </G>
    </Svg>
  );
};

const Arc = ({
  task,
  index,
  radius,
  thickness,
}: {
  task: Task;
  index: number;
  radius: number;
  thickness: number;
}) => {
  const t1 = toMinutesInDay(task.startTime);
  const t2 = toMinutesInDay(task.endTime);
  const a1 = ((t1 - dayMiddleMinutes) * 180) / dayMiddleMinutes;
  const a2 = ((t2 - dayMiddleMinutes) * 180) / dayMiddleMinutes;
  const p1 = pointOnCircle(a1, radius, 100, 100);
  const p2 = pointOnCircle(a2, radius, 100, 100);
  const color = task.color ?? TaskColors[index % TaskColors.length];
  return (
    <Path
      stroke={color}
      strokeWidth={thickness}
      d={`M ${p1.x} ${200 - p1.y} A ${radius} ${radius} 0 0 1 ${p2.x} ${200 -
        p2.y}`}
      fill="none"
    />
  );
};
