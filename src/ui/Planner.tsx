import React from 'react';
import { Circle, G, Svg, Path } from 'react-native-svg';
import { Colors } from './Colors';
import { pointOnCircle } from 'app/data/Coordinates';
import { Schedule, Task } from 'app/data/Schedule';
import { toMinutesInDay } from 'app/data/Time';

const TaskColors = [Colors.lilac, Colors.blue, Colors.yellow, Colors.orange];

const radius = 90;
export const Planner = ({
  size,
  schedule,
}: {
  size: number;
  schedule: Schedule;
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 200 200">
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <Circle
          stroke={Colors.lightGray}
          strokeWidth="16"
          cx="100"
          cy="100"
          r={radius}
        />
        {schedule.tasks.map((t, i) => (
          <Arc key={t.id} task={t} index={i} />
        ))}
      </G>
    </Svg>
  );
};

const midPos = toMinutesInDay('12:00');

const Arc = ({ task, index }: { task: Task; index: number }) => {
  const t1 = toMinutesInDay(task.startTime);
  const t2 = toMinutesInDay(task.endTime);
  const a1 = ((t1 - midPos) * 180) / midPos;
  const a2 = ((t2 - midPos) * 180) / midPos;
  const p1 = pointOnCircle(a1, radius, 100, 100);
  const p2 = pointOnCircle(a2, radius, 100, 100);
  const color = TaskColors[index % TaskColors.length];
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
